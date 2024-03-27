import { useContext } from 'react';
import { Group } from 'react-konva';

import { MOTION_INTERVAL } from '@/constants/motion/motion-intervals';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { findCarbonicAcidCoordinates } from '@/utils/molecules';
import { CarbonDioxideCycleType } from '@/utils/molecules/types';
import { createDissociation, createFormation } from '@/utils/motion-objects';

import CarbonDioxideMigration from './CarbonDioxideMigration';
import CarbonicAcidDissociation from './CarbonicAcidDissociation';
import CarbonicAcidFormation from './CarbonicAcidFormation';

interface Props {
  cycle: CarbonDioxideCycleType;
  beginsAt: number;
}

const CarbonDioxideCycle = ({ cycle, beginsAt }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions } = state;
  const { width, height } = dimensions;
  const { co2Migration, waterBegins, carbonicAcidEnds, hydrogenEnds } = cycle;
  const { deProtonates } = cycle;
  const { co2 } = co2Migration;

  const formation = createFormation(co2.ends, waterBegins);

  const carbonicAcidBegins = findCarbonicAcidCoordinates(
    co2.ends,
    waterBegins,
    height,
    width,
  );

  const dissociation = createDissociation(
    carbonicAcidBegins,
    carbonicAcidEnds,
    hydrogenEnds,
    true,
  );

  return (
    <Group>
      <CarbonDioxideMigration
        beginsAfter={beginsAt}
        molecules={co2Migration}
        reverse={false}
        hideAfterCompletion
      />
      <CarbonicAcidFormation
        beginsAfter={beginsAt + MOTION_INTERVAL}
        molecules={formation}
        reverse={false}
        hideCo2AtStart
        hideAfterCompletion={deProtonates}
      />
      {deProtonates && (
        <CarbonicAcidDissociation
          beginsAfter={beginsAt + MOTION_INTERVAL * 2}
          molecules={dissociation}
          hideAtStart
          reverse={false}
        />
      )}
    </Group>
  );
};

export default CarbonDioxideCycle;

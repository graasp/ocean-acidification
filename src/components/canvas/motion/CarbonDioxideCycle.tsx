import { useContext } from 'react';
import { Group } from 'react-konva';

import { MOTION_INTERVAL } from '@/constants/motion/motion-intervals';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { findCarbonicAcidCoordinates } from '@/utils/molecules';
import { SliderMoleculesType } from '@/utils/molecules/types';
import {
  createDissociation,
  createFormation,
  createMigration,
} from '@/utils/motion-objects';

import CarbonDioxideMigration from './CarbonDioxideMigration';
import CarbonicAcidDissociation from './CarbonicAcidDissociation';
import CarbonicAcidFormation from './CarbonicAcidFormation';

interface Props {
  sliderMolecule: SliderMoleculesType;
}

const CarbonDioxideCycle = ({ sliderMolecule }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions } = state;
  const { width, height } = dimensions;
  const { molecules, properties } = sliderMolecule;
  const { carbonDioxide, waterBegins, carbonicAcidEnds, hydrogenEnds } =
    molecules;
  const { showReactiveCarbonDioxide, beginsAt, reverse, deProtonates } =
    properties;

  const formation = createFormation(carbonDioxide.ends, waterBegins);
  const carbonicAcidBegins = findCarbonicAcidCoordinates(
    carbonDioxide.ends,
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
      {showReactiveCarbonDioxide && (
        <CarbonDioxideMigration
          beginsAfter={beginsAt}
          molecules={createMigration(carbonDioxide.begins, carbonDioxide.ends)}
          reverse={reverse}
          hideAfterCompletion
        />
      )}
      <CarbonicAcidFormation
        beginsAfter={beginsAt + MOTION_INTERVAL}
        molecules={formation}
        reverse={reverse}
        hideCo2AtStart
        hideAfterCompletion={deProtonates}
      />
      {deProtonates && (
        <CarbonicAcidDissociation
          beginsAfter={beginsAt + MOTION_INTERVAL * 2}
          molecules={dissociation}
          hideAtStart
          reverse={reverse}
        />
      )}
    </Group>
  );
};

export default CarbonDioxideCycle;

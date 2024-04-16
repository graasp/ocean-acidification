import { useContext } from 'react';
import { Group } from 'react-konva';

import { MOTION_INTERVAL } from '@/constants/motion/motion-intervals';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { findCarbonicAcidCoordinates } from '@/utils/molecules';
import { ReactiveSliderMoleculesType } from '@/utils/molecules/types';
import {
  createDissociation,
  createFormation,
  createMigration,
} from '@/utils/motion-objects';

import CarbonDioxideMigration from './CarbonDioxideMigration';
import CarbonicAcidDissociation from './CarbonicAcidDissociation';
import CarbonicAcidFormation from './CarbonicAcidFormation';

interface Props {
  sliderMolecule: ReactiveSliderMoleculesType;
}

const CarbonDioxideCycle = ({ sliderMolecule }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions } = state;
  const { width, height } = dimensions;
  const { molecules, properties } = sliderMolecule;
  const { carbonDioxide, waterBegins, carbonicAcidEnds, hydrogenEnds } =
    molecules;
  const { beginsAt, reverse } = properties;

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

  const co2migrationMolecules = reverse
    ? createMigration(carbonDioxide.begins, carbonDioxide.ends)
    : createMigration(carbonDioxide.begins, carbonDioxide.ends);

  return (
    <Group>
      <CarbonDioxideMigration
        beginsAfter={reverse ? beginsAt + MOTION_INTERVAL * 2 : beginsAt}
        molecules={co2migrationMolecules}
        reverse={reverse}
        backwards={reverse}
        hideAtStart={reverse}
        hideAfterCompletion
      />
      <CarbonicAcidFormation
        beginsAfter={beginsAt + MOTION_INTERVAL}
        molecules={formation}
        reverse={reverse}
        hideCo2AtStart
        hideAfterCompletion
      />
      <CarbonicAcidDissociation
        beginsAfter={reverse ? beginsAt : beginsAt + MOTION_INTERVAL * 2}
        molecules={dissociation}
        hideAtStart
        reverse={reverse}
      />
    </Group>
  );
};

export default CarbonDioxideCycle;

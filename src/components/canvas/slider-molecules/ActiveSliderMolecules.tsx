import { useContext } from 'react';
import { Group } from 'react-konva';

import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import Water from '../molecules/Water';
import CarbonDioxideCycle from '../motion/CarbonDioxideCycle';

const ActiveSliderMolecules = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions, activeMoleculeDistribution } = state;
  const { width, height } = dimensions;

  return (
    <Group>
      {activeMoleculeDistribution.map(
        (molecule, index) =>
          molecule.properties.showCycle && (
            <CarbonDioxideCycle sliderMolecule={molecule} key={index} />
          ),
      )}
      {activeMoleculeDistribution.map(
        (molecule, index) =>
          !molecule.properties.showCycle &&
          !molecule.properties.reverse &&
          molecule.properties.formsCarbonicAcid && (
            <Water
              x={molecule.molecules.waterBegins.x * width}
              y={molecule.molecules.waterBegins.y * height}
              rotation={molecule.molecules.waterBegins.rotation}
              key={index}
            />
          ),
      )}
    </Group>
  );
};

export default ActiveSliderMolecules;

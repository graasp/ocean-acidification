import { useContext } from 'react';
import { Group } from 'react-konva';

import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import Water from '../molecules/Water';
import CarbonDioxideCycle from '../motion/CarbonDioxideCycle';

const ReactiveSliderMolecules = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions, reactiveMoleculeDistribution } = state;
  const { width, height } = dimensions;

  return (
    <Group>
      {reactiveMoleculeDistribution.map(
        (molecule, index) =>
          molecule.properties.showCycle && (
            <CarbonDioxideCycle sliderMolecule={molecule} key={index} />
          ),
      )}
      {reactiveMoleculeDistribution.map(
        (molecule, index) =>
          !molecule.properties.showCycle &&
          !molecule.properties.reverse && (
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

export default ReactiveSliderMolecules;

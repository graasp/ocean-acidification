import { useContext } from 'react';
import { Group } from 'react-konva';

import { ALL_MOLECULES } from '@/constants/motion/slider-molecules';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import CarbonDioxide from './molecules/CarbonDioxide';
import Water from './molecules/Water';

const SliderMolecules = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions } = state;
  const { width, height } = dimensions;

  return (
    <Group>
      {ALL_MOLECULES.map(
        ({ formsCarbonicAcid, carbonDioxide, water }, index) => (
          <Group key={index}>
            {formsCarbonicAcid ? (
              <Water
                x={water.begins.x * width}
                y={water.begins.y * height}
                rotation={water.begins.rotation}
              />
            ) : null}
            <CarbonDioxide
              x={carbonDioxide.begins.x * width}
              y={carbonDioxide.begins.y * height}
              rotation={carbonDioxide.begins.rotation}
            />
          </Group>
        ),
      )}
    </Group>
  );
};

export default SliderMolecules;

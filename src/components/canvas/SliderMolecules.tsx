import { useContext } from 'react';
import { Group } from 'react-konva';

import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import CarbonDioxide from './molecules/CarbonDioxide';
import Water from './molecules/Water';

const SliderMolecules = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions, sliderMolecules } = state;
  const { width, height } = dimensions;

  return (
    <Group>
      {sliderMolecules.map(
        (
          { formsCarbonicAcid, showCarbonDioxide, carbonDioxide, waterBegins },
          index,
        ) => (
          <Group key={index}>
            {formsCarbonicAcid ? (
              <Water
                x={waterBegins.x * width}
                y={waterBegins.y * height}
                rotation={waterBegins.rotation}
              />
            ) : null}
            {showCarbonDioxide ? (
              <CarbonDioxide
                x={carbonDioxide.begins.x * width}
                y={carbonDioxide.begins.y * height}
                rotation={carbonDioxide.begins.rotation}
              />
            ) : null}
          </Group>
        ),
      )}
    </Group>
  );
};

export default SliderMolecules;

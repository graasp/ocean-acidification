import { useContext } from 'react';
import { Group, Rect } from 'react-konva';

import { SKY_GRADIENT, SKY_HEIGHT } from '@/constants/canvas';
import { SEQUENTIAL } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import StaticCarbonDioxide from './sequential-mode/StaticCarbonDioxides';

const Sky = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions, mode } = state;
  const { width, height } = dimensions;
  const modeSequential = mode === SEQUENTIAL;

  const skyWidth = width;
  const skyHeight = height * SKY_HEIGHT;

  return (
    <Group>
      <Rect
        width={skyWidth}
        height={skyHeight}
        fillLinearGradientEndPoint={{
          x: 0,
          y: skyHeight,
        }}
        fillLinearGradientColorStops={SKY_GRADIENT}
      />
      {modeSequential && (
        <StaticCarbonDioxide width={skyWidth} height={skyHeight} />
      )}
    </Group>
  );
};

export default Sky;

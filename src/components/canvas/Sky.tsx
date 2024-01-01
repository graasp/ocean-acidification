import { useContext } from 'react';
import { Group, Rect } from 'react-konva';

import { SKY_GRADIENT, SKY_HEIGHT } from '@/constants/canvas';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import StaticCarbonDioxide from './static-molecules/StaticCarbonDioxides';

const Sky = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions } = state;
  const { width, height } = dimensions;

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
      <StaticCarbonDioxide width={skyWidth} height={skyHeight} />
    </Group>
  );
};

export default Sky;

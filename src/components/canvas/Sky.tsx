import { Group, Rect } from 'react-konva';

import { SKY_GRADIENT, SKY_HEIGHT } from '@/constants/canvas';

import StaticCarbonDioxide from './static-molecules/StaticCarbonDioxides';

interface Props {
  width: number;
  height: number;
}

const Sky = ({ width, height }: Props): JSX.Element => {
  const skyHeight = height * SKY_HEIGHT;

  return (
    <Group>
      <Rect
        width={width}
        height={skyHeight}
        fillLinearGradientEndPoint={{
          x: 0,
          y: skyHeight,
        }}
        fillLinearGradientColorStops={SKY_GRADIENT}
      />
      <StaticCarbonDioxide width={width} height={skyHeight} />
    </Group>
  );
};

export default Sky;

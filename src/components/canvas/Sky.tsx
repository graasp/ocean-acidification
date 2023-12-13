import { Group, Rect } from 'react-konva';

import { SKY_GRADIENT, SKY_HEIGHT } from '@/constants/canvas';

interface Props {
  width: number;
  height: number;
}

const Sky = ({ width, height }: Props): JSX.Element => (
  <Group>
    <Rect
      width={width}
      height={height * SKY_HEIGHT}
      fillLinearGradientEndPoint={{
        x: 0,
        y: height * SKY_HEIGHT,
      }}
      fillLinearGradientColorStops={SKY_GRADIENT}
    />
  </Group>
);

export default Sky;

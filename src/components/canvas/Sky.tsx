import { Rect } from 'react-konva';

import { SKY_GRADIENT, SKY_HEIGHT } from '@/constants/canvas';

interface Props {
  width: number;
  height: number;
}

const Sky = ({ width, height }: Props): JSX.Element => (
  <Rect
    width={width}
    height={height * SKY_HEIGHT}
    fillLinearGradientStartPoint={{ x: 0, y: 0 }}
    fillLinearGradientEndPoint={{
      x: 0,
      y: height * SKY_HEIGHT,
    }}
    fillLinearGradientColorStops={SKY_GRADIENT}
  />
);

export default Sky;

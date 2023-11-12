import { Rect } from 'react-konva';

import { SEA_GRADIENT, SEA_HEIGHT, SKY_HEIGHT } from '@/constants/canvas';

interface Props {
  width: number;
  height: number;
}

const Sea = ({ width, height }: Props): JSX.Element => (
  <Rect
    y={height * SKY_HEIGHT}
    width={width}
    height={height * SEA_HEIGHT}
    fillLinearGradientStartPoint={{ x: 0, y: 0 }}
    fillLinearGradientEndPoint={{
      x: 0,
      y: height * SEA_HEIGHT,
    }}
    fillLinearGradientColorStops={SEA_GRADIENT}
  />
);

export default Sea;

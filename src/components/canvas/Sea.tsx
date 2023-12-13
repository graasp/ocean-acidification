import { Group, Rect } from 'react-konva';

import { SEA_FILL, SEA_HEIGHT, SKY_HEIGHT } from '@/constants/canvas';

interface Props {
  width: number;
  height: number;
}

const Sea = ({ width, height }: Props): JSX.Element => (
  <Group>
    <Rect
      y={height * SKY_HEIGHT}
      width={width}
      height={height * SEA_HEIGHT}
      fill={SEA_FILL}
    />
  </Group>
);

export default Sea;

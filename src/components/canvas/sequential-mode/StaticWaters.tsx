import { Group } from 'react-konva';

import { STATIC_WATERS } from '@/constants/canvas';

import Water from '../molecules/Water';

interface Props {
  width: number;
  height: number;
}

const StaticWaters = ({ width, height }: Props): JSX.Element => (
  <Group>
    {STATIC_WATERS.map(({ x, y, rotation }, index) => (
      <Water x={x * width} y={y * height} rotation={rotation} key={index} />
    ))}
  </Group>
);

export default StaticWaters;

import { Group } from 'react-konva';

import { REEF_GROUP } from '@/constants/canvas';

import Reef from './Reef';
import ReefHoles from './ReefHoles';

interface Props {
  width: number;
  height: number;
}

const ReefGroup = ({ width, height }: Props): JSX.Element => (
  <Group>
    {REEF_GROUP.map(({ x, y, rotation }, index) => (
      <Reef
        width={width}
        height={height}
        x={x}
        y={y}
        rotation={rotation}
        key={index}
      />
    ))}
    <ReefHoles width={width} height={height} />
  </Group>
);

export default ReefGroup;

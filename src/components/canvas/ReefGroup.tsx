import { Group } from 'react-konva';

import { REEF_GROUP } from '@/constants/canvas';

import Reef from './Reef';
import ReefHoles from './ReefHoles';

const ReefGroup = (): JSX.Element => (
  <Group>
    {REEF_GROUP.map(({ x, y, rotation }, index) => (
      <Reef x={x} y={y} rotation={rotation} key={index} />
    ))}
    <ReefHoles />
  </Group>
);

export default ReefGroup;

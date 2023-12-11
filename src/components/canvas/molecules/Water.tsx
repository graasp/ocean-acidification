import { Group } from 'react-konva';

import {
  ANGLE_HYDROGEN_ATOMS,
  HYDROGEN_RADIUS,
  OXYGEN_RADIUS,
} from '@/constants/canvas';
import { createWater } from '@/utils/molecules';

import Hydrogen from './atoms/Hydrogen';
import Oxygen from './atoms/Oxygen';

interface Props {
  x: number;
  y: number;
}

const Water = ({ x, y }: Props): JSX.Element => {
  const { topLeft, center, topRight } = createWater(
    { x, y },
    OXYGEN_RADIUS,
    HYDROGEN_RADIUS,
    ANGLE_HYDROGEN_ATOMS,
  );

  return (
    <Group>
      <Hydrogen x={topLeft.x} y={topLeft.y} />
      <Oxygen x={center.x} y={center.y} />
      <Hydrogen x={topRight.x} y={topRight.y} />
    </Group>
  );
};

export default Water;

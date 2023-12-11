import { Group } from 'react-konva';

import {
  ANGLE_HYDROGEN_ATOMS,
  HYDROGEN_RADIUS,
  OXYGEN_RADIUS,
} from '@/constants/canvas';
import { createHydroxide } from '@/utils/molecules';

import Hydrogen from './atoms/Hydrogen';
import Oxygen from './atoms/Oxygen';

const Hydroxide = (): JSX.Element => {
  const { oxygen, hydrogen } = createHydroxide(
    { x: 200, y: 200 },
    OXYGEN_RADIUS,
    HYDROGEN_RADIUS,
    ANGLE_HYDROGEN_ATOMS,
  );

  return (
    <Group draggable>
      <Hydrogen x={hydrogen.x} y={hydrogen.y} />
      <Oxygen x={oxygen.x} y={oxygen.y} />
    </Group>
  );
};

export default Hydroxide;

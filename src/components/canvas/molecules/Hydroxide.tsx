import { Group } from 'react-konva';

import {
  HYDROGENS_ANGLE,
  HYDROGEN_RADIUS,
  OXYGEN_RADIUS,
} from '@/constants/canvas';
import { createHydroxide } from '@/utils/molecules/';

import Hydrogen from './atoms/Hydrogen';
import Oxygen from './atoms/Oxygen';

interface Props {
  x: number;
  y: number;
}

const Hydroxide = ({ x, y }: Props): JSX.Element => {
  const { oxygen, hydrogen } = createHydroxide(
    { x, y },
    OXYGEN_RADIUS,
    HYDROGEN_RADIUS,
    HYDROGENS_ANGLE,
  );

  return (
    <Group>
      <Hydrogen x={hydrogen.x} y={hydrogen.y} />
      <Oxygen x={oxygen.x} y={oxygen.y} />
    </Group>
  );
};

export default Hydroxide;

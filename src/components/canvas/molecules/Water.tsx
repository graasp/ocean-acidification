import { Group } from 'react-konva';

import { HYDROGEN_RADIUS, OXYGEN_RADIUS } from '@/constants/canvas';
import { determineAtomCoordinates } from '@/utils/canvas';

import Hydrogen from './atoms/Hydrogen';
import Oxygen from './atoms/Oxygen';

interface Props {
  x: number;
  y: number;
}

const Water = ({ x, y }: Props): JSX.Element => {
  const { top, center, bottom } = determineAtomCoordinates(
    { x, y },
    OXYGEN_RADIUS,
    HYDROGEN_RADIUS,
  );

  return (
    <Group>
      <Hydrogen x={top.x} y={top.y} />
      <Oxygen x={center.x} y={center.y} />
      <Hydrogen x={bottom.x} y={bottom.y} />
    </Group>
  );
};

export default Water;

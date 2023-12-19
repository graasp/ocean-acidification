import { Group } from 'react-konva';

import {
  HYDROGENS_ANGLE,
  HYDROGEN_RADIUS,
  OXYGEN_RADIUS,
} from '@/constants/canvas';
import { createWater } from '@/utils/molecules/';

import Hydrogen from './atoms/Hydrogen';
import Oxygen from './atoms/Oxygen';

const defaultProps = {
  rotation: 0,
};
interface Props {
  x: number;
  y: number;
  rotation?: number;
}

const Water = ({ x, y, rotation }: Props): JSX.Element => {
  const { topLeft, center, topRight } = createWater(
    { x, y },
    OXYGEN_RADIUS,
    HYDROGEN_RADIUS,
    HYDROGENS_ANGLE,
  );

  return (
    <Group x={center.x} y={center.y} rotation={rotation}>
      <Hydrogen x={topLeft.x - center.x} y={topLeft.y - center.y} />
      <Oxygen />
      <Hydrogen x={topRight.x - center.x} y={topRight.y - center.y} />
    </Group>
  );
};

Water.defaultProps = defaultProps;

export default Water;

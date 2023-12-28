import { Group } from 'react-konva';

import {
  CARBON_RADIUS,
  HYDROGENS_ANGLE,
  HYDROGEN_RADIUS,
  LEFT_OXYGEN_ANGLE,
  OXYGENS_ANGLE,
  OXYGEN_RADIUS,
} from '@/constants/canvas';
import { createCarbonicAcid } from '@/utils/molecules/';

import Hydrogen from './atoms/Hydrogen';

const defaultProps = {
  rotation: 0,
};

interface Props {
  x: number;
  y: number;
  rotation?: number;
}

const DetachedHydrogen = ({ x, y, rotation }: Props): JSX.Element => {
  const { leftHydrogen } = createCarbonicAcid(
    { x, y },
    CARBON_RADIUS,
    OXYGEN_RADIUS,
    HYDROGEN_RADIUS,
    OXYGENS_ANGLE,
    LEFT_OXYGEN_ANGLE,
    HYDROGENS_ANGLE,
  );

  return (
    <Group x={x} y={y} rotation={rotation}>
      <Hydrogen x={leftHydrogen.x - x} y={leftHydrogen.y - y} />
    </Group>
  );
};

DetachedHydrogen.defaultProps = defaultProps;

export default DetachedHydrogen;

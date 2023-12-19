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

import Carbon from './atoms/Carbon';
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

const CarbonicAcid = ({ x, y, rotation }: Props): JSX.Element | null => {
  const { topOxygen, leftOxygen, bottomOxygen, topHydrogen, leftHydrogen } =
    createCarbonicAcid(
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
      <Oxygen x={topOxygen.x - x} y={topOxygen.y - y} />
      <Carbon />
      <Oxygen x={leftOxygen.x - x} y={leftOxygen.y - y} />
      <Oxygen x={bottomOxygen.x - x} y={bottomOxygen.y - y} />
      <Hydrogen x={topHydrogen.x - x} y={topHydrogen.y - y} />
      <Hydrogen x={leftHydrogen.x - x} y={leftHydrogen.y - y} />
    </Group>
  );
};

CarbonicAcid.defaultProps = defaultProps;

export default CarbonicAcid;

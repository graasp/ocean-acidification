import { Group } from 'react-konva';

import {
  CARBON_RADIUS,
  HYDROGENS_ANGLE,
  HYDROGEN_RADIUS,
  LEFT_OXYGEN_ANGLE,
  OXYGENS_ANGLE,
  OXYGEN_RADIUS,
} from '@/constants/canvas';
import { createCarbonicAcid } from '@/utils/molecules';

import Carbon from './atoms/Carbon';
import Hydrogen from './atoms/Hydrogen';
import Oxygen from './atoms/Oxygen';

interface Props {
  x: number;
  y: number;
}

const CarbonicAcid = ({ x, y }: Props): JSX.Element | null => {
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
    <Group>
      <Oxygen x={topOxygen.x} y={topOxygen.y} />
      <Carbon x={x} y={y} />
      <Oxygen x={leftOxygen.x} y={leftOxygen.y} />
      <Oxygen x={bottomOxygen.x} y={bottomOxygen.y} />
      <Hydrogen x={topHydrogen.x} y={topHydrogen.y} />
      <Hydrogen x={leftHydrogen.x} y={leftHydrogen.y} />
    </Group>
  );
};

export default CarbonicAcid;

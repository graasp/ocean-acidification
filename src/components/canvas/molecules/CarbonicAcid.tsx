import { Group } from 'react-konva';

import {
  ANGLE_HYDROGEN_ATOMS,
  ANGLE_TOP_BOTTOM_OXYGENS,
  CARBON_RADIUS,
  HYDROGEN_RADIUS,
  LEFT_OXYGEN_ANGLE,
  OXYGEN_RADIUS,
} from '@/constants/canvas';
import { createCarbonicAcid } from '@/utils/molecules';

import Carbon from './atoms/Carbon';
import Hydrogen from './atoms/Hydrogen';
import Oxygen from './atoms/Oxygen';

interface Props {
  width: number;
  height: number;
}

const CarbonicAcid = ({ width, height }: Props): JSX.Element | null => {
  const { topOxygen, leftOxygen, bottomOxygen, topHydrogen, leftHydrogen } =
    createCarbonicAcid(
      { x: 0.3 * width, y: 0.5 * height },
      CARBON_RADIUS,
      OXYGEN_RADIUS,
      HYDROGEN_RADIUS,
      ANGLE_TOP_BOTTOM_OXYGENS,
      LEFT_OXYGEN_ANGLE,
      ANGLE_HYDROGEN_ATOMS,
    );

  return (
    <Group>
      <Oxygen x={topOxygen.x} y={topOxygen.y} />
      <Carbon x={0.3 * width} y={0.5 * height} />
      <Oxygen x={leftOxygen.x} y={leftOxygen.y} />
      <Oxygen x={bottomOxygen.x} y={bottomOxygen.y} />
      <Hydrogen x={topHydrogen.x} y={topHydrogen.y} />
      <Hydrogen x={leftHydrogen.x} y={leftHydrogen.y} />
    </Group>
  );
};

export default CarbonicAcid;

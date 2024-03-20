import {
  CARBON_RADIUS,
  HYDROGEN_X_OFFSET,
  OXYGEN_RADIUS,
} from '@/constants/canvas';

import { MoleculeCenter, Point, PointWithoutRotation } from './molecules/types';

export const generateRandomNum = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

export const generateRandomCoordinates = (
  count: number,
  yStart: number,
  yEnd: number,
): MoleculeCenter[] => {
  const centers = [];
  for (let i = 1; i <= count; i += 1) {
    centers.push({
      x: generateRandomNum(0, 1),
      y: generateRandomNum(yStart, yEnd),
    });
  }
  return centers;
};

export const findCarbonicAcidCoordinates = (
  co2Begins: Point,
  waterBegins: Point,
  height: number,
  width: number,
): PointWithoutRotation => {
  const xOffset = HYDROGEN_X_OFFSET * (height / width);
  const horizontalMotion = (co2Begins.x - (waterBegins.x + xOffset)) / 2;
  const co2EndsX = co2Begins.x - horizontalMotion;
  const carbonOxygenRadii = CARBON_RADIUS + OXYGEN_RADIUS;
  const co2EndsY = waterBegins.y + carbonOxygenRadii;
  return { x: co2EndsX, y: co2EndsY };
};

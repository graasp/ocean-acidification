import {
  CARBON_RADIUS,
  HYDROGEN_X_OFFSET,
  OXYGEN_RADIUS,
} from '@/constants/canvas';
import {
  CO2_ADDED_PER_INCREMENT,
  CO2_SLIDER_STEP,
} from '@/constants/side-menu';

import {
  MoleculeCenter,
  Point,
  PointWithoutRotation,
  SliderMoleculesType,
} from './molecules/types';

export const generateRandomNum = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

const generateRandomSign = (): number => (Math.random() < 0.5 ? -1 : 1);

export const generateRandomRotation = (): number => generateRandomNum(0, 360);

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

export const distributeMoleculesOnRow = (
  numMolecules: number,
  numRows: number,
  minY: number,
  maxY: number,
  rowIndex: number,
): Point[] => {
  const xIndent = generateRandomNum(0.02, 0.06);
  const row = new Array(numMolecules).fill(null).map((emptyElement, index) => ({
    x: xIndent + (1 / numMolecules) * index,
    y: generateRandomNum(
      minY + (maxY - minY) * (rowIndex / numRows),
      minY + (maxY - minY) * ((rowIndex + 1) / numRows),
    ),
    rotation: generateRandomRotation(),
  }));
  return row;
};

export const determineXEnd = (xStart: number): number => {
  const distanceMoved = generateRandomNum(0.2, 0.3);
  if (xStart <= 0.3) return xStart + distanceMoved;
  if (xStart <= 0.6) return xStart + generateRandomSign() * distanceMoved;
  return xStart - distanceMoved;
};

export const activateCarbonDioxides = (
  sliderMolecules: SliderMoleculesType[],
  sliderValue: number | number[],
): SliderMoleculesType[] => {
  const value = Array.isArray(sliderValue) ? sliderValue[0] : sliderValue;
  const numMoleculesToActivate =
    (value / CO2_SLIDER_STEP) * CO2_ADDED_PER_INCREMENT;
  return sliderMolecules.map((sliderMolecule, index) =>
    index < numMoleculesToActivate
      ? { ...sliderMolecule, showCarbonDioxide: true }
      : { ...sliderMolecule, showCarbonDioxide: false },
  );
};

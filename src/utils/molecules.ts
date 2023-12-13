import { MoleculeCenter } from './molecules/types';

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

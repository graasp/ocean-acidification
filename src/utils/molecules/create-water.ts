import { HYDROGEN_X_OFFSET, HYDROGEN_Y_OFFSET } from '@/constants/canvas';

import { MoleculeCenter } from './types';

interface WaterCoordinates {
  topLeft: MoleculeCenter;
  center: MoleculeCenter;
  topRight: MoleculeCenter;
}

export const createWater = (
  moleculeCenter: MoleculeCenter,
  height: number,
): WaterCoordinates => {
  const { x, y } = moleculeCenter;
  const xOffset = HYDROGEN_X_OFFSET * height;
  const yOffset = HYDROGEN_Y_OFFSET * height;

  return {
    topLeft: { x: x - xOffset, y: y - yOffset },
    center: { x, y },
    topRight: { x: x + xOffset, y: y - yOffset },
  };
};

import { HYDROGEN_X_OFFSET, HYDROGEN_Y_OFFSET } from '@/constants/canvas';

import { MoleculeCenter } from './types';

interface WaterCoordinates {
  topLeft: MoleculeCenter;
  center: MoleculeCenter;
  topRight: MoleculeCenter;
}

export const createWater = (
  moleculeCenter: MoleculeCenter,
): WaterCoordinates => {
  const { x: moleculeCenterX, y: moleculeCenterY } = moleculeCenter;
  return {
    topLeft: {
      x: moleculeCenterX - HYDROGEN_X_OFFSET,
      y: moleculeCenterY - HYDROGEN_Y_OFFSET,
    },
    center: { x: moleculeCenterX, y: moleculeCenterY },
    topRight: {
      x: moleculeCenterX + HYDROGEN_X_OFFSET,
      y: moleculeCenterY - HYDROGEN_Y_OFFSET,
    },
  };
};

export const findWaterCenter = (
  topRightHydrogen: MoleculeCenter,
): MoleculeCenter => ({
  x: topRightHydrogen.x - HYDROGEN_X_OFFSET,
  y: topRightHydrogen.y + HYDROGEN_Y_OFFSET,
});

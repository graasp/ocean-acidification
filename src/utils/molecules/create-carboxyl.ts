import {
  HYDROGENS_ANGLE,
  HYDROGEN_RADIUS,
  OXYGEN_RADIUS,
} from '@/constants/canvas';

import { createCarbonDioxide } from './create-carbon-dioxide';
import { MoleculeCenter } from './types';

interface CarboxylCoordinates {
  hydrogen: MoleculeCenter;
}

export const createCarboxyl = (
  moleculeCenter: MoleculeCenter,
  height: number,
): CarboxylCoordinates => {
  const { top: topOxygen } = createCarbonDioxide(moleculeCenter, height);
  const oxygenHydrogen = (OXYGEN_RADIUS + HYDROGEN_RADIUS) * height;
  const hydrogenXOffset = oxygenHydrogen * Math.sin(HYDROGENS_ANGLE / 2);
  const hydrogenYOffset = oxygenHydrogen * Math.cos(HYDROGENS_ANGLE / 2);

  return {
    hydrogen: {
      x: topOxygen.x - hydrogenXOffset,
      y: topOxygen.y - hydrogenYOffset,
    },
  };
};

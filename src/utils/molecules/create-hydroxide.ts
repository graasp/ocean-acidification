import {
  HYDROGENS_ANGLE,
  HYDROGEN_RADIUS,
  OXYGEN_RADIUS,
} from '@/constants/canvas';

import { MoleculeCenter } from './types';

interface HydroxideCoordinates {
  oxygen: MoleculeCenter;
  hydrogen: MoleculeCenter;
}

export const createHydroxide = (
  moleculeCenter: MoleculeCenter,
  height: number,
): HydroxideCoordinates => {
  const { x, y } = moleculeCenter;
  const oxygenHydrogen = (OXYGEN_RADIUS + HYDROGEN_RADIUS) * height;

  const hydrogenXOffset = oxygenHydrogen * Math.sin(HYDROGENS_ANGLE / 2);
  const hydrogenYOffset = oxygenHydrogen * Math.cos(HYDROGENS_ANGLE / 2);

  return {
    oxygen: { x, y },
    hydrogen: { x: x - hydrogenXOffset, y: y - hydrogenYOffset },
  };
};

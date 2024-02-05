import { CARBON_RADIUS, OXYGEN_RADIUS } from '@/constants/canvas';

import { MoleculeCenter } from './types';

interface CarbonDioxideCoordinates {
  top: MoleculeCenter;
  center: MoleculeCenter;
  bottom: MoleculeCenter;
}

export const createCarbonDioxide = (
  moleculeCenter: MoleculeCenter,
  height: number,
): CarbonDioxideCoordinates => {
  const { x: moleculeCenterX, y: moleculeCenterY } = moleculeCenter;
  const carbonOxygen = (CARBON_RADIUS + OXYGEN_RADIUS) * height;

  return {
    top: {
      x: moleculeCenterX,
      y: moleculeCenterY - carbonOxygen,
    },
    center: { x: moleculeCenterX, y: moleculeCenterY },
    bottom: {
      x: moleculeCenterX,
      y: moleculeCenterY + carbonOxygen,
    },
  };
};

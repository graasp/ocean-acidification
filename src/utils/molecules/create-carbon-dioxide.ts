import {
  CARBON_PLUS_OXYGEN_CONT,
  CARBON_PLUS_OXYGEN_SEQ,
} from '@/constants/canvas';
import { SEQUENTIAL } from '@/constants/strings';

import { MoleculeCenter } from './types';

interface CarbonDioxideCoordinates {
  top: MoleculeCenter;
  center: MoleculeCenter;
  bottom: MoleculeCenter;
}

export const createCarbonDioxide = (
  moleculeCenter: MoleculeCenter,
  height: number,
  mode: string,
): CarbonDioxideCoordinates => {
  const { x: moleculeCenterX, y: moleculeCenterY } = moleculeCenter;
  const carbonOxygen =
    (mode === SEQUENTIAL ? CARBON_PLUS_OXYGEN_SEQ : CARBON_PLUS_OXYGEN_CONT) *
    height;

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

import {
  HYDROGENS_ANGLE,
  OXYGEN_PLUS_HYDROGEN_CONT,
  OXYGEN_PLUS_HYDROGEN_SEQ,
} from '@/constants/canvas';
import { SEQUENTIAL } from '@/constants/strings';

import { createCarbonDioxide } from './create-carbon-dioxide';
import { MoleculeCenter } from './types';

interface CarboxylCoordinates {
  hydrogen: MoleculeCenter;
}

export const createCarboxyl = (
  moleculeCenter: MoleculeCenter,
  height: number,
  mode: string,
): CarboxylCoordinates => {
  const { top: topOxygen } = createCarbonDioxide(moleculeCenter, height, mode);
  const oxygenHydrogen =
    (mode === SEQUENTIAL
      ? OXYGEN_PLUS_HYDROGEN_SEQ
      : OXYGEN_PLUS_HYDROGEN_CONT) * height;
  const hydrogenXOffset = oxygenHydrogen * Math.sin(HYDROGENS_ANGLE / 2);
  const hydrogenYOffset = oxygenHydrogen * Math.cos(HYDROGENS_ANGLE / 2);

  return {
    hydrogen: {
      x: topOxygen.x - hydrogenXOffset,
      y: topOxygen.y - hydrogenYOffset,
    },
  };
};

import {
  HYDROGENS_ANGLE,
  OXYGEN_PLUS_HYDROGEN_CONT,
  OXYGEN_PLUS_HYDROGEN_SEQ,
} from '@/constants/canvas';
import { SEQUENTIAL } from '@/constants/strings';

import { MoleculeCenter } from './types';

interface HydroxideCoordinates {
  oxygen: MoleculeCenter;
  hydrogen: MoleculeCenter;
}

export const createHydroxide = (
  moleculeCenter: MoleculeCenter,
  height: number,
  mode: string,
): HydroxideCoordinates => {
  const { x, y } = moleculeCenter;
  const oxygenHydrogen =
    (mode === SEQUENTIAL
      ? OXYGEN_PLUS_HYDROGEN_SEQ
      : OXYGEN_PLUS_HYDROGEN_CONT) * height;

  const hydrogenXOffset = oxygenHydrogen * Math.sin(HYDROGENS_ANGLE / 2);
  const hydrogenYOffset = oxygenHydrogen * Math.cos(HYDROGENS_ANGLE / 2);

  return {
    oxygen: { x, y },
    hydrogen: { x: x - hydrogenXOffset, y: y - hydrogenYOffset },
  };
};

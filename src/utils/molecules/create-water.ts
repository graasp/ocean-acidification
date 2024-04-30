import {
  HYDROGEN_X_OFFSET_CONT,
  HYDROGEN_X_OFFSET_SEQ,
  HYDROGEN_Y_OFFSET_CONT,
  HYDROGEN_Y_OFFSET_SEQ,
} from '@/constants/canvas';
import { SEQUENTIAL } from '@/constants/strings';

import { MoleculeCenter } from './types';

interface WaterCoordinates {
  topLeft: MoleculeCenter;
  center: MoleculeCenter;
  topRight: MoleculeCenter;
}

export const createWater = (
  moleculeCenter: MoleculeCenter,
  height: number,
  mode: string,
): WaterCoordinates => {
  const { x, y } = moleculeCenter;
  const xOffset =
    (mode === SEQUENTIAL ? HYDROGEN_X_OFFSET_SEQ : HYDROGEN_X_OFFSET_CONT) *
    height;
  const yOffset =
    (mode === SEQUENTIAL ? HYDROGEN_Y_OFFSET_SEQ : HYDROGEN_Y_OFFSET_CONT) *
    height;

  return {
    topLeft: { x: x - xOffset, y: y - yOffset },
    center: { x, y },
    topRight: { x: x + xOffset, y: y - yOffset },
  };
};

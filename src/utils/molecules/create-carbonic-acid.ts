import {
  CARBON_PLUS_OXYGEN_CONT,
  CARBON_PLUS_OXYGEN_SEQ,
  HYDROGENS_ANGLE,
  LEFT_OXYGEN_ANGLE,
  OXYGENS_ANGLE,
  OXYGEN_PLUS_HYDROGEN_CONT,
  OXYGEN_PLUS_HYDROGEN_SEQ,
} from '@/constants/canvas';
import { SEQUENTIAL } from '@/constants/strings';

import { MoleculeCenter } from './types';

interface CarbonicAcidCoordinates {
  topOxygen: MoleculeCenter;
  bottomOxygen: MoleculeCenter;
  leftOxygen: MoleculeCenter;
  topHydrogen: MoleculeCenter;
  leftHydrogen: MoleculeCenter;
}

export const createCarbonicAcid = (
  carbon: MoleculeCenter,
  height: number,
  mode: string,
): CarbonicAcidCoordinates => {
  const { x: carbonX, y: carbonY } = carbon;
  const carbonOxygen =
    (mode === SEQUENTIAL ? CARBON_PLUS_OXYGEN_SEQ : CARBON_PLUS_OXYGEN_CONT) *
    height;
  const oxygenHydrogen =
    (mode === SEQUENTIAL
      ? OXYGEN_PLUS_HYDROGEN_SEQ
      : OXYGEN_PLUS_HYDROGEN_CONT) * height;

  const topBottomOxygenXOffset = carbonOxygen * Math.cos(OXYGENS_ANGLE / 2);
  const topBottomOxygenYOffset = carbonOxygen * Math.sin(OXYGENS_ANGLE / 2);
  const leftOxygenXOffset = carbonOxygen * Math.cos(LEFT_OXYGEN_ANGLE);
  const leftOxygenYOffset = carbonOxygen * Math.sin(LEFT_OXYGEN_ANGLE);

  const hydrogenXOffset = oxygenHydrogen * Math.sin(HYDROGENS_ANGLE / 2);
  const hydrogenYOffset = oxygenHydrogen * Math.cos(HYDROGENS_ANGLE / 2);

  const topOxygen = {
    x: carbonX + topBottomOxygenXOffset,
    y: carbonY - topBottomOxygenYOffset,
  };
  const bottomOxygen = {
    x: carbonX + topBottomOxygenXOffset,
    y: carbonY + topBottomOxygenYOffset,
  };
  const leftOxygen = {
    x: carbonX - leftOxygenXOffset,
    y: carbonY - leftOxygenYOffset,
  };
  const topHydrogen = {
    x: topOxygen.x - hydrogenXOffset,
    y: topOxygen.y - hydrogenYOffset,
  };
  const leftHydrogen = {
    x: leftOxygen.x - hydrogenXOffset,
    y: leftOxygen.y - hydrogenYOffset,
  };

  return {
    topOxygen,
    bottomOxygen,
    leftOxygen,
    topHydrogen,
    leftHydrogen,
  };
};

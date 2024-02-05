import {
  CARBON_RADIUS,
  HYDROGENS_ANGLE,
  HYDROGEN_RADIUS,
  LEFT_OXYGEN_ANGLE,
  OXYGENS_ANGLE,
  OXYGEN_RADIUS,
} from '@/constants/canvas';

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
): CarbonicAcidCoordinates => {
  const { x: carbonX, y: carbonY } = carbon;
  const carbonOxygen = (CARBON_RADIUS + OXYGEN_RADIUS) * height;
  const oxygenHydrogen = (OXYGEN_RADIUS + HYDROGEN_RADIUS) * height;

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

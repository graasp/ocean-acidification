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
): CarbonicAcidCoordinates => {
  const { x: carbonX, y: carbonY } = carbon;
  const topBottomOxygenXOffset =
    (CARBON_RADIUS + OXYGEN_RADIUS) * Math.cos(OXYGENS_ANGLE / 2);
  const topBottomOxygenYOffset =
    (CARBON_RADIUS + OXYGEN_RADIUS) * Math.sin(OXYGENS_ANGLE / 2);
  const leftOxygenXOffset =
    (CARBON_RADIUS + OXYGEN_RADIUS) * Math.cos(LEFT_OXYGEN_ANGLE);
  const leftOxygenYOffset =
    (CARBON_RADIUS + OXYGEN_RADIUS) * Math.sin(LEFT_OXYGEN_ANGLE);

  const hydrogenXOffset =
    (OXYGEN_RADIUS + HYDROGEN_RADIUS) * Math.sin(HYDROGENS_ANGLE / 2);
  const hydrogenYOffset =
    (OXYGEN_RADIUS + HYDROGEN_RADIUS) * Math.cos(HYDROGENS_ANGLE / 2);

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

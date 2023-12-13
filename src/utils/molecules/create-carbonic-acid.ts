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
  carbonRadius: number,
  oxygenRadius: number,
  hydrogenRadius: number,
  oxygenAngle: number,
  leftOxygenAngle: number,
  hydrogenAngle: number,
): CarbonicAcidCoordinates => {
  const { x: carbonX, y: carbonY } = carbon;
  const topBottomOxygenXOffset =
    (carbonRadius + oxygenRadius) * Math.cos(oxygenAngle / 2);
  const topBottomOxygenYOffset =
    (carbonRadius + oxygenRadius) * Math.sin(oxygenAngle / 2);
  const leftOxygenXOffset =
    (carbonRadius + oxygenRadius) * Math.cos(leftOxygenAngle);
  const leftOxygenYOffset =
    (carbonRadius + oxygenRadius) * Math.sin(leftOxygenAngle);

  const hydrogenXOffset =
    (oxygenRadius + hydrogenRadius) * Math.sin(hydrogenAngle / 2);
  const hydrogenYOffset =
    (oxygenRadius + hydrogenRadius) * Math.cos(hydrogenAngle / 2);

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

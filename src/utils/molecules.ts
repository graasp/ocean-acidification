interface MoleculeCenter {
  x: number;
  y: number;
}

interface CarbonDioxideCoordinates {
  top: MoleculeCenter;
  center: MoleculeCenter;
  bottom: MoleculeCenter;
}

interface WaterCoordinates {
  topLeft: MoleculeCenter;
  center: MoleculeCenter;
  topRight: MoleculeCenter;
}

interface CarbonicAcidCoordinates {
  topOxygen: MoleculeCenter;
  bottomOxygen: MoleculeCenter;
  leftOxygen: MoleculeCenter;
  topHydrogen: MoleculeCenter;
  leftHydrogen: MoleculeCenter;
}

export const generateRandomNum = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

export const generateRandomCoordinates = (
  count: number,
  yStart: number,
  yEnd: number,
): MoleculeCenter[] => {
  const centers = [];
  for (let i = 1; i <= count; i += 1) {
    centers.push({
      x: generateRandomNum(0, 1),
      y: generateRandomNum(yStart, yEnd),
    });
  }
  return centers;
};

export const createCarbonDioxide = (
  moleculeCenter: MoleculeCenter,
  carbonRadius: number,
  oxygenRadius: number,
): CarbonDioxideCoordinates => {
  const { x: moleculeCenterX, y: moleculeCenterY } = moleculeCenter;
  return {
    top: {
      x: moleculeCenterX,
      y: moleculeCenterY - carbonRadius - oxygenRadius,
    },
    center: { x: moleculeCenterX, y: moleculeCenterY },
    bottom: {
      x: moleculeCenterX,
      y: moleculeCenterY + carbonRadius + oxygenRadius,
    },
  };
};

export const createWater = (
  moleculeCenter: MoleculeCenter,
  oxygenRadius: number,
  hydrogenRadius: number,
  angle: number,
): WaterCoordinates => {
  const { x: moleculeCenterX, y: moleculeCenterY } = moleculeCenter;
  const xOffset = (oxygenRadius + hydrogenRadius) * Math.sin(angle / 2);
  const yOffset = (oxygenRadius + hydrogenRadius) * Math.cos(angle / 2);
  return {
    topLeft: {
      x: moleculeCenterX - xOffset,
      y: moleculeCenterY - yOffset,
    },
    center: { x: moleculeCenterX, y: moleculeCenterY },
    topRight: {
      x: moleculeCenterX + xOffset,
      y: moleculeCenterY - yOffset,
    },
  };
};

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

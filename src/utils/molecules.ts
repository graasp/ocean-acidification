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
  leftOxygen: MoleculeCenter;
  rightOxygen: MoleculeCenter;
  leftHydrogen: MoleculeCenter;
  rightHydrogen: MoleculeCenter;
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
): CarbonicAcidCoordinates => {
  const { x: carbonX, y: carbonY } = carbon;
  const sideOxygenYOffset = Math.sqrt(
    2 * carbonRadius * oxygenRadius + oxygenRadius ** 2,
  );
  const bottomMoleculesY = carbonY + sideOxygenYOffset;
  const topOxygen = { x: carbonX, y: carbonY - carbonRadius - oxygenRadius };
  const leftOxygen = {
    x: carbonX - carbonRadius,
    y: bottomMoleculesY,
  };
  const rightOxygen = {
    x: carbonX + carbonRadius,
    y: bottomMoleculesY,
  };
  const leftHydrogen = {
    x: carbonX - carbonRadius - oxygenRadius - hydrogenRadius,
    y: bottomMoleculesY,
  };
  const rightHydrogen = {
    x: carbonX + carbonRadius + oxygenRadius + hydrogenRadius,
    y: bottomMoleculesY,
  };
  return {
    topOxygen,
    leftOxygen,
    rightOxygen,
    leftHydrogen,
    rightHydrogen,
  };
};

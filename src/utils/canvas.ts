interface MoleculeCenter {
  x: number;
  y: number;
}

interface AtomsCoordinates {
  top: MoleculeCenter;
  center: MoleculeCenter;
  bottom: MoleculeCenter;
}

interface CarbonicAcidCoordinates {
  topOxygen: MoleculeCenter;
  leftOxygen: MoleculeCenter;
  rightOxygen: MoleculeCenter;
  leftHydrogen: MoleculeCenter;
  rightHydrogen: MoleculeCenter;
}

const generateRandomNum = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

export const generateRandomCoordinates = (
  count: number,
  yStart: number,
  yEnd: number,
): MoleculeCenter[] => {
  const centers = [];
  for (let i = 1; i <= count; i += 1) {
    centers.push({ x: Math.random(), y: generateRandomNum(yStart, yEnd) });
  }
  return centers;
};

export const determineAtomCoordinates = (
  moleculeCenter: MoleculeCenter,
  centerAtomRadius: number,
  peripheralAtomRadius: number,
): AtomsCoordinates => {
  const { x: moleculeCenterX, y: moleculeCenterY } = moleculeCenter;
  return {
    top: {
      x: moleculeCenterX,
      y: moleculeCenterY - centerAtomRadius - peripheralAtomRadius,
    },
    center: { x: moleculeCenterX, y: moleculeCenterY },
    bottom: {
      x: moleculeCenterX,
      y: moleculeCenterY + centerAtomRadius + peripheralAtomRadius,
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

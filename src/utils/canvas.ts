interface MoleculeCenter {
  x: number;
  y: number;
}

interface AtomsCoordinates {
  top: MoleculeCenter;
  center: MoleculeCenter;
  bottom: MoleculeCenter;
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

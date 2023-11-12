interface MoleculeCenter {
  x: number;
  y: number;
}

interface AtomsCoordinates {
  topOxygen: MoleculeCenter;
  carbon: MoleculeCenter;
  bottomOxygen: MoleculeCenter;
}

export const generateRandomCoordinates = (count: number): MoleculeCenter[] => {
  const centers = [];
  for (let i = 1; i <= count; i += 1) {
    centers.push({ x: Math.random(), y: Math.random() });
  }
  return centers;
};

export const determineCo2AtomCoordinates = (
  moleculeCenter: MoleculeCenter,
  carbonRadius: number,
  oxygenRadius: number,
): AtomsCoordinates => {
  const { x: moleculeCenterX, y: moleculeCenterY } = moleculeCenter;
  return {
    topOxygen: {
      x: moleculeCenterX,
      y: moleculeCenterY - carbonRadius - oxygenRadius,
    },
    carbon: { x: moleculeCenterX, y: moleculeCenterY },
    bottomOxygen: {
      x: moleculeCenterX,
      y: moleculeCenterY + carbonRadius + oxygenRadius,
    },
  };
};

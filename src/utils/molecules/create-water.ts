import { MoleculeCenter } from './types';

interface WaterCoordinates {
  topLeft: MoleculeCenter;
  center: MoleculeCenter;
  topRight: MoleculeCenter;
}

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

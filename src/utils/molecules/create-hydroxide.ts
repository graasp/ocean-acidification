import { MoleculeCenter } from './types';

interface HydroxideCoordinates {
  oxygen: MoleculeCenter;
  hydrogen: MoleculeCenter;
}

export const createHydroxide = (
  moleculeCenter: MoleculeCenter,
  oxygenRadius: number,
  hydrogenRadius: number,
  hydrogenAngle: number,
): HydroxideCoordinates => {
  const { x, y } = moleculeCenter;
  const hydrogenXOffset =
    (oxygenRadius + hydrogenRadius) * Math.sin(hydrogenAngle / 2);
  const hydrogenYOffset =
    (oxygenRadius + hydrogenRadius) * Math.cos(hydrogenAngle / 2);

  return {
    oxygen: { x, y },
    hydrogen: { x: x - hydrogenXOffset, y: y - hydrogenYOffset },
  };
};

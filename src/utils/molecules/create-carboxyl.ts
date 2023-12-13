import { createCarbonDioxide } from './create-carbon-dioxide';
import { MoleculeCenter } from './types';

interface CarboxylCoordinates {
  hydrogen: MoleculeCenter;
}

export const createCarboxyl = (
  moleculeCenter: MoleculeCenter,
  carbonRadius: number,
  oxygenRadius: number,
  hydrogenRadius: number,
  hydrogenAngle: number,
): CarboxylCoordinates => {
  const { top: topOxygen } = createCarbonDioxide(
    moleculeCenter,
    carbonRadius,
    oxygenRadius,
  );
  const hydrogenXOffset =
    (oxygenRadius + hydrogenRadius) * Math.sin(hydrogenAngle / 2);
  const hydrogenYOffset =
    (oxygenRadius + hydrogenRadius) * Math.cos(hydrogenAngle / 2);

  return {
    hydrogen: {
      x: topOxygen.x - hydrogenXOffset,
      y: topOxygen.y - hydrogenYOffset,
    },
  };
};

import { MOVEMENT_PER_INTERVAL } from '@/constants/canvas';

interface Coordinates {
  x: number;
  y: number;
}

export const determineMoleculeCoordinates = (
  startPosition: Coordinates,
  finalPosition: Coordinates,
  intervalCount: number,
): Coordinates => {
  const { x: startX, y: startY } = startPosition;
  const { x: finalX, y: finalY } = finalPosition;

  const yIntervals = Math.abs((finalY - startY) / MOVEMENT_PER_INTERVAL);
  const xIntervals = Math.abs((finalX - startX) / MOVEMENT_PER_INTERVAL);
  const totalIntervals = yIntervals + xIntervals;

  if (intervalCount > totalIntervals) return finalPosition;
  if (intervalCount <= yIntervals) {
    return {
      x: startX,
      y: startY + (finalY - startY) * (intervalCount / yIntervals),
    };
  }

  return {
    x: startX + (finalX - startX) * ((intervalCount - yIntervals) / xIntervals),
    y: finalY,
  };
};

export const disappearsAfter = (
  startPosition: Coordinates,
  finalPosition: Coordinates,
): number => {
  const { x: startX, y: startY } = startPosition;
  const { x: finalX, y: finalY } = finalPosition;
  const yIntervals = Math.abs((finalY - startY) / MOVEMENT_PER_INTERVAL);
  const xIntervals = Math.abs((finalX - startX) / MOVEMENT_PER_INTERVAL);
  const totalIntervals = yIntervals + xIntervals;
  return totalIntervals;
};

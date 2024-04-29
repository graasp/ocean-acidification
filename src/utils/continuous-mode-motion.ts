// import { CO2_RELATIVE_SPEED_IN_WATER } from '@/constants/canvas';
import { MOTION_INTERVAL } from '@/constants/motion/motion-intervals';

import { CompleteCoordinates, Coordinate, Point } from './molecules/types';

export const computeMovesPerInterval = (
  coordinates: CompleteCoordinates,
  intervals: number = MOTION_INTERVAL,
): Point => {
  const { ends, begins } = coordinates;
  const x = (ends.x - begins.x) / intervals;
  const y = (ends.y - begins.y) / intervals;
  const rotation = (ends.rotation - begins.rotation) / intervals;
  return { x, y, rotation };
};

export const computePosition = (
  molecule: CompleteCoordinates,
  coordinate: Coordinate,
  netIntervals: number,
  motionDuration = MOTION_INTERVAL,
): number => {
  const { begins, ends } = molecule;
  const movesPerInterval = computeMovesPerInterval(molecule, motionDuration);

  if (netIntervals > motionDuration) return ends[coordinate];
  if (netIntervals <= 0) return begins[coordinate];
  return begins[coordinate] + netIntervals * movesPerInterval[coordinate];
};

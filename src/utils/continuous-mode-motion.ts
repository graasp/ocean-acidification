import { CO2_RELATIVE_SPEED_IN_WATER } from '@/constants/canvas';
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

export const computeCo2Position = (
  molecule: CompleteCoordinates,
  coordinate: Coordinate,
  netIntervals: number,
  backwards: boolean,
  relativeSpeedInWater = CO2_RELATIVE_SPEED_IN_WATER,
): number => {
  const { begins, ends } = molecule;
  const movesPerInterval = computeMovesPerInterval(molecule, MOTION_INTERVAL);
  const totalDistance = movesPerInterval[coordinate] * MOTION_INTERVAL;
  const airDistance = totalDistance / (relativeSpeedInWater + 1);
  const waterDistance = totalDistance - airDistance;
  const halfInterval = MOTION_INTERVAL / 2;

  const firstHalfDistance = backwards ? waterDistance : airDistance;
  const secondHalfDistance = backwards ? airDistance : waterDistance;

  if (netIntervals > MOTION_INTERVAL) return ends[coordinate];
  if (netIntervals <= 0) return begins[coordinate];
  if (netIntervals <= halfInterval) {
    return (
      begins[coordinate] + netIntervals * (firstHalfDistance / halfInterval)
    );
  }
  return (
    begins[coordinate] +
    firstHalfDistance +
    (netIntervals - halfInterval) * (secondHalfDistance / halfInterval)
  );
};

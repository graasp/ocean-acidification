import { MOTION_INTERVAL } from '@/constants/motion/motion-intervals';

import { CompleteCoordinates, Point } from './molecules/types';

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

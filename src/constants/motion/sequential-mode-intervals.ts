import { MOTION_INTERVAL } from './motion-intervals';

const NUM_INTERVALS = 7;
export const SEQUENTIAL_MODE_INTERVALS = new Array(NUM_INTERVALS)
  .fill(null)
  .map((emptyElement, index) => index * MOTION_INTERVAL);

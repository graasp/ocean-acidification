import { CYCLES } from '@/constants/motion/continuous-mode-cycles';
import { MOTION_INTERVAL } from '@/constants/motion/motion-intervals';

const generateCycleIntervals = (interval: number): number[] =>
  new Array(6).fill(interval);

export const generateAllIntervals = (intervalCount: number): number[][] =>
  new Array(CYCLES.length)
    .fill(null)
    .map((emptyElement, index) =>
      generateCycleIntervals(intervalCount + index * MOTION_INTERVAL),
    );

export const INITIAL_INTERVALS = generateAllIntervals(0);

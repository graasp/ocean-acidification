import { MoleculeCounts } from '@/utils/molecules/types';

import { CYCLES } from './motion/continuous-mode-cycles';

export const createEmptyCountsObject = (): MoleculeCounts => ({
  co2Air: 0,
  co2Water: 0,
  carbonicAcid: 0,
  hydrogen: 0,
  bicarbonate: 0,
});

export const CONTINUOUS_CYCLE_COUNTS = {
  co2Air: 1,
  co2Water: 2,
  carbonicAcid: 2,
  hydrogen: 1,
  bicarbonate: 1,
};

export const ALL_CONTINUOUS_CYCLES = new Array(CYCLES.length)
  .fill(null)
  .map(() => CONTINUOUS_CYCLE_COUNTS);

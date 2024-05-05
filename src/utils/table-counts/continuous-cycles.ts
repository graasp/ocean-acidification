import { SKY_HEIGHT } from '@/constants/canvas';
import { MOTION_INTERVAL } from '@/constants/motion/motion-intervals';
import { CONTINUOUS_CYCLE_COUNTS } from '@/constants/table-counts';

import {
  AllAnimationsCycleType,
  Co2Counts,
  Migration,
  MoleculeCounts,
} from '../molecules/types';
import { countCycles } from './all-cycles';

export const isCo2InAir = (
  co2Migration: Migration,
  intervalCount: number,
  isReverseMigration = false,
): boolean => {
  const { co2 } = co2Migration;
  const { begins, ends } = co2;
  const movesPerIntervalY = Math.abs((ends.y - begins.y) / MOTION_INTERVAL);
  const intervalsToReachLine = Math.abs(
    Math.ceil((SKY_HEIGHT - begins.y) / movesPerIntervalY),
  );

  return isReverseMigration
    ? intervalCount % MOTION_INTERVAL > intervalsToReachLine
    : intervalCount % MOTION_INTERVAL < intervalsToReachLine;
};

const countActiveCycleCo2s = (
  continuousCycle: AllAnimationsCycleType,
  intervalCount: number,
): Co2Counts => {
  const { co2Migration, reverseMigration } = continuousCycle;
  const migrationCo2InAir = isCo2InAir(co2Migration, intervalCount);
  const reverseMigrationCo2InAir = isCo2InAir(
    reverseMigration,
    intervalCount,
    true,
  );
  const co2States = { co2Air: 0, co2Water: 0 };
  if (migrationCo2InAir && reverseMigrationCo2InAir) {
    co2States.co2Air = 2;
    co2States.co2Water = 0;
  } else if (
    (migrationCo2InAir && !reverseMigrationCo2InAir) ||
    (!migrationCo2InAir && reverseMigrationCo2InAir)
  ) {
    co2States.co2Air = 1;
    co2States.co2Water = 1;
  } else {
    co2States.co2Air = 0;
    co2States.co2Water = 2;
  }
  return co2States;
};

export const countContinuousCycles = (
  continuousModeCycles: AllAnimationsCycleType[],
  intervalCount: number,
): MoleculeCounts => {
  const activeCycleIndex =
    Math.floor(intervalCount / MOTION_INTERVAL) % continuousModeCycles.length;
  const activeCycle = continuousModeCycles[activeCycleIndex];

  const { co2Air, co2Water } = countActiveCycleCo2s(activeCycle, intervalCount);
  let carbonicAcid = 0;
  if (intervalCount % MOTION_INTERVAL === 0) carbonicAcid = 1;
  const activeCycleCounts = {
    co2Air,
    co2Water: co2Water + 1,
    carbonicAcid: carbonicAcid + 1,
    hydrogen: 1,
    bicarbonate: 1,
  };

  const inactiveCyclesCounts = new Array(continuousModeCycles.length - 1)
    .fill(null)
    .map(() => CONTINUOUS_CYCLE_COUNTS);

  return countCycles([activeCycleCounts, ...inactiveCyclesCounts]);
};

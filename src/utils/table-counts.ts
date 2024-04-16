import {
  FORMATION_INTERVALS,
  HYDROGEN_SPLITS,
  MOTION_INTERVAL,
} from '@/constants/motion/motion-intervals';
import { createEmptyCountsObject } from '@/constants/table-counts';

import {
  MoleculeCounts,
  ReactiveSliderMoleculesType,
  StaticSliderMoleculesType,
} from './molecules/types';

export const countAllMolecules = (
  allMoleculeCounts: MoleculeCounts[],
): MoleculeCounts => {
  const counts = createEmptyCountsObject();

  allMoleculeCounts.forEach((moleculesCount) => {
    counts.co2Air += moleculesCount.co2Air || 0;
    counts.co2Water += moleculesCount.co2Water || 0;
    counts.carbonicAcid += moleculesCount.carbonicAcid || 0;
    counts.hydrogen += moleculesCount.hydrogen || 0;
    counts.bicarbonate += moleculesCount.bicarbonate || 0;
  });

  return counts;
};

export const countStaticMolecules = (
  staticMolecules: StaticSliderMoleculesType[],
): MoleculeCounts => {
  const counts = createEmptyCountsObject();

  staticMolecules.forEach(({ show }) => {
    if (show) counts.co2Air += 1;
  });

  return counts;
};

export const countReactiveMolecules = (
  reactiveMolecules: ReactiveSliderMoleculesType[],
  intervalCount: number,
  beginsAfter: number,
): MoleculeCounts => {
  const counts = createEmptyCountsObject();

  const netIntervals = intervalCount - beginsAfter;

  // forward case
  const co2InAir = netIntervals <= MOTION_INTERVAL / 2;
  const co2InWater =
    netIntervals > MOTION_INTERVAL / 2 &&
    netIntervals <= MOTION_INTERVAL + FORMATION_INTERVALS.intervalOne;
  const carbonicAcidFormed =
    netIntervals >= MOTION_INTERVAL * 2 &&
    netIntervals <= MOTION_INTERVAL * 2 + HYDROGEN_SPLITS;
  const carbonicAcidDeprotonated =
    netIntervals > MOTION_INTERVAL * 2 + HYDROGEN_SPLITS;

  // reversed case
  const reverseCarbonicAcidDeprotonated = netIntervals <= MOTION_INTERVAL / 2;
  const reverseCarbonicAcidFormed =
    netIntervals > MOTION_INTERVAL / 2 && netIntervals <= MOTION_INTERVAL;
  const reverseCo2InWater =
    netIntervals >= MOTION_INTERVAL + FORMATION_INTERVALS.intervalTwo &&
    netIntervals < MOTION_INTERVAL * 2 + MOTION_INTERVAL / 2;
  const reversedCo2InAir =
    netIntervals >= MOTION_INTERVAL * 2 + MOTION_INTERVAL / 2 &&
    netIntervals <= MOTION_INTERVAL * 3;

  reactiveMolecules.forEach(({ properties }) => {
    const { beginsAt, reverse, showCycle } = properties;
    if (!showCycle) return;
    if (!reverse) {
      if (co2InAir) {
        counts.co2Air += 1;
      } else if (co2InWater) {
        counts.co2Water += 1;
      } else if (carbonicAcidFormed) {
        counts.carbonicAcid += 1;
      } else if (carbonicAcidDeprotonated) {
        counts.hydrogen += 1;
        counts.bicarbonate += 1;
      }
    } else if (reverse) {
      if (beginsAt === Infinity) {
        counts.hydrogen += 1;
        counts.bicarbonate += 1;
      } else if (beginsAt !== Infinity) {
        if (reverseCarbonicAcidDeprotonated) {
          counts.hydrogen += 1;
          counts.bicarbonate += 1;
        } else if (reverseCarbonicAcidFormed) {
          counts.carbonicAcid += 1;
        } else if (reverseCo2InWater) {
          counts.co2Water += 1;
        } else if (reversedCo2InAir) {
          counts.co2Air += 1;
        }
      }
    }
  });

  return counts;
};

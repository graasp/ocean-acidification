import { SKY_HEIGHT } from '@/constants/canvas';
import {
  FORMATION_INTERVALS,
  HYDROGEN_SPLITS,
  MOTION_INTERVAL,
} from '@/constants/motion/motion-intervals';
import { createEmptyCountsObject } from '@/constants/table-counts';

import {
  ActiveMoleculesType,
  CompleteCoordinates,
  MoleculeCounts,
} from '../molecules/types';

const computeCarbonDioxideIntervals = (
  carbonDioxide: CompleteCoordinates,
): number => {
  const { begins, ends } = carbonDioxide;
  const movesPerIntervalY = Math.abs((ends.y - begins.y) / MOTION_INTERVAL);
  const intervalsToReachLine = Math.abs(
    Math.ceil((SKY_HEIGHT - begins.y) / movesPerIntervalY),
  );
  return intervalsToReachLine;
};

const countActiveCycle = (
  activeCycle: ActiveMoleculesType,
  netIntervals: number,
): MoleculeCounts => {
  const counts = createEmptyCountsObject();
  const { molecules, properties } = activeCycle;
  const { carbonDioxide } = molecules;
  const { formsCarbonicAcid, deprotonates } = properties;

  const intervalsToReachLine = computeCarbonDioxideIntervals(carbonDioxide);
  const { intervalOne } = FORMATION_INTERVALS;
  const co2InAir = netIntervals <= intervalsToReachLine;
  const co2InWater = !co2InAir && netIntervals <= MOTION_INTERVAL + intervalOne;
  const carbonicAcidForms = MOTION_INTERVAL * 2;
  const hydrogenSplits = carbonicAcidForms + HYDROGEN_SPLITS;
  const carbonicAcidFormed = netIntervals >= carbonicAcidForms;
  const hydrogenHasSplit = netIntervals > hydrogenSplits;

  if (co2InAir) return { ...counts, co2Air: 1 };
  if (co2InWater || !formsCarbonicAcid) return { ...counts, co2Water: 1 };
  if (formsCarbonicAcid && carbonicAcidFormed && !hydrogenHasSplit) {
    return { ...counts, carbonicAcid: 1 };
  }
  if (formsCarbonicAcid && carbonicAcidFormed && hydrogenHasSplit) {
    if (!deprotonates) return { ...counts, carbonicAcid: 1 };
    return { ...counts, bicarbonate: 1, hydrogen: 1 };
  }

  return counts;
};

const countReversedActiveCycle = (
  activeCycle: ActiveMoleculesType,
  netIntervals: number,
): MoleculeCounts => {
  const counts = createEmptyCountsObject();
  const { molecules, properties } = activeCycle;
  const { carbonDioxide } = molecules;
  const { beginsAt, formsCarbonicAcid, deprotonates } = properties;
  const isPlaying = beginsAt !== Infinity;

  const { intervalTwo } = FORMATION_INTERVALS;
  const isDeprotonated = netIntervals <= MOTION_INTERVAL / 2;
  const carbonicAcidFormed = netIntervals <= MOTION_INTERVAL;
  const carbonDioxideFormed = netIntervals >= MOTION_INTERVAL + intervalTwo;
  const intervalsToReachLine =
    MOTION_INTERVAL - computeCarbonDioxideIntervals(carbonDioxide);
  const carbonDioxideInWater =
    netIntervals < MOTION_INTERVAL * 2 + intervalsToReachLine;
  const co2InWater = carbonDioxideFormed && carbonDioxideInWater;
  const co2InAir = !carbonDioxideInWater;

  if (!isPlaying || (isPlaying && isDeprotonated)) {
    if (!formsCarbonicAcid) return { ...counts, co2Water: 1 };
    if (formsCarbonicAcid) {
      if (deprotonates) return { ...counts, hydrogen: 1, bicarbonate: 1 };
      if (!deprotonates) return { ...counts, carbonicAcid: 1 };
    }
  }

  if (isPlaying) {
    if (!isDeprotonated && carbonicAcidFormed) {
      if (formsCarbonicAcid) return { ...counts, carbonicAcid: 1 };
      return { ...counts, co2Water: 1 };
    }
    if (!carbonicAcidFormed && !formsCarbonicAcid && carbonDioxideInWater) {
      return { ...counts, co2Water: 1 };
    }
    if (co2InWater) return { ...counts, co2Water: 1 };
    if (co2InAir) return { ...counts, co2Air: 1 };
  }

  return counts;
};

export const countActiveCycles = (
  activeMolecules: ActiveMoleculesType[],
  intervalCount: number,
  beginsAfter: number,
): MoleculeCounts => {
  const counts = createEmptyCountsObject();
  const netIntervals = intervalCount - beginsAfter;

  activeMolecules.forEach((activeCycle) => {
    const { reverse, showCycle } = activeCycle.properties;
    if (!showCycle) return;
    let cycleCounts = createEmptyCountsObject();
    if (!reverse) {
      cycleCounts = countActiveCycle(activeCycle, netIntervals);
    } else if (reverse) {
      cycleCounts = countReversedActiveCycle(activeCycle, netIntervals);
    }
    counts.co2Air += cycleCounts.co2Air;
    counts.co2Water += cycleCounts.co2Water;
    counts.carbonicAcid += cycleCounts.carbonicAcid;
    counts.bicarbonate += cycleCounts.bicarbonate;
    counts.hydrogen += cycleCounts.hydrogen;
  });

  return counts;
};

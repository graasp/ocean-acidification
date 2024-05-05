import { createEmptyCountsObject } from '@/constants/table-counts';

import { MoleculeCounts } from '../molecules/types';

export const countCycles = (
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

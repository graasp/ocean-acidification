import { createEmptyCountsObject } from '@/constants/table-counts';

import { MoleculeCounts, StaticCarbonDioxidesType } from '../molecules/types';

export const countStaticCarbonDioxides = (
  staticCarbonDioxides: StaticCarbonDioxidesType[],
): MoleculeCounts => {
  const counts = createEmptyCountsObject();

  staticCarbonDioxides.forEach(({ show }) => {
    if (show) counts.co2Air += 1;
  });

  return counts;
};

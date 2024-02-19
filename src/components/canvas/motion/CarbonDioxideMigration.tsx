import { useContext } from 'react';

import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { computeMovesPerInterval } from '@/utils/continuous-mode-motion';
import { Migration } from '@/utils/molecules/types';

import CarbonDioxide from '../molecules/CarbonDioxide';

interface Props {
  beginsAfter: number;
  molecules: Migration;
}

const CarbonDioxideMigration = ({
  beginsAfter,
  molecules,
}: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount, dimensions } = state;
  const { width, height } = dimensions;
  const { co2 } = molecules;
  const { begins, ends } = co2;
  const movesPerInterval = computeMovesPerInterval(co2);
  const netIntervals = intervalCount - beginsAfter;

  const currentX =
    netIntervals > 0
      ? Math.max(begins.x + netIntervals * movesPerInterval.x, ends.x)
      : begins.x;

  const currentY =
    netIntervals > 0
      ? Math.min(begins.y + netIntervals * movesPerInterval.y, ends.y)
      : begins.y;

  const currentRotation =
    netIntervals > 0
      ? Math.min(
          begins.rotation + netIntervals * movesPerInterval.rotation,
          ends.rotation,
        )
      : begins.rotation;

  return (
    <CarbonDioxide
      x={currentX * width}
      y={currentY * height}
      rotation={currentRotation}
    />
  );
};

export default CarbonDioxideMigration;

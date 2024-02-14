import { useContext } from 'react';

import { CO2_REVERSE_MIGRATION } from '@/constants/motion/reverse-carbon-dioxide-migration';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import CarbonDioxide from '../molecules/CarbonDioxide';

interface Props {
  beginsAfter: number;
}

const ReverseCarbonDioxideMigration = ({ beginsAfter }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount, dimensions } = state;
  const { width, height } = dimensions;
  const { begins, ends, movesPerInterval } = CO2_REVERSE_MIGRATION;
  const netIntervals = intervalCount - beginsAfter;

  const currentX =
    netIntervals > 0
      ? Math.max(begins.x + netIntervals * movesPerInterval.x, ends.x)
      : begins.x;

  const currentY =
    netIntervals > 0
      ? Math.max(begins.y + netIntervals * movesPerInterval.y, ends.y)
      : begins.y;

  const currentRotation =
    netIntervals > 0
      ? Math.max(
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

export default ReverseCarbonDioxideMigration;

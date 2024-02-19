import { useContext } from 'react';

import { ROTATION, X, Y } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { computePosition } from '@/utils/continuous-mode-motion';
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
  const netIntervals = intervalCount - beginsAfter;

  const currentX = computePosition(co2, X, netIntervals);
  const currentY = computePosition(co2, Y, netIntervals);
  const currentRotation = computePosition(co2, ROTATION, netIntervals);

  return (
    <CarbonDioxide
      x={currentX * width}
      y={currentY * height}
      rotation={currentRotation}
    />
  );
};

export default CarbonDioxideMigration;

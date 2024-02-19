import { useContext } from 'react';

import {
  WATER_FORMATION_INTERVALS,
  WATER_MOTION_INTERVALS,
} from '@/constants/motion/motion-intervals';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { createCarbonicAcid, findWaterCenter } from '@/utils/molecules/';

import Water from '../../molecules/Water';

interface Props {
  carbonicAcidX: number;
  carbonicAcidY: number;
  beginsAfter: number;
}

const WaterMotion = ({
  carbonicAcidX,
  carbonicAcidY,
  beginsAfter,
}: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount, dimensions } = state;
  const { height } = dimensions;

  const netIntervals = intervalCount - beginsAfter - WATER_FORMATION_INTERVALS;
  const { leftOxygen, topHydrogen } = createCarbonicAcid(
    {
      x: carbonicAcidX,
      y: carbonicAcidY,
    },
    height,
  );
  const { x: centerX, y: centerY } = findWaterCenter(topHydrogen, height);

  const movesPerIntervalX =
    (centerX - leftOxygen.x) / WATER_FORMATION_INTERVALS;
  const movesPerIntervalY =
    (centerY - leftOxygen.y) / WATER_FORMATION_INTERVALS;

  const endsX = centerX + WATER_MOTION_INTERVALS * movesPerIntervalX;
  const endsY = centerY + WATER_MOTION_INTERVALS * movesPerIntervalY;

  const projectedX = centerX + netIntervals * movesPerIntervalX;
  const projectedY = centerY + netIntervals * movesPerIntervalY;

  const currentX = Math.min(endsX, projectedX);
  const currentY = Math.max(endsY, projectedY);

  return <Water x={currentX} y={currentY} />;
};

export default WaterMotion;

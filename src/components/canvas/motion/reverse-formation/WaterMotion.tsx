import { useContext } from 'react';

import { MOTION_INTERVALS } from '@/constants/motion/intervals';
import {
  WATER_FORMATION_INTERVALS,
  WATER_MOTION_INTERVALS,
} from '@/constants/motion/reverse-formation';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { createCarbonicAcid, findWaterCenter } from '@/utils/molecules/';

import Water from '../../molecules/Water';

interface Props {
  carbonicAcidX: number;
  carbonicAcidY: number;
}

const WaterMotion = ({ carbonicAcidX, carbonicAcidY }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount } = state;
  const beginsAfter = MOTION_INTERVALS[3];
  const netIntervals = intervalCount - beginsAfter - WATER_FORMATION_INTERVALS;
  const { leftOxygen, topHydrogen } = createCarbonicAcid({
    x: carbonicAcidX,
    y: carbonicAcidY,
  });
  const { x: centerX, y: centerY } = findWaterCenter(topHydrogen);

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

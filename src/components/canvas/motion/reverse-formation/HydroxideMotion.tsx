import { useContext } from 'react';

import { MOTION_INTERVALS } from '@/constants/motion/intervals';
import { WATER_FORMATION_INTERVALS } from '@/constants/motion/reverse-formation';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { createCarbonicAcid, findWaterCenter } from '@/utils/molecules/';

import Hydroxide from '../../molecules/Hydroxide';

interface Props {
  carbonicAcidX: number;
  carbonicAcidY: number;
}

const HydroxideMotion = ({
  carbonicAcidX,
  carbonicAcidY,
}: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount } = state;
  const beginsAfter = MOTION_INTERVALS[3];

  const { leftOxygen, topHydrogen } = createCarbonicAcid({
    x: carbonicAcidX,
    y: carbonicAcidY,
  });

  const { x: centerX, y: centerY } = findWaterCenter(topHydrogen);
  const movesPerIntervalX =
    (centerX - leftOxygen.x) / WATER_FORMATION_INTERVALS;
  const movesPerIntervalY =
    (centerY - leftOxygen.y) / WATER_FORMATION_INTERVALS;

  const x = leftOxygen.x + movesPerIntervalX * (intervalCount - beginsAfter);
  const y = leftOxygen.y + movesPerIntervalY * (intervalCount - beginsAfter);

  return <Hydroxide x={x} y={y} />;
};

export default HydroxideMotion;

import { useContext } from 'react';

import { WATER_FORMATION_INTERVALS } from '@/constants/motion/motion-intervals';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { createCarbonicAcid, findWaterCenter } from '@/utils/molecules/';

import Hydroxide from '../../molecules/Hydroxide';

interface Props {
  carbonicAcidX: number;
  carbonicAcidY: number;
  beginsAfter: number;
}

const HydroxideMotion = ({
  carbonicAcidX,
  carbonicAcidY,
  beginsAfter,
}: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount, dimensions } = state;
  const { height } = dimensions;

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

  const x = leftOxygen.x + movesPerIntervalX * (intervalCount - beginsAfter);
  const y = leftOxygen.y + movesPerIntervalY * (intervalCount - beginsAfter);

  return <Hydroxide x={x} y={y} />;
};

export default HydroxideMotion;

import { useContext } from 'react';

import { CARBON_RADIUS, OXYGEN_RADIUS } from '@/constants/canvas';
import { FORMATION_INTERVALS } from '@/constants/motion/motion-intervals';
import { X, Y } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { computePosition } from '@/utils/continuous-mode-motion';
import { Formation } from '@/utils/molecules/types';

import Hydroxide from '../../molecules/Hydroxide';

interface Props {
  molecules: Formation;
  beginsAfter: number;
}

const HydroxideMotion = ({ molecules, beginsAfter }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount, dimensions } = state;
  const { width, height } = dimensions;
  const { co2, water, hydroxide } = molecules;

  const { intervalOne, intervalTwo } = FORMATION_INTERVALS;
  const netIntervals = intervalCount - (beginsAfter + intervalOne);

  hydroxide.begins.x = water.ends.x;
  hydroxide.begins.y = water.ends.y;
  hydroxide.ends.x =
    co2.ends.x - (CARBON_RADIUS + OXYGEN_RADIUS) * (height / width);
  hydroxide.ends.y = water.ends.y + CARBON_RADIUS + OXYGEN_RADIUS;

  const x = computePosition(hydroxide, X, netIntervals, intervalTwo);
  const y = computePosition(hydroxide, Y, netIntervals, intervalTwo);

  return <Hydroxide x={x * width} y={y * height} />;
};

export default HydroxideMotion;

import { useContext } from 'react';

import {
  CARBON_RADIUS,
  HYDROGEN_X_OFFSET,
  OXYGEN_RADIUS,
} from '@/constants/canvas';
import { FORMATION_INTERVALS } from '@/constants/motion/motion-intervals';
import { ROTATION, X, Y } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { computePosition } from '@/utils/continuous-mode-motion';
import { Formation } from '@/utils/molecules/types';

import CarbonDioxide from '../../molecules/CarbonDioxide';

interface Props {
  molecules: Formation;
  beginsAfter: number;
}

const CarbonDioxideMotion = ({
  molecules,
  beginsAfter,
}: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount, dimensions } = state;
  const { width, height } = dimensions;
  const { co2, water } = molecules;

  const { intervalOne } = FORMATION_INTERVALS;
  const netIntervals = intervalCount - beginsAfter;

  const xOffset = HYDROGEN_X_OFFSET * (height / width);
  const horizontalMotion = (co2.begins.x - (water.begins.x + xOffset)) / 2;
  co2.ends.x = co2.begins.x - horizontalMotion;
  co2.ends.y = water.begins.y + CARBON_RADIUS + OXYGEN_RADIUS;

  const x = computePosition(co2, X, netIntervals, intervalOne);
  const y = computePosition(co2, Y, netIntervals, intervalOne);
  const rotation = computePosition(co2, ROTATION, netIntervals, intervalOne);

  return <CarbonDioxide x={x * width} y={y * height} rotation={rotation} />;
};

export default CarbonDioxideMotion;

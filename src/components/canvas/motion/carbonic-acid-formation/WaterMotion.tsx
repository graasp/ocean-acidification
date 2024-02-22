import { useContext } from 'react';

import { HYDROGEN_X_OFFSET } from '@/constants/canvas';
import { FORMATION_INTERVALS } from '@/constants/motion/motion-intervals';
import { ROTATION, X, Y } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { computePosition } from '@/utils/continuous-mode-motion';
import { Formation } from '@/utils/molecules/types';

import Water from '../../molecules/Water';

interface Props {
  molecules: Formation;
  beginsAfter: number;
}

const WaterMotion = ({ molecules, beginsAfter }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount, dimensions } = state;
  const { width, height } = dimensions;
  const { water, co2 } = molecules;

  const { intervalOne } = FORMATION_INTERVALS;
  const netIntervals = intervalCount - beginsAfter;

  const xOffset = HYDROGEN_X_OFFSET * (height / width);
  const horizontalMotion = (co2.begins.x - (water.begins.x + xOffset)) / 2;
  water.ends.x = water.begins.x - xOffset + horizontalMotion;
  water.ends.y = water.begins.y;

  const x = computePosition(water, X, netIntervals, intervalOne);
  const y = computePosition(water, Y, netIntervals, intervalOne);
  const rotation = computePosition(water, ROTATION, netIntervals, intervalOne);

  return <Water x={x * width} y={y * height} rotation={rotation} />;
};

export default WaterMotion;

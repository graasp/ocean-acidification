import { useContext } from 'react';

import { FORMATION_INTERVALS } from '@/constants/motion/motion-intervals';
import { ROTATION, X, Y } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { computePosition } from '@/utils/continuous-mode-motion';
import { CompleteCoordinates } from '@/utils/molecules/types';

import Water from '../../molecules/Water';

interface Props {
  water: CompleteCoordinates;
  beginsAfter: number;
  componentCount: number;
  reverse: boolean;
}

const WaterMotion = ({
  water,
  beginsAfter,
  componentCount,
  reverse,
}: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions } = state;
  const { width, height } = dimensions;

  const { intervalOne } = FORMATION_INTERVALS;
  const netIntervals = reverse ? componentCount : componentCount - beginsAfter;

  const x = computePosition(water, X, netIntervals, intervalOne);
  const y = computePosition(water, Y, netIntervals, intervalOne);
  const rotation = computePosition(water, ROTATION, netIntervals, intervalOne);

  return <Water x={x * width} y={y * height} rotation={rotation} />;
};

export default WaterMotion;

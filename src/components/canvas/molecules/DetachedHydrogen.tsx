import { useContext } from 'react';

import {
  HYDROGEN_SPLITS,
  MOTION_INTERVAL,
} from '@/constants/motion/motion-intervals';
import { X, Y } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { computePosition } from '@/utils/continuous-mode-motion';
import { CompleteCoordinates } from '@/utils/molecules/types';

import Hydrogen from './atoms/Hydrogen';

interface Props {
  hydrogen: CompleteCoordinates;
  beginsAfter: number;
}

const DetachedHydrogen = ({ hydrogen, beginsAfter }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions, intervalCount } = state;
  const { width, height } = dimensions;
  const motionDuration = MOTION_INTERVAL - HYDROGEN_SPLITS;
  const netIntervals = intervalCount - beginsAfter - HYDROGEN_SPLITS;

  const currentX = computePosition(hydrogen, X, netIntervals, motionDuration);
  const currentY = computePosition(hydrogen, Y, netIntervals, motionDuration);

  return <Hydrogen x={currentX * width} y={currentY * height} />;
};

export default DetachedHydrogen;

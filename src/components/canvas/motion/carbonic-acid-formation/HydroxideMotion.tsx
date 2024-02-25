import { useContext } from 'react';

import { FORMATION_INTERVALS } from '@/constants/motion/motion-intervals';
import { X, Y } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { computePosition } from '@/utils/continuous-mode-motion';
import { CompleteCoordinates } from '@/utils/molecules/types';

import Hydroxide from '../../molecules/Hydroxide';

interface Props {
  hydroxide: CompleteCoordinates;
  beginsAfter: number;
  componentCount: number;
  reverse: boolean;
}

const HydroxideMotion = ({
  hydroxide,
  beginsAfter,
  componentCount,
  reverse,
}: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions } = state;
  const { width, height } = dimensions;

  const { intervalOne, intervalTwo } = FORMATION_INTERVALS;
  const netIntervals = reverse
    ? componentCount - intervalOne
    : componentCount - (beginsAfter + intervalOne);

  const x = computePosition(hydroxide, X, netIntervals, intervalTwo);
  const y = computePosition(hydroxide, Y, netIntervals, intervalTwo);

  return <Hydroxide x={x * width} y={y * height} />;
};

export default HydroxideMotion;

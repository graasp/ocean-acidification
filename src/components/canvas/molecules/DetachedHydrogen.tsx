import { useContext } from 'react';

import { X, Y } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { computePosition } from '@/utils/continuous-mode-motion';
import { CompleteCoordinates } from '@/utils/molecules/types';

import Hydrogen from './atoms/Hydrogen';

interface Props {
  hydrogen: CompleteCoordinates;
  motionDuration: number;
  netIntervals: number;
}

const DetachedHydrogen = ({
  hydrogen,
  motionDuration,
  netIntervals,
}: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions } = state;
  const { width, height } = dimensions;

  const currentX = computePosition(hydrogen, X, netIntervals, motionDuration);
  const currentY = computePosition(hydrogen, Y, netIntervals, motionDuration);

  return <Hydrogen x={currentX * width} y={currentY * height} />;
};

export default DetachedHydrogen;

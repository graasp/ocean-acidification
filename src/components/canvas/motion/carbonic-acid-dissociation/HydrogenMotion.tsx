import { useContext } from 'react';

import {
  HYDROGEN_SPLITS,
  MOTION_INTERVAL,
} from '@/constants/motion/motion-intervals';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { computeMovesPerInterval } from '@/utils/continuous-mode-motion';
import { CompleteCoordinates } from '@/utils/molecules/types';

import DetachedHydrogen from '../../molecules/DetachedHydrogen';

interface Props {
  beginsAfter: number;
  coordinates: CompleteCoordinates;
}

const HydrogenMotion = ({ beginsAfter, coordinates }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount, dimensions } = state;
  const { width, height } = dimensions;
  const { begins, ends } = coordinates;
  const movesPerInterval = computeMovesPerInterval(
    coordinates,
    MOTION_INTERVAL - HYDROGEN_SPLITS,
  );

  const projectedY =
    begins.y +
    (intervalCount - (HYDROGEN_SPLITS + beginsAfter)) * movesPerInterval.y;
  const currentY = Math.max(projectedY, ends.y);

  return (
    <DetachedHydrogen
      x={begins.x * width}
      y={currentY * height}
      rotation={begins.rotation}
    />
  );
};

export default HydrogenMotion;

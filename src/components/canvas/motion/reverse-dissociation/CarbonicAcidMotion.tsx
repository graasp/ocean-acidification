import { useContext } from 'react';

import {
  IONS_COMBINE,
  MOTION_INTERVAL,
} from '@/constants/motion/motion-intervals';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { computeMovesPerInterval } from '@/utils/continuous-mode-motion';
import { CompleteCoordinates, Point } from '@/utils/molecules/types';

import CarbonicAcid from '../../molecules/CarbonicAcid';

interface Props {
  beginsAfter: number;
  coordinates: CompleteCoordinates;
  carbonicAcidBegins: Point;
}

const CarbonicAcidMotion = ({
  beginsAfter,
  coordinates,
  carbonicAcidBegins,
}: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount, dimensions } = state;
  const { width, height } = dimensions;

  const { ends } = coordinates;
  const movesPerInterval = computeMovesPerInterval(coordinates);
  const netIntervals = intervalCount - (beginsAfter + IONS_COMBINE);
  const endsAfter = beginsAfter + MOTION_INTERVAL;

  const currentX = Math.min(
    carbonicAcidBegins.x + movesPerInterval.x * netIntervals,
    ends.x,
  );
  const currentY = Math.min(
    carbonicAcidBegins.y + movesPerInterval.y * netIntervals,
    ends.y,
  );
  const currentRotation =
    intervalCount > endsAfter
      ? ends.rotation
      : carbonicAcidBegins.rotation + netIntervals * movesPerInterval.rotation;

  return (
    <CarbonicAcid
      x={currentX * width}
      y={currentY * height}
      rotation={currentRotation}
    />
  );
};

export default CarbonicAcidMotion;

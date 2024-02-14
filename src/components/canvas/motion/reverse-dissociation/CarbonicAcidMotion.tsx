import { useContext } from 'react';

import {
  BICARBONATE,
  CARBONIC_ACID,
  IONS_COMBINE_AT,
  REVERSE_DISSOCIATION_INTERVALS,
} from '@/constants/motion/reverse-dissociation';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import CarbonicAcid from '../../molecules/CarbonicAcid';

interface Props {
  beginsAfter: number;
}

const CarbonicAcidMotion = ({ beginsAfter }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount, dimensions } = state;
  const { width, height } = dimensions;

  const { movesPerInterval, ends } = BICARBONATE;
  const netIntervals = intervalCount - (beginsAfter + IONS_COMBINE_AT);
  const { begins } = CARBONIC_ACID;
  const endsAfter = beginsAfter + REVERSE_DISSOCIATION_INTERVALS;

  const currentX = Math.min(
    begins.x + movesPerInterval.x * netIntervals,
    ends.x,
  );
  const currentY = Math.min(
    begins.y + movesPerInterval.y * netIntervals,
    ends.y,
  );
  const currentRotation =
    intervalCount > endsAfter
      ? ends.rotation
      : begins.rotation + netIntervals * movesPerInterval.rotation;

  return (
    <CarbonicAcid
      x={currentX * width}
      y={currentY * height}
      rotation={currentRotation}
    />
  );
};

export default CarbonicAcidMotion;

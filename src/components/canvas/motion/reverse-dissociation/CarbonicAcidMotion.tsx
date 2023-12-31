import { useContext } from 'react';

import { MOTION_INTERVALS } from '@/constants/motion/intervals';
import {
  BICARBONATE,
  CARBONIC_ACID,
  IONS_COMBINE_AT,
} from '@/constants/motion/reverse-dissociation';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import CarbonicAcid from '../../molecules/CarbonicAcid';

interface Props {
  width: number;
  height: number;
}

const CarbonicAcidMotion = ({ width, height }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount } = state;
  const { movesPerInterval, ends } = BICARBONATE;
  const beginsAfter = MOTION_INTERVALS[2];
  const netIntervals = intervalCount - (beginsAfter + IONS_COMBINE_AT);
  const { begins } = CARBONIC_ACID;

  const currentX = Math.min(
    begins.x + movesPerInterval.x * netIntervals,
    ends.x,
  );
  const currentY = Math.min(
    begins.y + movesPerInterval.y * netIntervals,
    ends.y,
  );
  const currentRotation =
    intervalCount > MOTION_INTERVALS[3]
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

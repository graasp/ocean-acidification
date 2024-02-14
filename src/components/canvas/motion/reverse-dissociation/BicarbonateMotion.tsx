import { useContext } from 'react';

import { BICARBONATE } from '@/constants/motion/reverse-dissociation';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import Bicarbonate from '../../molecules/Bicarbonate';

interface Props {
  beginsAfter: number;
}

const BicarbonateMotion = ({ beginsAfter }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount, dimensions } = state;
  const { width, height } = dimensions;

  const netIntervals = intervalCount - beginsAfter;
  const { begins, movesPerInterval } = BICARBONATE;

  const currentX =
    netIntervals > 0 ? begins.x + movesPerInterval.x * netIntervals : begins.x;
  const currentY =
    netIntervals > 0 ? begins.y + movesPerInterval.y * netIntervals : begins.y;
  const currentRotation =
    netIntervals > 0
      ? begins.rotation + movesPerInterval.rotation * netIntervals
      : begins.rotation;

  return (
    <Bicarbonate
      x={currentX * width}
      y={currentY * height}
      rotation={currentRotation}
    />
  );
};

export default BicarbonateMotion;

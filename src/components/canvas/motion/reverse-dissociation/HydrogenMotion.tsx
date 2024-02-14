import { useContext } from 'react';

import {
  CARBONIC_ACID,
  HYDROGEN,
  IONS_COMBINE_AT,
} from '@/constants/motion/reverse-dissociation';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { createCarbonicAcid } from '@/utils/molecules/';

import Hydrogen from '../../molecules/atoms/Hydrogen';

interface Props {
  beginsAfter: number;
}

const HydrogenMotion = ({ beginsAfter }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount, dimensions } = state;
  const { width, height } = dimensions;

  const netIntervals = intervalCount - beginsAfter;
  const { begins, ends, movesPerInterval } = HYDROGEN;

  const { leftHydrogen } = createCarbonicAcid(
    {
      x: CARBONIC_ACID.begins.x * width,
      y: CARBONIC_ACID.begins.y * height,
    },
    height,
  );

  ends.x = leftHydrogen.x;
  ends.y = leftHydrogen.y;

  movesPerInterval.x = (ends.x - begins.x * width) / IONS_COMBINE_AT;
  movesPerInterval.y = (ends.y - begins.y * height) / IONS_COMBINE_AT;

  const currentX =
    netIntervals > 0
      ? begins.x * width + movesPerInterval.x * netIntervals
      : begins.x * width;
  const currentY =
    netIntervals > 0
      ? begins.y * height + movesPerInterval.y * netIntervals
      : begins.y * height;

  return <Hydrogen x={currentX} y={currentY} />;
};

export default HydrogenMotion;

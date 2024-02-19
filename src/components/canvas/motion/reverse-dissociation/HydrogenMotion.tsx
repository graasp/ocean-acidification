import { useContext } from 'react';

import { IONS_COMBINE } from '@/constants/motion/motion-intervals';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { createCarbonicAcid } from '@/utils/molecules/';
import { CompleteCoordinates, Point } from '@/utils/molecules/types';

import Hydrogen from '../../molecules/atoms/Hydrogen';

interface Props {
  beginsAfter: number;
  coordinates: CompleteCoordinates;
  carbonicAcidBegins: Point;
}

const HydrogenMotion = ({
  beginsAfter,
  coordinates,
  carbonicAcidBegins,
}: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount, dimensions } = state;
  const { width, height } = dimensions;

  const netIntervals = intervalCount - beginsAfter;
  const { begins, ends } = coordinates;
  const { leftHydrogen } = createCarbonicAcid(
    {
      x: carbonicAcidBegins.x * width,
      y: carbonicAcidBegins.y * height,
    },
    height,
  );
  ends.x = leftHydrogen.x;
  ends.y = leftHydrogen.y;

  const movesPerIntervalX = (ends.x - begins.x * width) / IONS_COMBINE;
  const movesPerIntervalY = (ends.y - begins.y * height) / IONS_COMBINE;

  const currentX =
    netIntervals > 0
      ? begins.x * width + movesPerIntervalX * netIntervals
      : begins.x * width;
  const currentY =
    netIntervals > 0
      ? begins.y * height + movesPerIntervalY * netIntervals
      : begins.y * height;

  return <Hydrogen x={currentX} y={currentY} />;
};

export default HydrogenMotion;

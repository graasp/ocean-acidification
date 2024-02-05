import { useContext } from 'react';

import { CARBON_RADIUS, OXYGEN_RADIUS } from '@/constants/canvas';
import {
  FORMATION_BEGINS,
  FORMATION_INTERVALS,
} from '@/constants/motion/carbonic-acid-formation';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { createEmptyObject } from '@/utils/motion';

import Hydroxide from '../../molecules/Hydroxide';

interface Props {
  beginsX: number;
  beginsY: number;
  carbonDioxideEndsX: number;
}

const HydroxideMotion = ({
  beginsX,
  beginsY,
  carbonDioxideEndsX,
}: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount, dimensions } = state;
  const { height } = dimensions;
  const { intervalOne, intervalTwo, intervalThree, intervalFour } =
    FORMATION_INTERVALS;
  const netIntervalOne =
    intervalCount - (intervalOne + intervalTwo + FORMATION_BEGINS);
  const netIntervalTwo =
    intervalCount -
    (intervalOne + intervalTwo + intervalThree + FORMATION_BEGINS);
  const carbonOxygen = (CARBON_RADIUS + OXYGEN_RADIUS) * height;

  const { ends, current, movesPerInterval } = createEmptyObject();

  ends.x = carbonDioxideEndsX - carbonOxygen;
  ends.y = beginsY + carbonOxygen;
  movesPerInterval.y = (ends.y - beginsY) / intervalThree;
  movesPerInterval.x = (ends.x - beginsX) / intervalFour;

  const projectedY = beginsY + movesPerInterval.y * netIntervalOne;
  current.y = netIntervalOne > 0 ? Math.min(projectedY, ends.y) : beginsY;

  const projectedX = beginsX + movesPerInterval.x * netIntervalTwo;
  current.x = netIntervalTwo > 0 ? Math.min(projectedX, ends.x) : beginsX;

  return <Hydroxide x={current.x} y={current.y} />;
};

export default HydroxideMotion;

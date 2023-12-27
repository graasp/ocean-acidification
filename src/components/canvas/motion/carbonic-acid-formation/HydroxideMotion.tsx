import { useContext } from 'react';

import { CARBON_RADIUS, OXYGEN_RADIUS } from '@/constants/canvas';
import {
  CARBONIC_ACID_FORMATION_BEGINS,
  CARBONIC_ACID_FORMATION_INTERVALS,
} from '@/constants/motion';
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
  const { intervalCount } = state;
  const { intervalOne, intervalTwo, intervalThree, intervalFour } =
    CARBONIC_ACID_FORMATION_INTERVALS;
  const netIntervalOne =
    intervalCount -
    (intervalOne + intervalTwo + CARBONIC_ACID_FORMATION_BEGINS);
  const netIntervalTwo =
    intervalCount -
    (intervalOne +
      intervalTwo +
      intervalThree +
      CARBONIC_ACID_FORMATION_BEGINS);

  const { ends, current, movesPerInterval } = createEmptyObject();

  ends.x = carbonDioxideEndsX - CARBON_RADIUS - OXYGEN_RADIUS;
  ends.y = beginsY + OXYGEN_RADIUS + CARBON_RADIUS;
  movesPerInterval.y = (ends.y - beginsY) / intervalThree;
  movesPerInterval.x = (ends.x - beginsX) / intervalFour;

  const projectedY = beginsY + movesPerInterval.y * netIntervalOne;
  current.y = netIntervalOne > 0 ? Math.min(projectedY, ends.y) : beginsY;

  const projectedX = beginsX + movesPerInterval.x * netIntervalTwo;
  current.x = netIntervalTwo > 0 ? Math.min(projectedX, ends.x) : beginsX;

  return <Hydroxide x={current.x} y={current.y} />;
};

export default HydroxideMotion;

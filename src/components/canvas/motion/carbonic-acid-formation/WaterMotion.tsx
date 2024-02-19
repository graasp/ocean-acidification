import { useContext } from 'react';

import { FORMATION_INTERVALS } from '@/constants/motion/motion-intervals';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { createEmptyObject } from '@/utils/motion';

import Water from '../../molecules/Water';

interface Props {
  beginsX: number;
  beginsY: number;
  beginsRotation: number;
  endsX: number;
  beginsAfter: number;
}

const WaterMotion = ({
  beginsX,
  beginsY,
  beginsRotation,
  endsX,
  beginsAfter,
}: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount } = state;
  const { intervalOne, intervalTwo } = FORMATION_INTERVALS;
  const netIntervals = intervalCount - (intervalOne + beginsAfter);

  const { ends, current, movesPerInterval } = createEmptyObject();

  const endsY = beginsY;
  movesPerInterval.x = (endsX - beginsX) / intervalTwo;
  movesPerInterval.rotation = (ends.rotation - beginsRotation) / intervalTwo;

  const projectedX = beginsX + netIntervals * movesPerInterval.x;
  const projectedRotation =
    beginsRotation + movesPerInterval.rotation * netIntervals;
  current.x = netIntervals > 0 ? Math.min(endsX, projectedX) : beginsX;
  current.rotation =
    netIntervals > 0
      ? Math.max(ends.rotation, projectedRotation)
      : beginsRotation;

  return <Water x={current.x} y={endsY} rotation={current.rotation} />;
};

export default WaterMotion;

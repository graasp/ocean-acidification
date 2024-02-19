import { useContext } from 'react';

import { FORMATION_INTERVALS } from '@/constants/motion/motion-intervals';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { createEmptyObject } from '@/utils/motion';

import CarbonDioxide from '../../molecules/CarbonDioxide';

interface Props {
  beginsX: number;
  beginsY: number;
  beginsRotation: number;
  endsX: number;
  endsY: number;
  beginsAfter: number;
}

const CarbonDioxideMotion = ({
  beginsX,
  beginsY,
  beginsRotation,
  endsX,
  endsY,
  beginsAfter,
}: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount } = state;
  const { intervalOne, intervalTwo } = FORMATION_INTERVALS;
  const netIntervalOne = intervalCount - beginsAfter;
  const netIntervalTwo = intervalCount - (intervalOne + beginsAfter);

  const { ends, current, movesPerInterval } = createEmptyObject();

  movesPerInterval.y = (endsY - beginsY) / intervalOne;
  movesPerInterval.x = (endsX - beginsX) / intervalTwo;
  movesPerInterval.rotation = (ends.rotation - beginsRotation) / intervalOne;

  const projectedY = beginsY + movesPerInterval.y * netIntervalOne;
  const projectedRotation =
    beginsRotation + movesPerInterval.rotation * netIntervalOne;
  current.y = netIntervalOne >= 0 ? Math.min(endsY, projectedY) : beginsY;
  current.rotation =
    netIntervalOne >= 0
      ? Math.max(ends.rotation, projectedRotation)
      : beginsRotation;

  const projectedX = beginsX + netIntervalTwo * movesPerInterval.x;
  current.x = netIntervalTwo > 0 ? Math.max(endsX, projectedX) : beginsX;

  return (
    <CarbonDioxide x={current.x} y={current.y} rotation={current.rotation} />
  );
};

export default CarbonDioxideMotion;

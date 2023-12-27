import { useContext } from 'react';

import {
  CARBONIC_ACID_FORMATION_BEGINS,
  CARBONIC_ACID_FORMATION_INTERVALS,
} from '@/constants/motion';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { createEmptyObject } from '@/utils/motion';

import Water from '../../molecules/Water';

interface Props {
  beginsX: number;
  beginsY: number;
  beginsRotation: number;
  endsX: number;
}

const WaterMotion = ({
  beginsX,
  beginsY,
  beginsRotation,
  endsX,
}: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount } = state;
  const { intervalOne, intervalTwo } = CARBONIC_ACID_FORMATION_INTERVALS;
  const netInterval =
    intervalCount - (intervalOne + CARBONIC_ACID_FORMATION_BEGINS);

  const { ends, current, movesPerInterval } = createEmptyObject();

  const endsY = beginsY;
  movesPerInterval.x = (endsX - beginsX) / intervalTwo;
  movesPerInterval.rotation = (ends.rotation - beginsRotation) / intervalTwo;

  const projectedX = beginsX + netInterval * movesPerInterval.x;
  const projectedRotation =
    beginsRotation + movesPerInterval.rotation * netInterval;
  current.x = netInterval > 0 ? Math.min(endsX, projectedX) : beginsX;
  current.rotation =
    netInterval > 0
      ? Math.max(ends.rotation, projectedRotation)
      : beginsRotation;

  return <Water x={current.x} y={endsY} rotation={current.rotation} />;
};

export default WaterMotion;

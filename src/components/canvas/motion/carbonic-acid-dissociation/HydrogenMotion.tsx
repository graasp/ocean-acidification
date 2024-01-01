import { useContext } from 'react';

import {
  DISSOCIATION_HYDROGEN,
  HYDROGEN_SPLITS_AT,
} from '@/constants/motion/carbonic-acid-dissociation';
import { MOTION_INTERVALS } from '@/constants/motion/intervals';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import DetachedHydrogen from '../../molecules/DetachedHydrogen';

const HydrogenMotion = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount, dimensions } = state;
  const { width, height } = dimensions;
  const beginsAfter = MOTION_INTERVALS[1];
  const { begins, ends, movesPerInterval } = DISSOCIATION_HYDROGEN;

  const projectedY =
    begins.y +
    (intervalCount - (HYDROGEN_SPLITS_AT + beginsAfter)) * movesPerInterval.y;
  const currentY = Math.max(projectedY, ends.y);

  return (
    <DetachedHydrogen
      x={begins.x * width}
      y={currentY * height}
      rotation={begins.rotation}
    />
  );
};

export default HydrogenMotion;

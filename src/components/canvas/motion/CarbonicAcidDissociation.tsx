import { useContext } from 'react';
import { Group } from 'react-konva';

import {
  DISSOCIATION_CARBONIC_ACID,
  HYDROGEN_SPLITS_AT,
} from '@/constants/motion/carbonic-acid-dissociation';
import { MOTION_INTERVALS } from '@/constants/motion/intervals';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import Bicarbonate from '../molecules/Bicarbonate';
import CarbonicAcid from '../molecules/CarbonicAcid';
import HydrogenMotion from './carbonic-acid-dissociation/HydrogenMotion';

const CarbonicAcidDissociation = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount, dimensions } = state;
  const { width, height } = dimensions;

  const { begins, ends, movesPerInterval } = DISSOCIATION_CARBONIC_ACID;
  const beginsAfter = MOTION_INTERVALS[1];
  const netInterval = intervalCount - beginsAfter;
  const hydrogenHasSplit = intervalCount > HYDROGEN_SPLITS_AT + beginsAfter;

  const projectedX = begins.x + netInterval * movesPerInterval.x;
  const currentX = netInterval > 0 ? Math.min(projectedX, ends.x) : begins.x;

  const projectedY = begins.y + netInterval * movesPerInterval.y;
  const currentY = netInterval > 0 ? Math.max(projectedY, ends.y) : begins.y;

  const projectedRotation =
    begins.rotation + netInterval * movesPerInterval.rotation;
  const currentRotation =
    netInterval > 0
      ? Math.max(projectedRotation, ends.rotation)
      : begins.rotation;

  return (
    <Group>
      {!hydrogenHasSplit && (
        <CarbonicAcid
          x={currentX * width}
          y={currentY * height}
          rotation={currentRotation}
        />
      )}
      {hydrogenHasSplit && (
        <Bicarbonate
          x={currentX * width}
          y={currentY * height}
          rotation={currentRotation}
        />
      )}
      {hydrogenHasSplit && <HydrogenMotion />}
    </Group>
  );
};

export default CarbonicAcidDissociation;

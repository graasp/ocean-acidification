import { useContext } from 'react';
import { Group } from 'react-konva';

import {
  HYDROGEN_SPLITS,
  MOTION_INTERVAL,
} from '@/constants/motion/motion-intervals';
import { ROTATION, X, Y } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { computePosition } from '@/utils/continuous-mode-motion';
import { createCarbonicAcid } from '@/utils/molecules/';
import { Dissociation } from '@/utils/molecules/types';

import Bicarbonate from '../molecules/Bicarbonate';
import CarbonicAcid from '../molecules/CarbonicAcid';
import DetachedHydrogen from '../molecules/DetachedHydrogen';

interface Props {
  beginsAfter: number;
  molecules: Dissociation;
  reverse: boolean;
  hideAtStart?: boolean;
}

const CarbonicAcidDissociation = ({
  beginsAfter,
  molecules,
  reverse,
  hideAtStart,
}: Props): JSX.Element | null => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount, dimensions, mode } = state;
  const { width, height } = dimensions;

  const componentCount = reverse
    ? beginsAfter + MOTION_INTERVAL - intervalCount
    : intervalCount;

  const { carbonicAcid, hydrogen } = molecules;
  const netIntervals = reverse ? componentCount : intervalCount - beginsAfter;
  const hydrogenHasSplit = reverse
    ? componentCount > HYDROGEN_SPLITS
    : componentCount > HYDROGEN_SPLITS + beginsAfter;

  const currentX = computePosition(carbonicAcid, X, netIntervals) * width;
  const currentY = computePosition(carbonicAcid, Y, netIntervals) * height;
  const currentRotation = computePosition(carbonicAcid, ROTATION, netIntervals);

  // x and y when hydrogen splits
  const x = computePosition(carbonicAcid, X, HYDROGEN_SPLITS) * width;
  const y = computePosition(carbonicAcid, Y, HYDROGEN_SPLITS) * height;
  const { leftHydrogen } = createCarbonicAcid({ x, y }, height, mode);
  hydrogen.begins = {
    x: leftHydrogen.x / width,
    y: leftHydrogen.y / height,
    rotation: 0,
  };
  const hydrogenMotionDuration = MOTION_INTERVAL - HYDROGEN_SPLITS;
  const hydrogenNetIntervals = reverse
    ? componentCount - HYDROGEN_SPLITS
    : componentCount - beginsAfter - HYDROGEN_SPLITS;

  const hideMolecules = hideAtStart && netIntervals < 0;

  return hideMolecules ? null : (
    <Group>
      {!hydrogenHasSplit && (
        <CarbonicAcid x={currentX} y={currentY} rotation={currentRotation} />
      )}
      {hydrogenHasSplit && (
        <Bicarbonate x={currentX} y={currentY} rotation={currentRotation} />
      )}
      {hydrogenHasSplit && (
        <DetachedHydrogen
          hydrogen={hydrogen}
          motionDuration={hydrogenMotionDuration}
          netIntervals={hydrogenNetIntervals}
        />
      )}
    </Group>
  );
};

export default CarbonicAcidDissociation;

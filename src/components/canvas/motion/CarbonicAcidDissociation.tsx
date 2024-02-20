import { useContext } from 'react';
import { Group } from 'react-konva';

import { HYDROGEN_SPLITS } from '@/constants/motion/motion-intervals';
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
}

const CarbonicAcidDissociation = ({
  beginsAfter,
  molecules,
}: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount, dimensions } = state;
  const { width, height } = dimensions;

  const { carbonicAcid, hydrogen } = molecules;
  const netIntervals = intervalCount - beginsAfter;
  const hydrogenHasSplit = intervalCount > HYDROGEN_SPLITS + beginsAfter;

  const currentX = computePosition(carbonicAcid, X, netIntervals) * width;
  const currentY = computePosition(carbonicAcid, Y, netIntervals) * height;
  const currentRotation = computePosition(carbonicAcid, ROTATION, netIntervals);

  // x and y when hydrogen splits
  const x = computePosition(carbonicAcid, X, HYDROGEN_SPLITS) * width;
  const y = computePosition(carbonicAcid, Y, HYDROGEN_SPLITS) * height;
  const { leftHydrogen } = createCarbonicAcid({ x, y }, height);
  hydrogen.begins = {
    x: leftHydrogen.x / width,
    y: leftHydrogen.y / height,
    rotation: 0,
  };

  return (
    <Group>
      {!hydrogenHasSplit && (
        <CarbonicAcid x={currentX} y={currentY} rotation={currentRotation} />
      )}
      {hydrogenHasSplit && (
        <Bicarbonate x={currentX} y={currentY} rotation={currentRotation} />
      )}
      {hydrogenHasSplit && (
        <DetachedHydrogen hydrogen={hydrogen} beginsAfter={beginsAfter} />
      )}
    </Group>
  );
};

export default CarbonicAcidDissociation;

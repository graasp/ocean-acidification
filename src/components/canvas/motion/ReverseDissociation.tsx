import { useContext } from 'react';
import { Group } from 'react-konva';

import { IONS_COMBINE } from '@/constants/motion/motion-intervals';
import { ROTATION, X, Y } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { computePosition } from '@/utils/continuous-mode-motion';
import { createCarbonicAcid } from '@/utils/molecules/';
import { ReversedDissociation } from '@/utils/molecules/types';

import Bicarbonate from '../molecules/Bicarbonate';
import CarbonicAcid from '../molecules/CarbonicAcid';
import DetachedHydrogen from '../molecules/DetachedHydrogen';

interface Props {
  beginsAfter: number;
  molecules: ReversedDissociation;
}

const ReverseDissociation = ({
  beginsAfter,
  molecules,
}: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions, intervalCount } = state;
  const { width, height } = dimensions;
  const { bicarbonate, hydrogen } = molecules;

  const ionsHaveCombined = intervalCount >= beginsAfter + IONS_COMBINE;
  const netIntervals = intervalCount - beginsAfter;

  const currentX = computePosition(bicarbonate, X, netIntervals) * width;
  const currentY = computePosition(bicarbonate, Y, netIntervals) * height;
  const currentRotation = computePosition(bicarbonate, ROTATION, netIntervals);

  // position of bicarbonate and hydrogen when combination happens
  const x = computePosition(bicarbonate, X, IONS_COMBINE) * width;
  const y = computePosition(bicarbonate, Y, IONS_COMBINE) * height;
  const { leftHydrogen } = createCarbonicAcid({ x, y }, height);
  hydrogen.ends = {
    x: leftHydrogen.x / width,
    y: leftHydrogen.y / height,
    rotation: 0,
  };

  return (
    <Group>
      {!ionsHaveCombined && (
        <Bicarbonate x={currentX} y={currentY} rotation={currentRotation} />
      )}
      {!ionsHaveCombined && (
        <DetachedHydrogen
          hydrogen={hydrogen}
          motionDuration={IONS_COMBINE}
          netIntervals={netIntervals}
        />
      )}
      {ionsHaveCombined && (
        <CarbonicAcid x={currentX} y={currentY} rotation={currentRotation} />
      )}
    </Group>
  );
};

export default ReverseDissociation;

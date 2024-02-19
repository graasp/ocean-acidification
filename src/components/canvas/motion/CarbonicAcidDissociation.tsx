import { useContext } from 'react';
import { Group } from 'react-konva';

import { HYDROGEN_SPLITS } from '@/constants/motion/motion-intervals';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { computeMovesPerInterval } from '@/utils/continuous-mode-motion';
import { Dissociation } from '@/utils/molecules/types';

import Bicarbonate from '../molecules/Bicarbonate';
import CarbonicAcid from '../molecules/CarbonicAcid';
import HydrogenMotion from './carbonic-acid-dissociation/HydrogenMotion';

interface Props {
  beginsAfter: number;
  molecules: Dissociation;
}

// TODO: Simplify these files
const CarbonicAcidDissociation = ({
  beginsAfter,
  molecules,
}: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount, dimensions } = state;
  const { width, height } = dimensions;

  const { carbonicAcid, hydrogenEndsY } = molecules;
  const { begins, ends } = carbonicAcid;
  const movesPerInterval = computeMovesPerInterval(carbonicAcid);
  const netIntervals = intervalCount - beginsAfter;
  const hydrogenHasSplit = intervalCount > HYDROGEN_SPLITS + beginsAfter;

  const projectedX = begins.x + netIntervals * movesPerInterval.x;
  const currentX = netIntervals > 0 ? Math.min(projectedX, ends.x) : begins.x;

  const projectedY = begins.y + netIntervals * movesPerInterval.y;
  const currentY = netIntervals > 0 ? Math.max(projectedY, ends.y) : begins.y;

  const projectedRotation =
    begins.rotation + netIntervals * movesPerInterval.rotation;
  const currentRotation =
    netIntervals > 0
      ? Math.max(projectedRotation, ends.rotation)
      : begins.rotation;

  const hydrogenBeginsX = begins.x + movesPerInterval.x * HYDROGEN_SPLITS;
  const hydrogen = {
    begins: {
      x: hydrogenBeginsX,
      y: begins.y + movesPerInterval.y * HYDROGEN_SPLITS,
      rotation: begins.rotation + movesPerInterval.rotation * HYDROGEN_SPLITS,
    },
    ends: {
      x: hydrogenBeginsX,
      y: hydrogenEndsY,
      rotation: 0,
    },
  };

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
      {hydrogenHasSplit && (
        <HydrogenMotion beginsAfter={beginsAfter} coordinates={hydrogen} />
      )}
    </Group>
  );
};

export default CarbonicAcidDissociation;

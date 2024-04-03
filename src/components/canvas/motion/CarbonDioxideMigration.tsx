import { useContext } from 'react';

import { MOTION_INTERVAL } from '@/constants/motion/motion-intervals';
import { ROTATION, X, Y } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { computeCo2Position } from '@/utils/continuous-mode-motion';
import { Migration } from '@/utils/molecules/types';

import CarbonDioxide from '../molecules/CarbonDioxide';

interface Props {
  beginsAfter: number;
  molecules: Migration;
  reverse: boolean;
  hideAfterCompletion?: boolean;
  backwards: boolean;
}

const CarbonDioxideMigration = ({
  beginsAfter,
  molecules,
  reverse,
  hideAfterCompletion,
  backwards,
}: Props): JSX.Element | null => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount, dimensions } = state;
  const { width, height } = dimensions;
  const { co2 } = molecules;
  const netIntervals = intervalCount - beginsAfter;
  const reversedCo2 = { begins: { ...co2.ends }, ends: { ...co2.begins } };
  const activeCo2 = reverse ? reversedCo2 : co2;

  const currentX = computeCo2Position(activeCo2, X, netIntervals, backwards);
  const currentY = computeCo2Position(activeCo2, Y, netIntervals, backwards);
  const currentRotation = computeCo2Position(
    activeCo2,
    ROTATION,
    netIntervals,
    backwards,
  );
  const hideMolecule = hideAfterCompletion && netIntervals > MOTION_INTERVAL;

  return hideMolecule ? null : (
    <CarbonDioxide
      x={currentX * width}
      y={currentY * height}
      rotation={currentRotation}
    />
  );
};

export default CarbonDioxideMigration;

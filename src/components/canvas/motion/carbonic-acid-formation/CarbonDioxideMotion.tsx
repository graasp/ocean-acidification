import { useContext } from 'react';

import { FORMATION_INTERVALS } from '@/constants/motion/motion-intervals';
import { ROTATION, X, Y } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { computePosition } from '@/utils/continuous-mode-motion';
import { CompleteCoordinates } from '@/utils/molecules/types';

import CarbonDioxide from '../../molecules/CarbonDioxide';

interface Props {
  co2: CompleteCoordinates;
  beginsAfter: number;
  componentCount: number;
  reverse: boolean;
  hideAtStart?: boolean;
}

const CarbonDioxideMotion = ({
  co2,
  beginsAfter,
  componentCount,
  reverse,
  hideAtStart,
}: Props): JSX.Element | null => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions } = state;
  const { width, height } = dimensions;

  const { intervalOne } = FORMATION_INTERVALS;
  const netIntervals = reverse ? componentCount : componentCount - beginsAfter;

  const x = computePosition(co2, X, netIntervals, intervalOne);
  const y = computePosition(co2, Y, netIntervals, intervalOne);
  const rotation = computePosition(co2, ROTATION, netIntervals, intervalOne);

  const hideMolecule = hideAtStart && netIntervals < 0;

  return hideMolecule ? null : (
    <CarbonDioxide x={x * width} y={y * height} rotation={rotation} />
  );
};

export default CarbonDioxideMotion;

import { useContext } from 'react';

import { CARBON_RADIUS, OXYGEN_RADIUS } from '@/constants/canvas';
import { MOTION_INTERVALS } from '@/constants/motion/intervals';
import { WATER_FORMATION_INTERVALS } from '@/constants/motion/reverse-formation';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { createCarbonicAcid, findWaterCenter } from '@/utils/molecules/';

import AngledCarbonDioxide from '../../molecules/AngledCarbonDioxide';
import CarbonDioxide from '../../molecules/CarbonDioxide';

interface Props {
  carbonicAcidX: number;
  carbonicAcidY: number;
}

const AdjustingCarbonDioxide = ({
  carbonicAcidX,
  carbonicAcidY,
}: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount, dimensions } = state;
  const { height } = dimensions;

  const { leftOxygen, topHydrogen } = createCarbonicAcid(
    {
      x: carbonicAcidX,
      y: carbonicAcidY,
    },
    height,
  );
  const { y: waterCenterY } = findWaterCenter(topHydrogen, height);
  const beginsAfter = MOTION_INTERVALS[3];

  const waterMovesPerIntervalY =
    (waterCenterY - leftOxygen.y) / WATER_FORMATION_INTERVALS;

  const yAboveCarbonDioxide =
    carbonicAcidY - (CARBON_RADIUS + OXYGEN_RADIUS * 3) * height;
  const waterToPassCarbonDioxide =
    (yAboveCarbonDioxide - waterCenterY) / waterMovesPerIntervalY;

  const waterAboveCarbonDioxide =
    intervalCount >
    beginsAfter + WATER_FORMATION_INTERVALS + waterToPassCarbonDioxide;

  return !waterAboveCarbonDioxide ? (
    <AngledCarbonDioxide x={carbonicAcidX} y={carbonicAcidY} />
  ) : (
    <CarbonDioxide x={carbonicAcidX} y={carbonicAcidY} />
  );
};

export default AdjustingCarbonDioxide;

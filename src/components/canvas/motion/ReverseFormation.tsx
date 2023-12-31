import { useContext } from 'react';
import { Group } from 'react-konva';

import { MOTION_INTERVALS } from '@/constants/motion/intervals';
import {
  CARBONIC_ACID,
  WATER_FORMATION_INTERVALS,
} from '@/constants/motion/reverse-formation';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import AngledCarboxyl from '../molecules/AngledCarboxyl';
import CarbonicAcid from '../molecules/CarbonicAcid';
import AdjustingCarbonDioxide from './reverse-formation/AdjustingCarbonDioxide';
import HydroxideMotion from './reverse-formation/HydroxideMotion';
import WaterMotion from './reverse-formation/WaterMotion';

interface Props {
  width: number;
  height: number;
}

const ReverseFormation = ({ width, height }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount } = state;
  const beginsAfter = MOTION_INTERVALS[3];

  const { begins } = CARBONIC_ACID;
  const x = begins.x * width;
  const y = begins.y * height;

  const waterForming =
    intervalCount > beginsAfter &&
    intervalCount <= beginsAfter + WATER_FORMATION_INTERVALS;
  const waterHasFormed =
    intervalCount > beginsAfter + WATER_FORMATION_INTERVALS;

  return (
    <Group>
      {intervalCount <= beginsAfter && <CarbonicAcid x={x} y={y} />}
      {waterForming && <AngledCarboxyl x={x} y={y} />}
      {waterForming && <HydroxideMotion carbonicAcidX={x} carbonicAcidY={y} />}
      {waterHasFormed && <WaterMotion carbonicAcidX={x} carbonicAcidY={y} />}
      {waterHasFormed && (
        <AdjustingCarbonDioxide carbonicAcidX={x} carbonicAcidY={y} />
      )}
    </Group>
  );
};

export default ReverseFormation;

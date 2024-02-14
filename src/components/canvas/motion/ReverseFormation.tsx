import { useContext } from 'react';
import { Group } from 'react-konva';

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
  beginsAfter: number;
}

const ReverseFormation = ({ beginsAfter }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount, dimensions } = state;
  const { width, height } = dimensions;

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
      {waterForming && (
        <HydroxideMotion
          carbonicAcidX={x}
          carbonicAcidY={y}
          beginsAfter={beginsAfter}
        />
      )}
      {waterHasFormed && (
        <WaterMotion
          carbonicAcidX={x}
          carbonicAcidY={y}
          beginsAfter={beginsAfter}
        />
      )}
      {waterHasFormed && (
        <AdjustingCarbonDioxide
          carbonicAcidX={x}
          carbonicAcidY={y}
          beginsAfter={beginsAfter}
        />
      )}
    </Group>
  );
};

export default ReverseFormation;

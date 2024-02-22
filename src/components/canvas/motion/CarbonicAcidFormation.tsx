import { useContext } from 'react';
import { Group } from 'react-konva';

import {
  FORMATION_INTERVALS,
  MOTION_INTERVAL,
} from '@/constants/motion/motion-intervals';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { Formation } from '@/utils/molecules/types';

import CarbonicAcid from '../molecules/CarbonicAcid';
import Carboxyl from '../molecules/Carboxyl';
import CarbonDioxideMotion from './carbonic-acid-formation/CarbonDioxideMotion';
import HydroxideMotion from './carbonic-acid-formation/HydroxideMotion';
import WaterMotion from './carbonic-acid-formation/WaterMotion';

interface Props {
  beginsAfter: number;
  molecules: Formation;
}

const CarbonicAcidFormation = ({
  beginsAfter,
  molecules,
}: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount, dimensions } = state;
  const { width, height } = dimensions;

  const { co2 } = molecules;
  const { intervalOne } = FORMATION_INTERVALS;

  const moleculesMoving = beginsAfter + intervalOne;
  const bondingComplete = beginsAfter + MOTION_INTERVAL;
  const showMolecules = intervalCount <= moleculesMoving;
  const showIons = !showMolecules && intervalCount < bondingComplete;
  const showCarbonicAcid = intervalCount >= bondingComplete;

  return (
    <Group>
      {showMolecules && (
        <CarbonDioxideMotion molecules={molecules} beginsAfter={beginsAfter} />
      )}
      {showMolecules && (
        <WaterMotion molecules={molecules} beginsAfter={beginsAfter} />
      )}
      {showIons && <Carboxyl x={co2.ends.x * width} y={co2.ends.y * height} />}
      {showIons && (
        <HydroxideMotion molecules={molecules} beginsAfter={beginsAfter} />
      )}
      {showCarbonicAcid && (
        <CarbonicAcid x={co2.ends.x * width} y={co2.ends.y * height} />
      )}
    </Group>
  );
};

export default CarbonicAcidFormation;

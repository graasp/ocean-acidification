import { useContext } from 'react';
import { Group } from 'react-konva';

import {
  CARBON_RADIUS,
  HYDROGEN_X_OFFSET,
  OXYGEN_RADIUS,
} from '@/constants/canvas';
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
  reverse: boolean;
}

const CarbonicAcidFormation = ({
  beginsAfter,
  molecules,
  reverse,
}: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount, dimensions } = state;
  const { width, height } = dimensions;
  const { co2, water, hydroxide } = molecules;
  const { intervalOne } = FORMATION_INTERVALS;

  const componentCount = reverse
    ? beginsAfter + MOTION_INTERVAL - intervalCount
    : intervalCount;
  const carbonOxygenRadii = CARBON_RADIUS + OXYGEN_RADIUS;

  const moleculesMoving = reverse ? intervalOne : beginsAfter + intervalOne;
  const motionDone = reverse ? MOTION_INTERVAL : beginsAfter + MOTION_INTERVAL;
  const showMolecules = componentCount <= moleculesMoving;
  const showIons = !showMolecules && componentCount < motionDone;
  const showCarbonicAcid = componentCount >= motionDone;

  const xOffset = HYDROGEN_X_OFFSET * (height / width);
  const horizontalMotion = (co2.begins.x - (water.begins.x + xOffset)) / 2;
  co2.ends.x = co2.begins.x - horizontalMotion;
  co2.ends.y = water.begins.y + carbonOxygenRadii;
  water.ends.x = water.begins.x - xOffset + horizontalMotion;
  water.ends.y = water.begins.y;
  hydroxide.begins = water.ends;
  hydroxide.ends.x = co2.ends.x - carbonOxygenRadii * (height / width);
  hydroxide.ends.y = water.ends.y + carbonOxygenRadii;

  return (
    <Group>
      {showMolecules && (
        <CarbonDioxideMotion
          co2={co2}
          beginsAfter={beginsAfter}
          componentCount={componentCount}
          reverse={reverse}
        />
      )}
      {showMolecules && (
        <WaterMotion
          water={water}
          beginsAfter={beginsAfter}
          componentCount={componentCount}
          reverse={reverse}
        />
      )}
      {showIons && <Carboxyl x={co2.ends.x * width} y={co2.ends.y * height} />}
      {showIons && (
        <HydroxideMotion
          hydroxide={hydroxide}
          beginsAfter={beginsAfter}
          componentCount={componentCount}
          reverse={reverse}
        />
      )}
      {showCarbonicAcid && (
        <CarbonicAcid x={co2.ends.x * width} y={co2.ends.y * height} />
      )}
    </Group>
  );
};

export default CarbonicAcidFormation;

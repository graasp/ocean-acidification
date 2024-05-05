import { useContext } from 'react';
import { Group } from 'react-konva';

import {
  CARBON_PLUS_OXYGEN_CONT,
  CARBON_PLUS_OXYGEN_SEQ,
  HYDROGEN_X_OFFSET_CONT,
  HYDROGEN_X_OFFSET_SEQ,
} from '@/constants/canvas';
import {
  FORMATION_INTERVALS,
  MOTION_INTERVAL,
} from '@/constants/motion/motion-intervals';
import { SEQUENTIAL } from '@/constants/strings';
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
  hideCo2AtStart?: boolean;
  hideAfterCompletion?: boolean;
}

const CarbonicAcidFormation = ({
  beginsAfter,
  molecules,
  reverse,
  hideCo2AtStart,
  hideAfterCompletion,
}: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount, dimensions, mode } = state;
  const { width, height } = dimensions;
  const { co2, water, hydroxide } = molecules;
  const { intervalOne } = FORMATION_INTERVALS;

  const componentCount = reverse
    ? beginsAfter + MOTION_INTERVAL - intervalCount
    : intervalCount;
  const carbonOxygenRadii =
    mode === SEQUENTIAL ? CARBON_PLUS_OXYGEN_SEQ : CARBON_PLUS_OXYGEN_CONT;

  const moleculesMoving = reverse ? intervalOne : beginsAfter + intervalOne;
  const motionDone = reverse ? MOTION_INTERVAL : beginsAfter + MOTION_INTERVAL;
  const showMolecules = componentCount <= moleculesMoving;
  const showIons = !showMolecules && componentCount < motionDone;
  const showCarbonicAcid = componentCount >= motionDone && !hideAfterCompletion;

  const xOffset =
    (mode === SEQUENTIAL ? HYDROGEN_X_OFFSET_SEQ : HYDROGEN_X_OFFSET_CONT) *
    (height / width);
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
          hideAtStart={hideCo2AtStart}
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
      {showCarbonicAcid ? (
        <CarbonicAcid x={co2.ends.x * width} y={co2.ends.y * height} />
      ) : null}
    </Group>
  );
};

export default CarbonicAcidFormation;

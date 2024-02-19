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
}

const CarbonicAcidFormation = ({
  beginsAfter,
  molecules,
}: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount, dimensions } = state;
  const { width, height } = dimensions;

  const { co2, water } = molecules;
  const { begins: carbonDioxideBegins } = co2;
  const { begins: waterBegins } = water;
  const { intervalOne, intervalTwo } = FORMATION_INTERVALS;

  const moleculesMoving = beginsAfter + intervalOne + intervalTwo;
  const bondingComplete = beginsAfter + MOTION_INTERVAL;

  const showMolecules = intervalCount <= moleculesMoving;
  const showIons =
    intervalCount > moleculesMoving && intervalCount < bondingComplete;
  const showCarbonicAcid = intervalCount >= bondingComplete;

  const carbonDioxideBeginsX = carbonDioxideBegins.x * width;
  const carbonDioxideBeginsY = carbonDioxideBegins.y * height;
  const carbonDioxideBeginsRotation = carbonDioxideBegins.rotation;
  const waterBeginsX = waterBegins.x * width;
  const waterBeginsY = waterBegins.y * height;
  const waterBeginsRotation = waterBegins.rotation;
  const horizontalMotion =
    (carbonDioxideBeginsX - (waterBeginsX + HYDROGEN_X_OFFSET * height)) / 2;
  const carbonDioxideEndsX = carbonDioxideBeginsX - horizontalMotion;
  const carbonDioxideEndsY =
    waterBeginsY + (CARBON_RADIUS + OXYGEN_RADIUS) * height;
  const waterEndsX =
    waterBeginsX - HYDROGEN_X_OFFSET * height + horizontalMotion;
  const waterEndsY = waterBeginsY;

  return (
    <Group>
      {showMolecules && (
        <CarbonDioxideMotion
          beginsX={carbonDioxideBeginsX}
          beginsY={carbonDioxideBeginsY}
          beginsRotation={carbonDioxideBeginsRotation}
          endsX={carbonDioxideEndsX}
          endsY={carbonDioxideEndsY}
          beginsAfter={beginsAfter}
        />
      )}
      {showMolecules && (
        <WaterMotion
          beginsX={waterBeginsX}
          beginsY={waterBeginsY}
          beginsRotation={waterBeginsRotation}
          endsX={waterEndsX}
          beginsAfter={beginsAfter}
        />
      )}
      {showIons && (
        <HydroxideMotion
          beginsX={waterEndsX}
          beginsY={waterEndsY}
          carbonDioxideEndsX={carbonDioxideEndsX}
          beginsAfter={beginsAfter}
        />
      )}
      {showIons && <Carboxyl x={carbonDioxideEndsX} y={carbonDioxideEndsY} />}
      {showCarbonicAcid && (
        <CarbonicAcid x={carbonDioxideEndsX} y={carbonDioxideEndsY} />
      )}
    </Group>
  );
};

export default CarbonicAcidFormation;

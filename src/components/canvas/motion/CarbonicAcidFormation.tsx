import { useContext } from 'react';
import { Group } from 'react-konva';

import {
  CARBON_RADIUS,
  HYDROGEN_X_OFFSET,
  OXYGEN_RADIUS,
} from '@/constants/canvas';
import {
  CARBONIC_ACID_FORMATION_BEGINS,
  CARBONIC_ACID_FORMATION_CO2,
  CARBONIC_ACID_FORMATION_INTERVALS,
  CARBONIC_ACID_FORMATION_WATER,
  TOTAL_CARBONIC_ACID_FORMATION_INTERVALS,
} from '@/constants/motion';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import CarbonicAcid from '../molecules/CarbonicAcid';
import Carboxyl from '../molecules/Carboxyl';
import CarbonDioxideMotion from './carbonic-acid-formation/CarbonDioxideMotion';
import HydroxideMotion from './carbonic-acid-formation/HydroxideMotion';
import WaterMotion from './carbonic-acid-formation/WaterMotion';

interface Props {
  width: number;
  height: number;
}

const CarbonicAcidFormation = ({ width, height }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount } = state;

  const { begins: carbonDioxideBegins } = CARBONIC_ACID_FORMATION_CO2;
  const { begins: waterBegins } = CARBONIC_ACID_FORMATION_WATER;
  const { intervalOne, intervalTwo } = CARBONIC_ACID_FORMATION_INTERVALS;

  const moleculesMoving =
    CARBONIC_ACID_FORMATION_BEGINS + intervalOne + intervalTwo;
  const bondingComplete =
    CARBONIC_ACID_FORMATION_BEGINS + TOTAL_CARBONIC_ACID_FORMATION_INTERVALS;

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
    (carbonDioxideBeginsX - (waterBeginsX + HYDROGEN_X_OFFSET)) / 2;
  const carbonDioxideEndsX = carbonDioxideBeginsX - horizontalMotion;
  const carbonDioxideEndsY = waterBeginsY + CARBON_RADIUS + OXYGEN_RADIUS;
  const waterEndsX = waterBeginsX - HYDROGEN_X_OFFSET + horizontalMotion;
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
        />
      )}
      {showMolecules && (
        <WaterMotion
          beginsX={waterBeginsX}
          beginsY={waterBeginsY}
          beginsRotation={waterBeginsRotation}
          endsX={waterEndsX}
        />
      )}
      {showIons && (
        <HydroxideMotion
          beginsX={waterEndsX}
          beginsY={waterEndsY}
          carbonDioxideEndsX={carbonDioxideEndsX}
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

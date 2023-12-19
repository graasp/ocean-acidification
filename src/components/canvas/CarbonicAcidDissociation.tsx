import { useContext } from 'react';
import { Group } from 'react-konva';

import {
  CARBONIC_ACID_DISSOCIATION_MOVEMENT_PER_INTERVAL,
  CARBON_RADIUS,
  HYDROGENS_ANGLE,
  HYDROGEN_RADIUS,
  LEFT_OXYGEN_ANGLE,
  OXYGENS_ANGLE,
  OXYGEN_RADIUS,
} from '@/constants/canvas';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { createCarbonicAcid } from '@/utils/molecules/';

import Bicarbonate from './molecules/Bicarbonate';
import CarbonicAcid from './molecules/CarbonicAcid';
import Hydrogen from './molecules/atoms/Hydrogen';

interface Props {
  width: number;
  height: number;
}

const CARBONIC_ACID = { x: 0.5, y: 0.5 };

const CarbonicAcidDissociation = ({ width, height }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount } = state;

  const xMovePerInterval =
    CARBONIC_ACID_DISSOCIATION_MOVEMENT_PER_INTERVAL * width;
  const beginAfterInterval = 240;
  const moveAfterDissociation = 0.05 * width;
  const carbonicAcidX = CARBONIC_ACID.x * width;
  const carbonicAcidY = CARBONIC_ACID.y * height;

  const bicarbonate = {
    beginsX: carbonicAcidX,
    beginsY: carbonicAcidY,
    endsX: carbonicAcidX + moveAfterDissociation,
    currentX: 0,
  };

  bicarbonate.currentX =
    intervalCount >= beginAfterInterval
      ? Math.min(
          bicarbonate.beginsX +
            (intervalCount - beginAfterInterval) * xMovePerInterval,
          bicarbonate.endsX,
        )
      : bicarbonate.beginsX;

  const coordinates = createCarbonicAcid(
    { x: bicarbonate.currentX, y: bicarbonate.beginsY },
    CARBON_RADIUS,
    OXYGEN_RADIUS,
    HYDROGEN_RADIUS,
    OXYGENS_ANGLE,
    LEFT_OXYGEN_ANGLE,
    HYDROGENS_ANGLE,
  );
  const { leftHydrogen } = createCarbonicAcid(
    { x: carbonicAcidX, y: carbonicAcidY },
    CARBON_RADIUS,
    OXYGEN_RADIUS,
    HYDROGEN_RADIUS,
    OXYGENS_ANGLE,
    LEFT_OXYGEN_ANGLE,
    HYDROGENS_ANGLE,
  );

  const hydrogen = {
    beginsX: leftHydrogen.x,
    beginsY: leftHydrogen.y,
    endsX: leftHydrogen.x - moveAfterDissociation,
    currentX: 0,
  };

  hydrogen.currentX = Math.max(
    hydrogen.beginsX - (intervalCount - beginAfterInterval) * xMovePerInterval,
    hydrogen.endsX,
  );

  return (
    <Group>
      {intervalCount < beginAfterInterval && (
        <CarbonicAcid x={carbonicAcidX} y={carbonicAcidY} />
      )}
      {intervalCount >= beginAfterInterval && (
        <Bicarbonate
          x={bicarbonate.currentX}
          y={bicarbonate.beginsY}
          coordinates={coordinates}
        />
      )}
      {intervalCount >= beginAfterInterval && (
        <Hydrogen x={hydrogen.currentX} y={hydrogen.beginsY} />
      )}
    </Group>
  );
};

export default CarbonicAcidDissociation;

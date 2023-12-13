import { useContext } from 'react';
import { Group } from 'react-konva';

import {
  CARBON_RADIUS,
  HYDROGEN_X_OFFSET,
  MOVEMENT_PER_INTERVAL,
  OXYGEN_RADIUS,
} from '@/constants/canvas';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import CarbonDioxide from './molecules/CarbonDioxide';
import CarbonicAcid from './molecules/CarbonicAcid';
import Carboxyl from './molecules/Carboxyl';
import Hydroxide from './molecules/Hydroxide';
import Water from './molecules/Water';

interface Props {
  width: number;
  height: number;
}

const CARBON_DIOXIDE = { x: 0.4, y: 0.2 };
const WATER = { x: 0.1, y: 0.6 };

const Molecules = ({ width, height }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount } = state;

  const xMovePerInterval = MOVEMENT_PER_INTERVAL * width;
  const yMovePerInterval = MOVEMENT_PER_INTERVAL * height;

  const water = {
    beginsX: WATER.x * width,
    beginsY: WATER.y * height,
    endsX: 0,
    hydrogenOffsetX: HYDROGEN_X_OFFSET,
    currentX: 0,
  };

  const carbonDioxide = {
    beginsX: CARBON_DIOXIDE.x * width,
    beginsY: CARBON_DIOXIDE.y * height,
    endsX: 0,
    endsY: water.beginsY + (CARBON_RADIUS + OXYGEN_RADIUS),
    currentX: 0,
    currentY: 0,
  };

  const xMoveWaterCarbonDioxide =
    (carbonDioxide.beginsX - (water.beginsX + water.hydrogenOffsetX)) / 2;
  carbonDioxide.endsX = carbonDioxide.beginsX - xMoveWaterCarbonDioxide;
  water.endsX = water.beginsX - water.hydrogenOffsetX + xMoveWaterCarbonDioxide;

  const hydroxide = {
    endsX: carbonDioxide.endsX - CARBON_RADIUS - OXYGEN_RADIUS,
    endsY: water.beginsY + OXYGEN_RADIUS + CARBON_RADIUS,
    currentX: 0,
    currentY: 0,
  };

  const intervals = {
    1: (carbonDioxide.endsY - carbonDioxide.beginsY) / yMovePerInterval,
    2: xMoveWaterCarbonDioxide / xMovePerInterval,
    3: (OXYGEN_RADIUS + CARBON_RADIUS) / yMovePerInterval,
    4: (hydroxide.endsX - water.endsX) / xMovePerInterval,
  };

  carbonDioxide.currentY =
    intervalCount >= intervals[1]
      ? carbonDioxide.endsY
      : carbonDioxide.beginsY + intervalCount * yMovePerInterval;

  const carbonDioxideProjectedX =
    carbonDioxide.beginsX - (intervalCount - intervals[1]) * xMovePerInterval;
  carbonDioxide.currentX =
    intervalCount >= intervals[1]
      ? Math.max(carbonDioxideProjectedX, carbonDioxide.endsX)
      : carbonDioxide.beginsX;

  const waterProjectedX =
    water.beginsX + (intervalCount - intervals[1]) * xMovePerInterval;
  water.currentX =
    intervalCount >= intervals[1]
      ? Math.min(waterProjectedX, water.endsX)
      : water.beginsX;

  const hydroxideBeginsMovingY = intervals[1] + intervals[2];
  const hydroxideProjectedY =
    water.beginsY + (intervalCount - hydroxideBeginsMovingY) * yMovePerInterval;
  hydroxide.currentY =
    intervalCount >= hydroxideBeginsMovingY
      ? Math.min(hydroxideProjectedY, hydroxide.endsY)
      : water.beginsY;

  const hydroxideBeginsMovingX = intervals[1] + intervals[2] + intervals[3];
  const hydroxideProjectedX =
    water.endsX + xMovePerInterval * (intervalCount - hydroxideBeginsMovingX);
  hydroxide.currentX =
    intervalCount >= hydroxideBeginsMovingX
      ? Math.min(hydroxideProjectedX, hydroxide.endsX)
      : water.endsX;

  const bondingComplete =
    intervals[1] + intervals[2] + intervals[3] + intervals[4];

  const showMolecules = intervalCount <= hydroxideBeginsMovingY;
  const showIons =
    intervalCount > hydroxideBeginsMovingY && intervalCount <= bondingComplete;
  const showCarbonicAcid = intervalCount > bondingComplete;

  return (
    <Group>
      {showMolecules && (
        <CarbonDioxide x={carbonDioxide.currentX} y={carbonDioxide.currentY} />
      )}
      {showMolecules && <Water x={water.currentX} y={water.beginsY} />}
      {showIons && <Carboxyl x={carbonDioxide.endsX} y={carbonDioxide.endsY} />}
      {showIons && <Hydroxide x={hydroxide.currentX} y={hydroxide.currentY} />}
      {showCarbonicAcid && (
        <CarbonicAcid x={carbonDioxide.endsX} y={carbonDioxide.endsY} />
      )}
    </Group>
  );
};

export default Molecules;

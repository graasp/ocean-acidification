import { useContext } from 'react';
import { Group } from 'react-konva';

import {
  CARBON_RADIUS,
  CO2_MOLS_SKY_COORDINATES,
  HYDROGEN_RADIUS,
  OXYGEN_RADIUS,
  WATER_MOLS_SEA_COORDINATES,
} from '@/constants/canvas';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { createCarbonicAcid } from '@/utils/molecules';
import { disappearsAfter } from '@/utils/motion';

import Carbon from './atoms/Carbon';
import Hydrogen from './atoms/Hydrogen';
import Oxygen from './atoms/Oxygen';

interface Props {
  width: number;
  height: number;
}

const CarbonicAcid = ({ width, height }: Props): JSX.Element | null => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount } = state;
  const waterMolecule = WATER_MOLS_SEA_COORDINATES[0];
  const carbonDioxideMolecule = CO2_MOLS_SKY_COORDINATES[0];
  const disappear = disappearsAfter(carbonDioxideMolecule, waterMolecule);

  const { topOxygen, leftOxygen, rightOxygen, leftHydrogen, rightHydrogen } =
    createCarbonicAcid(
      { x: waterMolecule.x * width, y: waterMolecule.y * height },
      CARBON_RADIUS,
      OXYGEN_RADIUS,
      HYDROGEN_RADIUS,
    );

  return intervalCount > disappear ? (
    <Group>
      <Oxygen x={topOxygen.x} y={topOxygen.y} />
      <Carbon x={waterMolecule.x * width} y={waterMolecule.y * height} />
      <Oxygen x={leftOxygen.x} y={leftOxygen.y} />
      <Oxygen x={rightOxygen.x} y={rightOxygen.y} />
      <Hydrogen x={leftHydrogen.x} y={leftHydrogen.y} />
      <Hydrogen x={rightHydrogen.x} y={rightHydrogen.y} />
    </Group>
  ) : null;
};

export default CarbonicAcid;

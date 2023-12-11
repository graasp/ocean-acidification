import { useContext } from 'react';
import { Group } from 'react-konva';

import {
  CO2_MOLS_SKY_COORDINATES,
  WATER_MOLS_SEA_COORDINATES,
} from '@/constants/canvas';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { determineMoleculeCoordinates, disappearsAfter } from '@/utils/motion';

import CarbonDioxide from './molecules/CarbonDioxide';

interface Props {
  height: number;
  width: number;
}

const CarbonDioxideMolecules = ({ height, width }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount } = state;
  const waterMolecules = WATER_MOLS_SEA_COORDINATES;
  const carbonDioxideMolecules = CO2_MOLS_SKY_COORDINATES;

  return (
    <Group>
      {carbonDioxideMolecules.map((startPosition, index) => {
        const disappear = disappearsAfter(startPosition, waterMolecules[0]);
        const { x, y } = determineMoleculeCoordinates(
          startPosition,
          waterMolecules[0],
          intervalCount,
        );
        return intervalCount > disappear ? null : (
          <CarbonDioxide x={x * width} y={y * height} key={index} />
        );
      })}
    </Group>
  );
};

export default CarbonDioxideMolecules;

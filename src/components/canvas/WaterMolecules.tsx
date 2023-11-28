import { useContext } from 'react';
import { Group } from 'react-konva';

import { CO2_MOLS_SKY_COORDINATES } from '@/constants/canvas';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { disappearsAfter } from '@/utils/motion';

import Water from './molecules/Water';

interface MoleculeCenter {
  x: number;
  y: number;
}

interface Props {
  height: number;
  width: number;
  coordinates: MoleculeCenter[];
}

const WaterMolecules = ({ height, width, coordinates }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { intervalCount } = state;
  const carbonDioxideMolecules = CO2_MOLS_SKY_COORDINATES[0];

  return (
    <Group>
      {coordinates.map(({ x, y }, index) => {
        const disappear = disappearsAfter(carbonDioxideMolecules, { x, y });
        return intervalCount > disappear ? null : (
          <Water x={x * width} y={y * height} key={index} />
        );
      })}
    </Group>
  );
};

export default WaterMolecules;

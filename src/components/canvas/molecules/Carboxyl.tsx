import { useContext } from 'react';
import { Group } from 'react-konva';

import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { createCarboxyl } from '@/utils/molecules/';

import CarbonDioxide from './CarbonDioxide';
import Hydrogen from './atoms/Hydrogen';

interface Props {
  x: number;
  y: number;
}

const Carboxyl = ({ x, y }: Props): JSX.Element | null => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions } = state;
  const { height } = dimensions;
  const { hydrogen } = createCarboxyl({ x, y }, height);

  return (
    <Group>
      <Hydrogen x={hydrogen.x} y={hydrogen.y} />
      <CarbonDioxide x={x} y={y} />
    </Group>
  );
};

export default Carboxyl;

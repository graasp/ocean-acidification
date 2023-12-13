import { Group } from 'react-konva';

import {
  CARBON_RADIUS,
  HYDROGENS_ANGLE,
  HYDROGEN_RADIUS,
  OXYGEN_RADIUS,
} from '@/constants/canvas';
import { createCarboxyl } from '@/utils/molecules/';

import CarbonDioxide from './CarbonDioxide';
import Hydrogen from './atoms/Hydrogen';

interface Props {
  x: number;
  y: number;
}

const Carboxyl = ({ x, y }: Props): JSX.Element | null => {
  const { hydrogen } = createCarboxyl(
    { x, y },
    CARBON_RADIUS,
    OXYGEN_RADIUS,
    HYDROGEN_RADIUS,
    HYDROGENS_ANGLE,
  );
  return (
    <Group>
      <Hydrogen x={hydrogen.x} y={hydrogen.y} />
      <CarbonDioxide x={x} y={y} />
    </Group>
  );
};

export default Carboxyl;

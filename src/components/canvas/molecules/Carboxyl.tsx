import { Group } from 'react-konva';

import {
  CARBON_RADIUS,
  HYDROGENS_ANGLE,
  HYDROGEN_RADIUS,
  OXYGEN_RADIUS,
} from '@/constants/canvas';
import { createCarboxyl } from '@/utils/molecules';

import CarbonDioxide from './CarbonDioxide';
import Hydrogen from './atoms/Hydrogen';

const Carboxyl = (): JSX.Element => {
  const { hydrogen } = createCarboxyl(
    { x: 500, y: 400 },
    CARBON_RADIUS,
    OXYGEN_RADIUS,
    HYDROGEN_RADIUS,
    HYDROGENS_ANGLE,
  );
  return (
    <Group>
      <Hydrogen x={hydrogen.x} y={hydrogen.y} />
      <CarbonDioxide x={500} y={400} />
    </Group>
  );
};

export default Carboxyl;

import { Group } from 'react-konva';

import { HYDROGEN_RADIUS, OXYGEN_RADIUS } from '@/constants/canvas';

import Hydrogen from './Hydrogen';
import Oxygen from './Oxygen';

const Water = (): JSX.Element => (
  <Group>
    <Hydrogen x={500} y={500 - OXYGEN_RADIUS - HYDROGEN_RADIUS} />
    <Oxygen x={500} y={500} radius={OXYGEN_RADIUS} />
    <Hydrogen x={500} y={500 + OXYGEN_RADIUS + HYDROGEN_RADIUS} />
  </Group>
);

export default Water;

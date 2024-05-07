import { Group } from 'react-konva';

import Claws from './crab/Claws';
import CrabBody from './crab/CrabBody';
import Eyes from './crab/Eyes';
import Limbs from './crab/Limbs';

interface Props {
  x: number;
  y: number;
}

const Crab = ({ x, y }: Props): JSX.Element => (
  <Group x={x} y={y}>
    <CrabBody />
    <Eyes />
    <Claws />
    <Limbs />
  </Group>
);

export default Crab;

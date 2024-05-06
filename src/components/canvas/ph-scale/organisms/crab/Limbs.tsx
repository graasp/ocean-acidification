import { Group } from 'react-konva';

import Legs from './Legs';

const Limbs = (): JSX.Element => (
  <Group>
    <Legs areLeft />
    <Legs areLeft={false} />
  </Group>
);

export default Limbs;

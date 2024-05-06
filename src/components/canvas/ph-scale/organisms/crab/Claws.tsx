import { Group } from 'react-konva';

import Claw from './Claw';

const Claws = (): JSX.Element => (
  <Group>
    <Claw isLeft />
    <Claw isLeft={false} />
  </Group>
);

export default Claws;

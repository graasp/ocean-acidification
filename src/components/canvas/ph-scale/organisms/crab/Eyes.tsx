import { Group } from 'react-konva';

import Eye from './Eye';

const Eyes = (): JSX.Element => (
  <Group>
    <Eye isLeft />
    <Eye isLeft={false} />
  </Group>
);

export default Eyes;

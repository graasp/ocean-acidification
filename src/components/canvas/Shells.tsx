import { Group } from 'react-konva';

import PHScale from './ph-scale/PHScale';
import ReefBlocker from './ph-scale/ReefBlocker';
import ReefGroup from './ph-scale/ReefGroup';

const Shells = (): JSX.Element => (
  <Group>
    <ReefGroup />
    <ReefBlocker />
    <PHScale />
  </Group>
);

export default Shells;

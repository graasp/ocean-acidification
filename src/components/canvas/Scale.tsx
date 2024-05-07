import { Group } from 'react-konva';

import PHScale from './ph-scale/PHScale';
import ReefBlocker from './ph-scale/ReefBlocker';
import ReefGroup from './ph-scale/ReefGroup';
import Organisms from './ph-scale/organisms/Organisms';

const Scale = (): JSX.Element => (
  <Group>
    <Organisms />
    <ReefGroup />
    <ReefBlocker />
    <PHScale />
  </Group>
);

export default Scale;

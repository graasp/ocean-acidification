import { Group } from 'react-konva';

import { SEQUENTIAL_MODE_INTERVALS } from '@/constants/motion/intervals';

import Spotlight from './Spotlight';
import MoleculesMovementCycle from './motion/MoleculesMovementCycle';

const SequentialModeAnimations = (): JSX.Element => {
  const intervals = SEQUENTIAL_MODE_INTERVALS;
  return (
    <Group>
      <MoleculesMovementCycle intervals={intervals} />
      <Spotlight />
    </Group>
  );
};

export default SequentialModeAnimations;

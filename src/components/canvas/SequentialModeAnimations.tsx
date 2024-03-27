import { Group } from 'react-konva';

import { CYCLE_1 } from '@/constants/motion/continuous-mode-cycles';
import { SEQUENTIAL_MODE_INTERVALS } from '@/constants/motion/sequential-mode-intervals';

import Spotlight from './Spotlight';
import AllAnimationsCycle from './motion/AllAnimationsCycle';

const SequentialModeAnimations = (): JSX.Element => {
  const intervals = SEQUENTIAL_MODE_INTERVALS;
  return (
    <Group>
      <AllAnimationsCycle
        intervals={intervals}
        cycle={CYCLE_1}
        reverse={false}
      />
      <Spotlight />
    </Group>
  );
};

export default SequentialModeAnimations;

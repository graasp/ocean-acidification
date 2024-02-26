import { Group } from 'react-konva';

import { SEQUENTIAL_MODE_CYCLE } from '@/constants/motion/sequential-mode-cycles';
import { SEQUENTIAL_MODE_INTERVALS } from '@/constants/motion/sequential-mode-intervals';

import Spotlight from './Spotlight';
import MoleculesMovementCycle from './motion/MoleculesMovementCycle';

const SequentialModeAnimations = (): JSX.Element => {
  const intervals = SEQUENTIAL_MODE_INTERVALS;
  return (
    <Group>
      <MoleculesMovementCycle
        intervals={intervals}
        cycle={SEQUENTIAL_MODE_CYCLE}
        reverse={false}
      />
      <Spotlight />
    </Group>
  );
};

export default SequentialModeAnimations;

import { Group } from 'react-konva';

import { CYCLE, CYCLE_2 } from '@/constants/motion/continuous-mode-cycles';

import MoleculesMovementCycle from './motion/MoleculesMovementCycle';

const ContinuousModeAnimations = (): JSX.Element => {
  const intervals = [0, 0, 0, 0, 0, 0];
  const intervals2 = [200, 200, 200, 200, 200, 200];
  return (
    <Group>
      <MoleculesMovementCycle intervals={intervals} cycle={CYCLE} />
      <MoleculesMovementCycle intervals={intervals2} cycle={CYCLE_2} />
    </Group>
  );
};

export default ContinuousModeAnimations;

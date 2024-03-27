import { useContext, useEffect, useState } from 'react';
import { Group } from 'react-konva';

import { CYCLES } from '@/constants/motion/continuous-mode-cycles';
import { MOTION_INTERVAL } from '@/constants/motion/motion-intervals';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { INITIAL_INTERVALS, generateAllIntervals } from '@/utils/motion';

import AllAnimationsCycle from './motion/AllAnimationsCycle';

const ContinuousModeAnimations = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const [allIntervals, setAllIntervals] = useState(INITIAL_INTERVALS);
  const [reverse, setReverse] = useState(false);
  const { intervalCount } = state;
  const intervalsPerCycle = CYCLES.length * MOTION_INTERVAL;

  useEffect(() => {
    if (intervalCount === 0) {
      setAllIntervals(INITIAL_INTERVALS);
      setReverse(false);
    } else if (intervalCount % intervalsPerCycle === 0) {
      setAllIntervals(generateAllIntervals(intervalCount));
      setReverse((isReversed) => !isReversed);
    }
  }, [intervalCount, intervalsPerCycle]);

  return (
    <Group>
      {CYCLES.map((cycle, index) => (
        <AllAnimationsCycle
          cycle={cycle}
          intervals={allIntervals[index]}
          reverse={reverse}
          key={index}
        />
      ))}
    </Group>
  );
};

export default ContinuousModeAnimations;

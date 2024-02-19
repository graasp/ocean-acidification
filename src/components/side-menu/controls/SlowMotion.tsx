import { useContext } from 'react';

import { SlowMotionVideo } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { blue } from '@mui/material/colors';

import {
  incrementIntervalCount,
  setAnimationIndex,
  toggleAnimationInMotion,
} from '@/actions/app-settings';
import { INTERVAL_COUNT_INCREMENTED_EVERY } from '@/constants/canvas';
import { SEQUENTIAL_MODE_INTERVALS } from '@/constants/motion/sequential-mode-intervals';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

const SlowMotion = (): JSX.Element => {
  const { state, dispatch } = useContext(AppSettingsContext);
  const { intervalCount, animationIndex, animationInMotion } = state;
  const currentLimit = SEQUENTIAL_MODE_INTERVALS[animationIndex + 1];

  const allStepsPlayed =
    animationIndex === SEQUENTIAL_MODE_INTERVALS.length - 1;
  const disabled = animationInMotion || allStepsPlayed;
  const styles = { fontSize: '2em', color: disabled ? '' : blue[800] };

  const handleClick = (): void => {
    dispatch(toggleAnimationInMotion());
    let count = intervalCount;
    const motionInterval = setInterval(() => {
      if (count < currentLimit) {
        dispatch(incrementIntervalCount());
        count += 1;
      } else {
        clearInterval(motionInterval);
        dispatch(setAnimationIndex(animationIndex + 1));
        dispatch(toggleAnimationInMotion());
      }
    }, INTERVAL_COUNT_INCREMENTED_EVERY);
  };

  return (
    <Tooltip title="Play next step">
      <IconButton onClick={handleClick} disabled={disabled}>
        <SlowMotionVideo sx={styles} />
      </IconButton>
    </Tooltip>
  );
};

export default SlowMotion;

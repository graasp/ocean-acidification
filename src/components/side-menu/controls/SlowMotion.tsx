import { Dispatch, SetStateAction, useContext } from 'react';

import { SlowMotionVideo } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { blue } from '@mui/material/colors';

import { incrementIntervalCount } from '@/actions/app-settings';
import { INTERVAL_COUNT_INCREMENTED_EVERY } from '@/constants/canvas';
import { MOTION_INTERVALS } from '@/constants/motion/intervals';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

interface Props {
  inMotion: boolean;
  setInMotion: Dispatch<SetStateAction<boolean>>;
  currentLimitIndex: number;
  setCurrentLimitIndex: Dispatch<SetStateAction<number>>;
}

const SlowMotion = ({
  inMotion,
  setInMotion,
  currentLimitIndex,
  setCurrentLimitIndex,
}: Props): JSX.Element => {
  const currentLimit = MOTION_INTERVALS[currentLimitIndex];
  const { state, dispatch } = useContext(AppSettingsContext);
  const { intervalCount } = state;

  const allStepsPlayed = currentLimitIndex === MOTION_INTERVALS.length;
  const disabled = inMotion || allStepsPlayed;
  const buttonStyles = { fontSize: '2em', color: disabled ? '' : blue[800] };

  const handleClick = (): void => {
    setInMotion(true);
    let count = intervalCount;
    const motionInterval = setInterval(() => {
      if (count < currentLimit) {
        dispatch(incrementIntervalCount());
        count += 1;
      } else {
        clearInterval(motionInterval);
        setCurrentLimitIndex((prevLimit) => prevLimit + 1);
        setInMotion(false);
      }
    }, INTERVAL_COUNT_INCREMENTED_EVERY);
  };

  return (
    <Tooltip title="Play next step">
      <IconButton onClick={handleClick} disabled={disabled}>
        <SlowMotionVideo sx={buttonStyles} />
      </IconButton>
    </Tooltip>
  );
};

export default SlowMotion;

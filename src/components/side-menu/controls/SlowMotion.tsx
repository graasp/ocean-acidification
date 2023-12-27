import { Dispatch, SetStateAction, useContext, useState } from 'react';

import { SlowMotionVideo } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { blue } from '@mui/material/colors';

import { incrementIntervalCount } from '@/actions/app-settings';
import { INTERVAL_COUNT_INCREMENTED_EVERY } from '@/constants/canvas';
import { MOTION_LIMITS } from '@/constants/motion';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

interface Props {
  currentLimitIndex: number;
  setCurrentLimitIndex: Dispatch<SetStateAction<number>>;
}

const SlowMotion = ({
  currentLimitIndex,
  setCurrentLimitIndex,
}: Props): JSX.Element => {
  const currentLimit = MOTION_LIMITS[currentLimitIndex];
  const [inMotion, setInMotion] = useState(false);
  const { state, dispatch } = useContext(AppSettingsContext);
  const { intervalCount } = state;

  const buttonStyles = { fontSize: '2em', color: inMotion ? '' : blue[800] };

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
      <IconButton onClick={handleClick} disabled={inMotion}>
        <SlowMotionVideo sx={buttonStyles} />
      </IconButton>
    </Tooltip>
  );
};

export default SlowMotion;

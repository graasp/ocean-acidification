import { useContext, useEffect, useState } from 'react';

import { StopCircleOutlined } from '@mui/icons-material';
import { Box, IconButton, Tooltip } from '@mui/material';
import { red } from '@mui/material/colors';

import { togglePlay } from '@/actions/app-settings';
import { MOTION_INTERVAL } from '@/constants/motion/motion-intervals';
import { EMPTY_STRING } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import ProgressBar from './ProgressBar';

const container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const Stop = (): JSX.Element => {
  const [disabled, setDisabled] = useState(false);
  const [stopAtInterval, setStopAtInterval] = useState(0);
  const { state, dispatch } = useContext(AppSettingsContext);
  const { intervalCount } = state;

  const styles = {
    fontSize: '2em',
    color: disabled ? EMPTY_STRING : red[800],
  };

  const onStop = (): void => {
    setDisabled(true);
    const stopAt =
      MOTION_INTERVAL * (Math.floor(intervalCount / MOTION_INTERVAL) + 1);
    setStopAtInterval(stopAt);
  };

  useEffect(() => {
    if (intervalCount === stopAtInterval) {
      setDisabled(false);
      dispatch(togglePlay());
    }
  }, [intervalCount, stopAtInterval, dispatch]);

  return (
    <Box sx={container}>
      <Tooltip title="Stop">
        <IconButton onClick={onStop} disabled={disabled}>
          <StopCircleOutlined sx={styles} />
        </IconButton>
      </Tooltip>
      {disabled && <ProgressBar />}
    </Box>
  );
};

export default Stop;

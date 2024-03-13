import { useContext, useEffect, useState } from 'react';

import { StopCircleOutlined } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { red } from '@mui/material/colors';

import { togglePlay } from '@/actions/app-settings';
import { MOTION_INTERVAL } from '@/constants/motion/motion-intervals';
import { EMPTY_STRING } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

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
    <Tooltip title="Stop">
      <IconButton onClick={onStop} disabled={disabled}>
        <StopCircleOutlined sx={styles} />
      </IconButton>
    </Tooltip>
  );
};

export default Stop;

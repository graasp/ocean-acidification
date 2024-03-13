import { Dispatch, SetStateAction, useContext, useEffect, useRef } from 'react';

import { Box } from '@mui/material';

import { incrementIntervalCount } from '@/actions/app-settings';
import { INTERVAL_COUNT_INCREMENTED_EVERY } from '@/constants/canvas';
import { SEQUENTIAL } from '@/constants/strings';

import { AppSettingsContext } from '../../contexts/AppSettingsProvider';
import CloseMenu from './controls/CloseMenu';
import Play from './controls/Play';
import Reset from './controls/Reset';
import SlowMotion from './controls/SlowMotion';
import StartTour from './controls/StartTour';
import Stop from './controls/Stop';

interface Props {
  setShowSideMenu: Dispatch<SetStateAction<boolean>>;
}

const container = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '1em',
};
const leftContainer = {
  width: '20%',
  display: 'flex',
  alignItems: 'center',
};
const rightContainer = {
  width: '20%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
};
const centerContainer = {
  width: '60%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Controls = ({ setShowSideMenu }: Props): JSX.Element => {
  const applicationInterval = useRef<ReturnType<typeof setInterval>>();
  const { dispatch, state } = useContext(AppSettingsContext);
  const { isPlaying, mode } = state;
  const modeSequential = mode === SEQUENTIAL;

  useEffect(() => {
    const startInterval = (): void => {
      applicationInterval.current = setInterval(() => {
        dispatch(incrementIntervalCount());
      }, INTERVAL_COUNT_INCREMENTED_EVERY);
    };
    if (!isPlaying) {
      clearInterval(applicationInterval.current);
    } else if (isPlaying) {
      startInterval();
    }
  }, [isPlaying, dispatch]);

  return (
    <Box sx={container}>
      <Box sx={leftContainer}>
        <CloseMenu setShowSideMenu={setShowSideMenu} />
      </Box>
      <Box sx={centerContainer}>
        <SlowMotion />
        {!isPlaying ? <Play disabled={modeSequential} /> : <Stop />}
        <Reset />
      </Box>
      <Box sx={rightContainer}>
        <StartTour />
      </Box>
    </Box>
  );
};

export default Controls;

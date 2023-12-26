import { useContext, useState } from 'react';

import { SlowMotionVideo } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { blue } from '@mui/material/colors';

import { incrementIntervalCount } from '@/actions/app-settings';
import { INTERVAL_COUNT_INCREMENTED_EVERY } from '@/constants/canvas';
import { CO2_MIGRATION_INTERVALS } from '@/constants/motion';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

const SlowMotion = (): JSX.Element => {
  const [inMotion, setInMotion] = useState(false);
  const { state, dispatch } = useContext(AppSettingsContext);
  const { intervalCount } = state;

  const disabled = inMotion;
  const buttonStyles = { fontSize: '2em', color: disabled ? '' : blue[800] };

  const handleClick = (): void => {
    setInMotion(true);
    let count = intervalCount;
    const motionInterval = setInterval(() => {
      if (count < CO2_MIGRATION_INTERVALS) {
        dispatch(incrementIntervalCount());
        count += 1;
      } else {
        clearInterval(motionInterval);
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

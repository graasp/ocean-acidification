import { useContext } from 'react';

import { SlowMotionVideo } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { blue } from '@mui/material/colors';

import { incrementIntervalCount } from '@/actions/app-settings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

const buttonStyles = { fontSize: '2em', color: blue[800] };

const SlowMotion = (): JSX.Element => {
  const { dispatch } = useContext(AppSettingsContext);

  return (
    <Tooltip title="Play next step">
      <IconButton onClick={() => dispatch(incrementIntervalCount())}>
        <SlowMotionVideo sx={buttonStyles} />
      </IconButton>
    </Tooltip>
  );
};

export default SlowMotion;

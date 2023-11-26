import { useContext } from 'react';

import { PlayCircleOutline } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { green } from '@mui/material/colors';

import { togglePause } from '@/actions/app-settings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

const buttonStyles = { fontSize: '2em', color: green[800] };

const Play = (): JSX.Element => {
  const { dispatch } = useContext(AppSettingsContext);

  return (
    <Tooltip title="Play">
      <IconButton onClick={() => dispatch(togglePause())}>
        <PlayCircleOutline sx={buttonStyles} />
      </IconButton>
    </Tooltip>
  );
};

export default Play;

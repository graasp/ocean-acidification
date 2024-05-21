import { useContext } from 'react';

import { PlayCircleOutline } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { green } from '@mui/material/colors';

import { togglePlay } from '@/actions/app-settings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

const Play = (): JSX.Element => {
  const { dispatch } = useContext(AppSettingsContext);
  const styles = { fontSize: '2em', color: green[800] };

  return (
    <Tooltip title="Play">
      <span>
        <IconButton onClick={() => dispatch(togglePlay())}>
          <PlayCircleOutline sx={styles} />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default Play;

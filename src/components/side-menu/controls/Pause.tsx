import { useContext } from 'react';

import { PauseCircleOutline } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { yellow } from '@mui/material/colors';

import { togglePause } from '@/actions/app-settings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

const styles = { fontSize: '2em', color: yellow[800] };

const Pause = (): JSX.Element => {
  const { dispatch } = useContext(AppSettingsContext);

  return (
    <Tooltip title="Pause">
      <IconButton onClick={() => dispatch(togglePause())}>
        <PauseCircleOutline sx={styles} />
      </IconButton>
    </Tooltip>
  );
};

export default Pause;

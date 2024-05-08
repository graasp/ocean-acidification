import { useContext } from 'react';

import { PlayCircleOutline } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { green } from '@mui/material/colors';

import { togglePlay } from '@/actions/app-settings';
import { EMPTY_STRING } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

interface Props {
  disabled: boolean;
}

const Play = ({ disabled }: Props): JSX.Element => {
  const { dispatch } = useContext(AppSettingsContext);
  const styles = {
    fontSize: '2em',
    color: disabled ? EMPTY_STRING : green[800],
  };

  return (
    <Tooltip title="Play">
      <span>
        <IconButton disabled={disabled} onClick={() => dispatch(togglePlay())}>
          <PlayCircleOutline sx={styles} />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default Play;

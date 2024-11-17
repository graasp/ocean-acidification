import { useContext } from 'react';

import { PlayCircleOutline } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { green } from '@mui/material/colors';

import { t } from 'i18next';

import { togglePlay } from '@/actions/app-settings';
import { RESPONSIVE_BUTTON_STYLES } from '@/constants/css';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

const Play = (): JSX.Element => {
  const { dispatch } = useContext(AppSettingsContext);
  const styles = { color: green[800] };

  return (
    <Tooltip title={t('Play')}>
      <span>
        <IconButton
          onClick={() => dispatch(togglePlay())}
          className="continuous-mode-2"
        >
          <PlayCircleOutline sx={{ ...styles, ...RESPONSIVE_BUTTON_STYLES }} />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default Play;

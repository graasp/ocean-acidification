import { useContext } from 'react';

import { RotateLeft } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { orange } from '@mui/material/colors';

import { resetSettings } from '@/actions/app-settings';
import { EMPTY_STRING } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

const Reset = (): JSX.Element => {
  const { state, dispatch } = useContext(AppSettingsContext);
  const { animationInMotion, isPlaying } = state;

  const disabled = animationInMotion || isPlaying;

  const styles = {
    fontSize: '2em',
    color: disabled ? EMPTY_STRING : orange[800],
  };

  return (
    <Tooltip title="Reset">
      <IconButton onClick={() => dispatch(resetSettings())} disabled={disabled}>
        <RotateLeft sx={styles} />
      </IconButton>
    </Tooltip>
  );
};

export default Reset;

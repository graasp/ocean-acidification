import { useContext } from 'react';

import { RotateLeft } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { orange } from '@mui/material/colors';

import { resetSettings } from '@/actions/app-settings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

const Reset = (): JSX.Element => {
  const { state, dispatch } = useContext(AppSettingsContext);
  const { animationInMotion } = state;

  const styles = {
    fontSize: '2em',
    color: animationInMotion ? '' : orange[800],
  };

  return (
    <Tooltip title="Reset">
      <IconButton
        onClick={() => dispatch(resetSettings())}
        disabled={animationInMotion}
      >
        <RotateLeft sx={styles} />
      </IconButton>
    </Tooltip>
  );
};

export default Reset;

import { useContext } from 'react';

import { RotateLeft } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { orange } from '@mui/material/colors';

import { resetSettings } from '@/actions/app-settings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

const buttonStyles = { fontSize: '2em', color: orange[800] };

const Reset = (): JSX.Element => {
  const { dispatch } = useContext(AppSettingsContext);
  return (
    <Tooltip title="Reset">
      <IconButton
        onClick={() => {
          dispatch(resetSettings());
        }}
      >
        <RotateLeft sx={buttonStyles} />
      </IconButton>
    </Tooltip>
  );
};

export default Reset;

import { Dispatch, SetStateAction, useContext } from 'react';

import { RotateLeft } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { orange } from '@mui/material/colors';

import { resetSettings } from '@/actions/app-settings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

interface Props {
  setCurrentLimitIndex: Dispatch<SetStateAction<number>>;
  inMotion: boolean;
}

const Reset = ({ setCurrentLimitIndex, inMotion }: Props): JSX.Element => {
  const { dispatch } = useContext(AppSettingsContext);

  const buttonStyles = { fontSize: '2em', color: inMotion ? '' : orange[800] };

  return (
    <Tooltip title="Reset">
      <IconButton
        onClick={() => {
          dispatch(resetSettings());
          setCurrentLimitIndex(0);
        }}
        disabled={inMotion}
      >
        <RotateLeft sx={buttonStyles} />
      </IconButton>
    </Tooltip>
  );
};

export default Reset;

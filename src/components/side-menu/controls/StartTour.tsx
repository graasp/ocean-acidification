import { useContext } from 'react';

import { Info } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

const styles = { fontSize: '0.9em' };

const StartTour = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { isPlaying } = state;

  const disabled = isPlaying;
  const color = disabled ? 'disabled' : 'primary';

  return (
    <Tooltip title="Start tour" placement="left">
      <IconButton disabled={disabled}>
        <Info color={color} sx={styles} />
      </IconButton>
    </Tooltip>
  );
};

export default StartTour;

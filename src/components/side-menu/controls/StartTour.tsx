import { useContext } from 'react';

import { Info } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

import { t } from 'i18next';

import { DISABLED, PRIMARY } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

const styles = { fontSize: '0.9em' };

interface Props {
  startTour: () => void;
}

const StartTour = ({ startTour }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { isPlaying } = state;

  const disabled = isPlaying;
  const color = disabled ? DISABLED : PRIMARY;

  return (
    <Tooltip title={t('Start tour')} placement="left">
      <span>
        <IconButton disabled={disabled} onClick={startTour}>
          <Info color={color} sx={styles} />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default StartTour;

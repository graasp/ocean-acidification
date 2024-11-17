import { useContext } from 'react';

import { Info } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

import { t } from 'i18next';

import { RESPONSIVE_SIDE_BUTTON_STYLES } from '@/constants/css';
import { DISABLED, PRIMARY } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

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
          <Info color={color} sx={{ ...RESPONSIVE_SIDE_BUTTON_STYLES }} />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default StartTour;

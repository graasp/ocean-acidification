import { Dispatch, SetStateAction, useContext } from 'react';

import { FastRewind } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { yellow } from '@mui/material/colors';

import { t } from 'i18next';

import {
  setAnimationIndex,
  setIntervalCountDirectly,
} from '@/actions/app-settings';
import { RESPONSIVE_BUTTON_STYLES } from '@/constants/css';
import { SEQUENTIAL_MODE_INTERVALS } from '@/constants/motion/sequential-mode-intervals';
import { EMPTY_STRING } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

interface Props {
  canRewind: boolean;
  setCanRewind: Dispatch<SetStateAction<boolean>>;
}

const Rewind = ({ canRewind, setCanRewind }: Props): JSX.Element => {
  const { state, dispatch } = useContext(AppSettingsContext);
  const { animationIndex, animationInMotion } = state;

  const disabled = animationIndex === 0 || animationInMotion || !canRewind;

  const styles = { color: disabled ? EMPTY_STRING : yellow[700] };

  const handleClick = (): void => {
    setCanRewind(false);
    const newIndex = animationIndex - 1;
    dispatch(setAnimationIndex(newIndex));
    dispatch(setIntervalCountDirectly(SEQUENTIAL_MODE_INTERVALS[newIndex]));
  };

  return (
    <Tooltip title={t('Rewind previous reaction')}>
      <span>
        <IconButton onClick={handleClick} disabled={disabled}>
          <FastRewind sx={{ ...styles, ...RESPONSIVE_BUTTON_STYLES }} />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default Rewind;

import { useContext } from 'react';

import { t } from 'i18next';

import { setMode } from '@/actions/app-settings';
import { CONTINUOUS, SEQUENTIAL } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import TwoSidedSwitch from './common/TwoSidedSwitch';

interface Props {
  modeSequential: boolean;
}

const ModeSwitch = ({ modeSequential }: Props): JSX.Element => {
  const { state, dispatch } = useContext(AppSettingsContext);
  const { animationInMotion, isPlaying, mode } = state;

  const disabled = animationInMotion || isPlaying;

  const handleToggle = (): void => {
    if (mode === SEQUENTIAL) dispatch(setMode(CONTINUOUS));
    else dispatch(setMode(SEQUENTIAL));
  };

  return (
    <TwoSidedSwitch
      leftLabel={t('Sequential')}
      rightLabel={t('Continuous')}
      isChecked={!modeSequential}
      setIsChecked={handleToggle}
      disabled={disabled}
    />
  );
};

export default ModeSwitch;

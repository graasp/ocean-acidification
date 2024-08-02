import { useContext } from 'react';

import { t } from 'i18next';

import { toggleMode } from '@/actions/app-settings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import TwoSidedSwitch from './common/TwoSidedSwitch';

interface Props {
  modeSequential: boolean;
}

const ModeSwitch = ({ modeSequential }: Props): JSX.Element => {
  const { state, dispatch } = useContext(AppSettingsContext);
  const { animationInMotion, isPlaying } = state;

  const disabled = animationInMotion || isPlaying;

  const handleToggle = (): void => {
    dispatch(toggleMode());
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

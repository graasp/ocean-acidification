import { useContext } from 'react';

import { toggleMode } from '@/actions/app-settings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import TwoSidedSwitch from './common/TwoSidedSwitch';

interface Props {
  modeSequential: boolean;
}

const ModeSwitch = ({ modeSequential }: Props): JSX.Element => {
  const { state, dispatch } = useContext(AppSettingsContext);
  const { animationInMotion } = state;

  const handleToggle = (): void => {
    dispatch(toggleMode());
  };

  return (
    <TwoSidedSwitch
      leftLabel="Sequential"
      rightLabel="Continuous"
      isChecked={!modeSequential}
      setIsChecked={handleToggle}
      disabled={animationInMotion}
    />
  );
};

export default ModeSwitch;

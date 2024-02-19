import { useContext } from 'react';

import { toggleShowShells } from '@/actions/app-settings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import CustomSwitch from '../common/CustomSwitch';

const ShellsToggle = (): JSX.Element => {
  const { state, dispatch } = useContext(AppSettingsContext);
  const { showShells } = state;

  return (
    <CustomSwitch
      label="Show shells"
      isChecked={showShells}
      setIsChecked={() => dispatch(toggleShowShells())}
    />
  );
};

export default ShellsToggle;

import { useContext } from 'react';

import { toggleShowScale } from '@/actions/app-settings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import CustomSwitch from '../common/CustomSwitch';

const ScaleToggle = (): JSX.Element => {
  const { state, dispatch } = useContext(AppSettingsContext);
  const { showScale } = state;

  return (
    <CustomSwitch
      label="Show pH scale and organisms"
      isChecked={showScale}
      setIsChecked={() => dispatch(toggleShowScale())}
    />
  );
};

export default ScaleToggle;

import { useContext } from 'react';

import { t } from 'i18next';

import { toggleShowScale } from '@/actions/app-settings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import CustomSwitch from '../common/CustomSwitch';

const ScaleToggle = (): JSX.Element => {
  const { state, dispatch } = useContext(AppSettingsContext);
  const { showScale } = state;

  return (
    <CustomSwitch
      label={t('Show pH scale and organisms')}
      isChecked={showScale}
      setIsChecked={() => dispatch(toggleShowScale())}
    />
  );
};

export default ScaleToggle;

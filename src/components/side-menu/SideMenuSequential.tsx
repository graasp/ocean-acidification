import { Dispatch, SetStateAction, useState } from 'react';

import { Drawer } from '@mui/material';

import { t } from 'i18next';

import Controls from './Controls';
import ModeSwitch from './ModeSwitch';
import CustomDivider from './common/CustomDivider';
import CustomSwitch from './common/CustomSwitch';
import AllEquations from './equations/AllEquations';

interface Props {
  setShowSideMenu: Dispatch<SetStateAction<boolean>>;
  modeSequential: boolean;
  showSideMenu: boolean;
}

const SideMenuSequential = ({
  setShowSideMenu,
  modeSequential,
  showSideMenu,
}: Props): JSX.Element | null => {
  const [equationsChecked, setEquationsChecked] = useState(false);

  return (
    <Drawer
      open={showSideMenu}
      anchor="right"
      variant="persistent"
      PaperProps={{ style: { width: '25vw' } }}
    >
      <Controls setShowSideMenu={setShowSideMenu} />
      <ModeSwitch modeSequential={modeSequential} />
      <CustomDivider />
      <CustomSwitch
        label={t('Chemical Equations')}
        isChecked={equationsChecked}
        setIsChecked={setEquationsChecked}
      />
      {equationsChecked && <AllEquations />}
    </Drawer>
  );
};

export default SideMenuSequential;

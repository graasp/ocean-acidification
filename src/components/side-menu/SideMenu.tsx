import { Dispatch, SetStateAction, useContext } from 'react';

import { Box, Drawer } from '@mui/material';

import { toggleMode } from '@/actions/app-settings';
import { SEQUENTIAL } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import Controls from './Controls';
import CustomDivider from './CustomDivider';
import SideMenuContinuous from './SideMenuContinuous';
import SideMenuSequential from './SideMenuSequential';
import TwoSidedSwitch from './TwoSidedSwitch';

interface Props {
  showSideMenu: boolean;
  setShowSideMenu: Dispatch<SetStateAction<boolean>>;
}

const containerStyles = { height: '100%', width: '100%' };

const SideMenu = ({ showSideMenu, setShowSideMenu }: Props): JSX.Element => {
  const { state, dispatch } = useContext(AppSettingsContext);
  const { mode } = state;
  const modeSequential = mode === SEQUENTIAL;

  return (
    <Drawer
      open={showSideMenu}
      anchor="right"
      variant="persistent"
      PaperProps={{ style: { width: '25vw' } }}
    >
      <Box sx={containerStyles}>
        <Controls setShowSideMenu={setShowSideMenu} />
        <TwoSidedSwitch
          leftLabel="Sequential"
          rightLabel="Continuous"
          isChecked={!modeSequential}
          setIsChecked={() => dispatch(toggleMode())}
        />
        <CustomDivider />
        {modeSequential ? <SideMenuSequential /> : <SideMenuContinuous />}
      </Box>
    </Drawer>
  );
};

export default SideMenu;

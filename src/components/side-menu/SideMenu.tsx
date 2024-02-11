import { Dispatch, SetStateAction, useContext } from 'react';

import { Box, Drawer } from '@mui/material';

import { SEQUENTIAL } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import Controls from './Controls';
import ModeSwitch from './ModeSwitch';
import SideMenuContinuous from './SideMenuContinuous';
import SideMenuSequential from './SideMenuSequential';
import CustomDivider from './common/CustomDivider';

interface Props {
  showSideMenu: boolean;
  setShowSideMenu: Dispatch<SetStateAction<boolean>>;
}

const containerStyles = { height: '100%', width: '100%' };

const SideMenu = ({ showSideMenu, setShowSideMenu }: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
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
        <ModeSwitch modeSequential={modeSequential} />
        <CustomDivider />
        {modeSequential ? <SideMenuSequential /> : <SideMenuContinuous />}
      </Box>
    </Drawer>
  );
};

export default SideMenu;

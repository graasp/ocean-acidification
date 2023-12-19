import { Dispatch, SetStateAction, useState } from 'react';

import { Box, Drawer } from '@mui/material';

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
  const [modeSequential, setModeSequential] = useState(true);

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
          setIsChecked={setModeSequential}
        />
        <CustomDivider />
        {modeSequential ? <SideMenuSequential /> : <SideMenuContinuous />}
      </Box>
    </Drawer>
  );
};

export default SideMenu;

import { Dispatch, SetStateAction } from 'react';

import { Drawer } from '@mui/material';

import Controls from './Controls';
import ModeSwitch from './ModeSwitch';
import CustomDivider from './common/CustomDivider';
import CarbonDioxideSlider from './continuous-mode/CarbonDioxideSlider';
import Period from './continuous-mode/Period';
import ScaleToggle from './continuous-mode/ScaleToggle';
import ArrowsStateManager from './molecule-count-table/ArrowsStateManager';

interface Props {
  setShowSideMenu: Dispatch<SetStateAction<boolean>>;
  modeSequential: boolean;
  showSideMenu: boolean;
}

const SideMenuContinuous = ({
  showSideMenu,
  setShowSideMenu,
  modeSequential,
}: Props): JSX.Element => (
  <Drawer
    open={showSideMenu}
    anchor="right"
    variant="persistent"
    PaperProps={{ style: { width: '25vw' } }}
  >
    <Controls setShowSideMenu={setShowSideMenu} />
    <ModeSwitch modeSequential={modeSequential} />
    <CustomDivider />
    <CarbonDioxideSlider />
    <CustomDivider />
    <Period />
    <CustomDivider />
    <ArrowsStateManager />
    <CustomDivider />
    <ScaleToggle />
  </Drawer>
);

export default SideMenuContinuous;

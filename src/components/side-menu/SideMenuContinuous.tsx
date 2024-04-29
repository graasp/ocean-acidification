import { Box } from '@mui/material';

import CustomDivider from './common/CustomDivider';
import CarbonDioxideSlider from './continuous-mode/CarbonDioxideSlider';
import Period from './continuous-mode/Period';
import ShellsToggle from './continuous-mode/ShellsToggle';
import ArrowsStateManager from './molecule-count-table/ArrowsStateManager';

const SideMenuContinuous = (): JSX.Element => (
  <Box>
    <CarbonDioxideSlider />
    <CustomDivider />
    <Period />
    <CustomDivider />
    <ArrowsStateManager />
    <CustomDivider />
    <ShellsToggle />
  </Box>
);

export default SideMenuContinuous;

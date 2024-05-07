import { Box } from '@mui/material';

import CustomDivider from './common/CustomDivider';
import CarbonDioxideSlider from './continuous-mode/CarbonDioxideSlider';
import Period from './continuous-mode/Period';
import ScaleToggle from './continuous-mode/ScaleToggle';
import ArrowsStateManager from './molecule-count-table/ArrowsStateManager';

const SideMenuContinuous = (): JSX.Element => (
  <Box>
    <CarbonDioxideSlider />
    <CustomDivider />
    <Period />
    <CustomDivider />
    <ArrowsStateManager />
    <CustomDivider />
    <ScaleToggle />
  </Box>
);

export default SideMenuContinuous;

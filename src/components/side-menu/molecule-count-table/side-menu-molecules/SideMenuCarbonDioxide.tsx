import { Box } from '@mui/material';

import SideMenuCarbon from './SideMenuCarbon';
import SideMenuOxygen from './SideMenuOxygen';

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const SideMenuCarbonDioxide = (): JSX.Element => (
  <Box sx={containerStyles}>
    <SideMenuOxygen />
    <SideMenuCarbon />
    <SideMenuOxygen />
  </Box>
);

export default SideMenuCarbonDioxide;

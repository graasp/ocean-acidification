import { Box } from '@mui/material';

import SideMenuCarbon from '../side-menu-molecules/SideMenuCarbon';
import SideMenuOxygen from '../side-menu-molecules/SideMenuOxygen';

const container = { display: 'flex', height: '12px', alignItems: 'center' };

export const co2Label = (
  <>
    CO<sub>2</sub>
  </>
);

const ModalCarbonDioxide = (): JSX.Element => (
  <Box sx={container}>
    <SideMenuOxygen />
    <SideMenuCarbon />
    <SideMenuOxygen />
  </Box>
);

export default ModalCarbonDioxide;

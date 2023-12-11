import { Box } from '@mui/material';

import SideMenuCarbon from './SideMenuCarbon';
import SideMenuHydrogen from './SideMenuHydrogen';
import SideMenuOxygen from './SideMenuOxygen';

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const bottomRowStyles = {
  display: 'flex',
};

const hydrogenOxygenGroupStyles = {
  display: 'flex',
  marginTop: '-1px',
};

const SideMenuCarbonicAcid = (): JSX.Element => (
  <Box sx={containerStyles}>
    <SideMenuOxygen />
    <SideMenuCarbon />
    <Box sx={bottomRowStyles}>
      <Box sx={hydrogenOxygenGroupStyles}>
        <SideMenuHydrogen />
        <SideMenuOxygen />
      </Box>
      <Box sx={hydrogenOxygenGroupStyles}>
        <SideMenuOxygen />
        <SideMenuHydrogen />
      </Box>
    </Box>
  </Box>
);

export default SideMenuCarbonicAcid;

import { Box } from '@mui/material';

import { SEA_FILL, SKY_GRADIENT_LIGHT_END } from '@/constants/canvas';

import SideMenuCarbon from './SideMenuCarbon';
import SideMenuOxygen from './SideMenuOxygen';

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  padding: '5% 0',
  borderRadius: '2.5px',
};

interface Props {
  isSky: boolean;
}

const SideMenuCarbonDioxide = ({ isSky }: Props): JSX.Element => (
  <Box
    sx={containerStyles}
    style={{ background: isSky ? SKY_GRADIENT_LIGHT_END : SEA_FILL }}
  >
    <SideMenuOxygen />
    <SideMenuCarbon />
    <SideMenuOxygen />
  </Box>
);

export default SideMenuCarbonDioxide;

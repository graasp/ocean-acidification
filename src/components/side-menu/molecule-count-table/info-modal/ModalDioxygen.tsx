import { Box } from '@mui/material';

import { OXYGEN_RADIUS } from '@/constants/side-menu';

import SideMenuOxygen from '../side-menu-molecules/SideMenuOxygen';
import Bond from './Bond';

const container = { display: 'flex', height: OXYGEN_RADIUS };

export const dioxygenLabel = (
  <>
    O<sub>2</sub>
  </>
);

const ModalDixoygen = (): JSX.Element => (
  <Box sx={container}>
    <SideMenuOxygen />
    <Bond numBonds={2} />
    <SideMenuOxygen addMarginLeft />
  </Box>
);

export default ModalDixoygen;

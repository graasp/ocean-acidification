import { Box } from '@mui/material';

import { NITROGEN_RADIUS } from '@/constants/side-menu';

import SideMenuNitrogen from '../side-menu-molecules/SideMenuNitrogen';
import Bond from './Bond';

const container = { display: 'flex', height: NITROGEN_RADIUS };

export const dinitrogenLabel = (
  <>
    N<sub>2</sub>
  </>
);

const ModalDinitrogen = (): JSX.Element => (
  <Box sx={container}>
    <SideMenuNitrogen />
    <Bond numBonds={3} />
    <SideMenuNitrogen addMarginLeft />
  </Box>
);

export default ModalDinitrogen;

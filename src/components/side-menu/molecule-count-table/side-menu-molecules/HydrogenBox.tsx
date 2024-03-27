import { Box } from '@mui/material';

import { SEA_FILL } from '@/constants/canvas';

import SideMenuHydrogen from './SideMenuHydrogen';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  background: SEA_FILL,
};

const HydrogenBox = (): JSX.Element => (
  <Box sx={styles}>
    <SideMenuHydrogen />
  </Box>
);

export default HydrogenBox;

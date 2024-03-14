import { Box } from '@mui/material';

import { SEA_FILL } from '@/constants/canvas';
import { DEFAULT_OPACITY, FADED_OPACITY } from '@/constants/side-menu';

import SideMenuHydrogen from './SideMenuHydrogen';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  background: SEA_FILL,
};

interface Props {
  faded: boolean;
}

const HydrogenBox = ({ faded }: Props): JSX.Element => (
  <Box sx={styles} style={{ opacity: faded ? FADED_OPACITY : DEFAULT_OPACITY }}>
    <SideMenuHydrogen />
  </Box>
);

export default HydrogenBox;

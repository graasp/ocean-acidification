import { Box } from '@mui/material';

import { SEA_FILL, SKY_GRADIENT_LIGHT_END } from '@/constants/canvas';
import {
  MOLECULE_CONTAINER_HEIGHT,
  MOLECULE_CONTAINER_PADDING,
} from '@/constants/side-menu';

import SideMenuCarbon from './SideMenuCarbon';
import SideMenuOxygen from './SideMenuOxygen';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: MOLECULE_CONTAINER_HEIGHT,
  paddingTop: MOLECULE_CONTAINER_PADDING,
  paddingBottom: MOLECULE_CONTAINER_PADDING,
};

interface Props {
  isSky: boolean;
}

const SideMenuCarbonDioxide = ({ isSky }: Props): JSX.Element => (
  <Box
    sx={styles}
    style={{ background: isSky ? SKY_GRADIENT_LIGHT_END : SEA_FILL }}
  >
    <SideMenuOxygen />
    <SideMenuCarbon />
    <SideMenuOxygen />
  </Box>
);

export default SideMenuCarbonDioxide;

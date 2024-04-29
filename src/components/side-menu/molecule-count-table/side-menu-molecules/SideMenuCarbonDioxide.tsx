import { Box } from '@mui/material';

import { SEA_FILL, SKY_GRADIENT_LIGHT_END } from '@/constants/canvas';
import {
  MOLECULE_CONTAINER_HEIGHT,
  MOLECULE_CONTAINER_PADDING,
  TABLE_ACTIVE_ANIMATION,
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
  isActive: boolean;
}

const SideMenuCarbonDioxide = ({ isSky, isActive }: Props): JSX.Element => {
  const blink = isActive ? TABLE_ACTIVE_ANIMATION : null;

  return (
    <Box
      sx={{ ...styles, ...blink }}
      style={{ background: isSky ? SKY_GRADIENT_LIGHT_END : SEA_FILL }}
    >
      <SideMenuOxygen />
      <SideMenuCarbon />
      <SideMenuOxygen />
    </Box>
  );
};

export default SideMenuCarbonDioxide;

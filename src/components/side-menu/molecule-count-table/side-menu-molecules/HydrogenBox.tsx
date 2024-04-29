import { Box } from '@mui/material';

import { SEA_FILL } from '@/constants/canvas';
import { TABLE_ACTIVE_ANIMATION } from '@/constants/side-menu';

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
  isActive: boolean;
}

const HydrogenBox = ({ isActive }: Props): JSX.Element => {
  const blink = isActive ? TABLE_ACTIVE_ANIMATION : null;

  return (
    <Box sx={{ ...styles, ...blink }}>
      <SideMenuHydrogen />
    </Box>
  );
};

export default HydrogenBox;

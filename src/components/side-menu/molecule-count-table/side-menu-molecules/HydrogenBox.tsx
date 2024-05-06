import { useContext } from 'react';

import { Box } from '@mui/material';

import { SEA_FILL } from '@/constants/canvas';
import {
  HYDROGEN_BOX_BORDER,
  TABLE_ACTIVE_ANIMATION,
} from '@/constants/side-menu';
import { EMPTY_STRING } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

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
  const { state } = useContext(AppSettingsContext);
  const { showScale } = state;

  const border = showScale ? HYDROGEN_BOX_BORDER : EMPTY_STRING;

  const blink = isActive ? TABLE_ACTIVE_ANIMATION : null;

  return (
    <Box sx={{ ...styles, ...blink, border }}>
      <SideMenuHydrogen />
    </Box>
  );
};

export default HydrogenBox;

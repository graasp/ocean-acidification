import { Box } from '@mui/material';

import { SEA_FILL } from '@/constants/canvas';
import {
  MOLECULE_CONTAINER_HEIGHT,
  MOLECULE_CONTAINER_PADDING,
  TABLE_ACTIVE_ANIMATION,
} from '@/constants/side-menu';

import SideMenuCarbon from './SideMenuCarbon';
import SideMenuHydrogen from './SideMenuHydrogen';
import SideMenuOxygen from './SideMenuOxygen';

const container = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  background: SEA_FILL,
  height: MOLECULE_CONTAINER_HEIGHT,
  paddingTop: MOLECULE_CONTAINER_PADDING,
  paddingBottom: MOLECULE_CONTAINER_PADDING,
};

const leftMolecules = {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginTop: '5px',
  marginLeft: '6px',
};

const firstHydrogen = {
  marginTop: '-5px',
};

const centerContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const oxygenHydrogen = {
  display: 'flex',
  marginRight: '5px',
};

const secondHydrogen = {
  marginTop: '-2.5px',
};

const bottomOxygen = {
  marginRight: '-15px',
  marginTop: '-3px',
};

const defaultProps = {
  isBicarbonate: false,
};

interface Props {
  isBicarbonate?: boolean;
  isActive?: boolean;
}

const SideMenuCarbonicAcid = ({
  isBicarbonate,
  isActive,
}: Props): JSX.Element => {
  const blink = isActive ? TABLE_ACTIVE_ANIMATION : null;

  return (
    <Box sx={{ ...container, ...blink }}>
      <Box>
        <Box sx={leftMolecules}>
          <Box sx={firstHydrogen}>
            <SideMenuHydrogen isBicarbonate={isBicarbonate} />
          </Box>

          <SideMenuOxygen />
        </Box>
      </Box>
      <Box sx={centerContainerStyles}>
        <Box sx={oxygenHydrogen}>
          <Box sx={secondHydrogen}>
            <SideMenuHydrogen />
          </Box>
          <SideMenuOxygen />
        </Box>
        <SideMenuCarbon />
        <Box sx={bottomOxygen}>
          <SideMenuOxygen />
        </Box>
      </Box>
    </Box>
  );
};

SideMenuCarbonicAcid.defaultProps = defaultProps;

export default SideMenuCarbonicAcid;

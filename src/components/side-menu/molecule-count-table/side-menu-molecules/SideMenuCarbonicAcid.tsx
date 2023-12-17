import { Box } from '@mui/material';

import { SEA_FILL } from '@/constants/canvas';

import SideMenuCarbon from './SideMenuCarbon';
import SideMenuHydrogen from './SideMenuHydrogen';
import SideMenuOxygen from './SideMenuOxygen';

const containerStyles = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  background: SEA_FILL,
  paddingTop: '10%',
  paddingBottom: '5%',
  borderRadius: '2.5px',
};

const leftMoleculesStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginTop: '5px',
  marginLeft: '6px',
};

const firstHydrogenStyles = {
  marginTop: '-5px',
};

const centerContainerStyls = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const oxygenHydrogenStyles = {
  display: 'flex',
  marginRight: '5px',
};

const secondHydrogenStyles = {
  marginTop: '-2.5px',
};

const bottomOxygenStyles = {
  marginRight: '-15px',
  marginTop: '-3px',
};

const SideMenuCarbonicAcid = (): JSX.Element => (
  <Box sx={containerStyles}>
    <Box>
      <Box sx={leftMoleculesStyles}>
        <Box sx={firstHydrogenStyles}>
          <SideMenuHydrogen />
        </Box>
        <SideMenuOxygen />
      </Box>
    </Box>
    <Box sx={centerContainerStyls}>
      <Box sx={oxygenHydrogenStyles}>
        <Box sx={secondHydrogenStyles}>
          <SideMenuHydrogen />
        </Box>
        <SideMenuOxygen />
      </Box>
      <SideMenuCarbon />
      <Box sx={bottomOxygenStyles}>
        <SideMenuOxygen />
      </Box>
    </Box>
  </Box>
);

export default SideMenuCarbonicAcid;

import { Box } from '@mui/material';

import { SEA_FILL } from '@/constants/canvas';
import { DEFAULT_OPACITY, FADED_OPACITY } from '@/constants/side-menu';

import SideMenuCarbon from './SideMenuCarbon';
import SideMenuHydrogen from './SideMenuHydrogen';
import SideMenuOxygen from './SideMenuOxygen';

const container = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  background: SEA_FILL,
  paddingTop: '10%',
  paddingBottom: '5%',
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

const centerContainerStyls = {
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
  faded: boolean;
}

const SideMenuCarbonicAcid = ({ isBicarbonate, faded }: Props): JSX.Element => (
  <Box
    sx={container}
    style={{ opacity: faded ? FADED_OPACITY : DEFAULT_OPACITY }}
  >
    <Box>
      <Box sx={leftMolecules}>
        <Box sx={firstHydrogen}>
          <SideMenuHydrogen isBicarbonate={isBicarbonate} />
        </Box>

        <SideMenuOxygen />
      </Box>
    </Box>
    <Box sx={centerContainerStyls}>
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

SideMenuCarbonicAcid.defaultProps = defaultProps;

export default SideMenuCarbonicAcid;

import { Box } from '@mui/material';

import { SEA_FILL } from '@/constants/canvas';

import Heading from './Heading';
import {
  bicarbonateLabel,
  carbonDioxideGasLabel,
  carbonDioxideWaterLabel,
  carbonicAcidLabel,
  hydrogenLabel,
} from './MoleculeLabels';
import Row from './Row';
import SideMenuCarbonDioxide from './side-menu-molecules/SideMenuCarbonDioxide';
import SideMenuCarbonicAcid from './side-menu-molecules/SideMenuCarbonicAcid';
import SideMenuHydrogen from './side-menu-molecules/SideMenuHydrogen';

const container = {
  width: '90%',
  margin: '0 auto',
  marginTop: '1em',
};

const hydrogenBox = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  background: SEA_FILL,
  padding: '5% 0',
  borderRadius: '2.5px',
};

const MoleculeCountTable = (): JSX.Element => (
  <Box sx={container}>
    <Heading labelLeft="Molecule or Ion" labelRight="Count" />
    <Row
      label={carbonDioxideGasLabel}
      molecule={<SideMenuCarbonDioxide isSky />}
      count={10}
    />
    <Row
      label={carbonDioxideWaterLabel}
      molecule={<SideMenuCarbonDioxide isSky={false} />}
      count={10}
    />
    <Row
      label={carbonicAcidLabel}
      molecule={<SideMenuCarbonicAcid />}
      count={20}
    />
    <Row
      label={bicarbonateLabel}
      molecule={<SideMenuCarbonicAcid isBicarbonate />}
      count={20}
    />
    <Row
      label={hydrogenLabel}
      molecule={
        <Box sx={hydrogenBox}>
          <SideMenuHydrogen />
        </Box>
      }
      count={1}
    />
  </Box>
);

export default MoleculeCountTable;

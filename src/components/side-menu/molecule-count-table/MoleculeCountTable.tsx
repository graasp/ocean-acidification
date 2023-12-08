import { Box } from '@mui/material';

import Heading from './Heading';
import {
  carbonDioxideLabel,
  carbonicAcidLabel,
  hydrogenLabel,
} from './MoleculeLabels';
import Row from './Row';
import SideMenuCarbonDioxide from './side-menu-molecules/SideMenuCarbonDioxide';
import SideMenuCarbonicAcid from './side-menu-molecules/SideMenuCarbonicAcid';
import SideMenuHydrogen from './side-menu-molecules/SideMenuHydrogen';

const containerStyles = {
  width: '90%',
  margin: '0 auto',
  marginTop: '1em',
};

const MoleculeCountTable = (): JSX.Element => (
  <Box sx={containerStyles}>
    <Heading labelLeft="Molecule or Ion" labelRight="Count" />
    <Row
      label={carbonDioxideLabel}
      molecule={<SideMenuCarbonDioxide />}
      count={10}
    />
    <Row
      label={carbonicAcidLabel}
      molecule={<SideMenuCarbonicAcid />}
      count={20}
    />
    <Row label={hydrogenLabel} molecule={<SideMenuHydrogen />} count={1} />
  </Box>
);

export default MoleculeCountTable;

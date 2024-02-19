import { Box } from '@mui/material';

import CustomDivider from './common/CustomDivider';
import CarbonDioxideSlider from './continuous-mode/CarbonDioxideSlider';
import Period from './continuous-mode/Period';
import ShellsToggle from './continuous-mode/ShellsToggle';
import MoleculeCountTable from './molecule-count-table/MoleculeCountTable';

const SideMenuContinuous = (): JSX.Element => (
  <Box>
    <CarbonDioxideSlider />
    <CustomDivider />
    <Period />
    <CustomDivider />
    <MoleculeCountTable />
    <CustomDivider />
    <ShellsToggle />
  </Box>
);

export default SideMenuContinuous;

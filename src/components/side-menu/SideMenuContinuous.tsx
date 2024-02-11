import { useState } from 'react';

import { Box, Typography } from '@mui/material';

import CustomDivider from './common/CustomDivider';
import CustomSwitch from './common/CustomSwitch';
import CarbonDioxideSlider from './continuous-mode/CarbonDioxideSlider';
import Period from './continuous-mode/Period';
import MoleculeCountTable from './molecule-count-table/MoleculeCountTable';

const SideMenuContinuous = (): JSX.Element => {
  const [showShells, setShowShells] = useState(false);

  return (
    <Box>
      <Typography />
      <CarbonDioxideSlider />
      <CustomDivider />
      <Period />
      <CustomDivider />
      <MoleculeCountTable />
      <CustomDivider />
      <CustomSwitch
        label="Show shells"
        isChecked={showShells}
        setIsChecked={setShowShells}
      />
    </Box>
  );
};

export default SideMenuContinuous;

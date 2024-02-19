import { useState } from 'react';

import { Box } from '@mui/material';

import CustomSwitch from './common/CustomSwitch';
import AllEquations from './equations/AllEquations';

const SideMenuSequential = (): JSX.Element => {
  const [equationsChecked, setEquationsChecked] = useState(false);

  return (
    <Box>
      <CustomSwitch
        label="Show Equations"
        isChecked={equationsChecked}
        setIsChecked={setEquationsChecked}
      />
      {equationsChecked && <AllEquations />}
    </Box>
  );
};

export default SideMenuSequential;

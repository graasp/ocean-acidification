import { useState } from 'react';

import { Box, Switch, Typography } from '@mui/material';

const containerStyles = {
  width: '90%',
  margin: '0 auto',
  marginTop: '1em',
  marginBottom: '2em',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};
const centerContainerStyles = {
  width: '30%',
  display: 'flex',
  justifyContent: 'center',
};
const leftLabelStyles = { width: '35%' };
const rightLabelStyles = {
  width: '35%',
  display: 'flex',
  justifyContent: 'flex-end',
};

const UnitsSwitch = (): JSX.Element => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <Box sx={containerStyles}>
      <Typography variant="body2" sx={leftLabelStyles}>
        pH
      </Typography>
      <Box sx={centerContainerStyles}>
        <Switch checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
      </Box>
      <Typography variant="body2" sx={rightLabelStyles}>
        Concentration
      </Typography>
    </Box>
  );
};

export default UnitsSwitch;

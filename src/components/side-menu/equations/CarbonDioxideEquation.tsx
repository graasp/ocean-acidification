import { Box, Typography } from '@mui/material';

import Arrows from './Arrows';

const containerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '50%',
  margin: '1em auto',
};

const CarbonDioxideEquation = (): JSX.Element => (
  <Box sx={containerStyles}>
    <Typography variant="body2">
      CO<sub>2(g)</sub>
    </Typography>
    <Arrows />
    <Typography variant="body2">
      CO<sub>2(aq)</sub>
    </Typography>
  </Box>
);

export default CarbonDioxideEquation;

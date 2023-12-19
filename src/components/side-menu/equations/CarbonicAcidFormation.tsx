import { Box, Typography } from '@mui/material';

import Arrows from './Arrows';

const containerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '80%',
  margin: '1em auto',
};

const CarbonicAcidFormation = (): JSX.Element => (
  <Box sx={containerStyles}>
    <Typography variant="body2">
      H<sub>2</sub>O<sub>(aq)</sub>
    </Typography>
    <Typography variant="body2">+</Typography>
    <Typography variant="body2">
      CO<sub>2(aq)</sub>
    </Typography>
    <Arrows />
    <Typography variant="body2">
      H<sub>2</sub>CO<sub>3(aq)</sub>
    </Typography>
  </Box>
);

export default CarbonicAcidFormation;

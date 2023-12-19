import { Box, Typography } from '@mui/material';

import Arrows from './Arrows';

const containerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '80%',
  margin: '1em auto',
};

const CarbonicAcidDissociation = (): JSX.Element => (
  <Box sx={containerStyles}>
    <Typography variant="body2">
      H<sub>2</sub>CO<sub>3(aq)</sub>
    </Typography>
    <Arrows />
    <Typography variant="body2">
      H<sup>+</sup>
      <sub>(aq)</sub>
    </Typography>
    <Typography variant="body2">+</Typography>
    <Typography variant="body2">
      HCO<sub>3</sub>
      <sup>-</sup>
      <sub>(aq)</sub>
    </Typography>
  </Box>
);

export default CarbonicAcidDissociation;

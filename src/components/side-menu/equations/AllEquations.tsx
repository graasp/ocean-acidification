import { Box } from '@mui/material';

import CarbonDioxideEquation from './CarbonDioxideEquation';
import CarbonicAcidDissociation from './CarbonicAcidDissociation';
import CarbonicAcidFormation from './CarbonicAcidFormation';

const AllEquations = (): JSX.Element => (
  <Box>
    <CarbonDioxideEquation />
    <CarbonicAcidFormation />
    <CarbonicAcidDissociation />
  </Box>
);

export default AllEquations;

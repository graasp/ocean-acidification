import { Box, Typography } from '@mui/material';

import ModalCarbonDioxide, { co2Label } from './ModalCarbonDioxide';
import ModalDinitrogen, { dinitrogenLabel } from './ModalDinitrogen';
import ModalDioxygen, { dioxygenLabel } from './ModalDioxygen';
import Row from './ModalRow';

const container = { width: '100%' };

const AirGasesInfo = (): JSX.Element => (
  <Box sx={container}>
    <Typography variant="caption">The air contains:</Typography>
    <Row molecule={<ModalDinitrogen />} label={dinitrogenLabel} percent="78%" />
    <Row molecule={<ModalDioxygen />} label={dioxygenLabel} percent="21%" />
    <Box>...</Box>
    <Row molecule={<ModalCarbonDioxide />} label={co2Label} percent="0.4%" />
    <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
      Only CO<sub>2</sub> is shown in the simulation.
    </Typography>
  </Box>
);

export default AirGasesInfo;

import { Info } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

const buttonStyles = { fontSize: '0.9em' };

const StartTour = (): JSX.Element => (
  <Tooltip title="Start tour" placement="left">
    <IconButton>
      <Info color="primary" sx={buttonStyles} />
    </IconButton>
  </Tooltip>
);

export default StartTour;

import { RotateLeft } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { orange } from '@mui/material/colors';

const buttonStyles = { fontSize: '2em', color: orange[800] };

const Reset = (): JSX.Element => (
  <Tooltip title="Reset">
    <IconButton>
      <RotateLeft sx={buttonStyles} />
    </IconButton>
  </Tooltip>
);

export default Reset;

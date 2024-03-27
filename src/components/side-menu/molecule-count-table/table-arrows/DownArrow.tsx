import { Typography } from '@mui/material';

const styles = { userSelect: 'none' };

const DownArrow = (): JSX.Element => (
  <Typography variant="body1" sx={styles}>
    ⬇
  </Typography>
);

export default DownArrow;

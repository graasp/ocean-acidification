import { Box, Typography } from '@mui/material';

interface Props {
  labelLeft: string;
  labelRight: string;
}

const styles = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
};

const Heading = ({ labelLeft, labelRight }: Props): JSX.Element => (
  <Box sx={styles}>
    <Typography variant="body2" fontWeight={600}>
      {labelLeft}
    </Typography>
    <Typography variant="body2" fontWeight={600}>
      {labelRight}
    </Typography>
  </Box>
);

export default Heading;

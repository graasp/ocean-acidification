import { Box, Typography } from '@mui/material';

interface Props {
  labelLeft: string;
  labelRight: string;
}

const containerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
};

const Heading = ({ labelLeft, labelRight }: Props): JSX.Element => (
  <Box sx={containerStyles}>
    <Typography variant="body2" fontWeight={600}>
      {labelLeft}
    </Typography>
    <Typography variant="body2" fontWeight={600}>
      {labelRight}
    </Typography>
  </Box>
);

export default Heading;

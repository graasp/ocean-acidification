import { Box, Typography } from '@mui/material';

interface Props {
  label: JSX.Element;
  molecule: JSX.Element;
  count: number;
}

const rowStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: '1em',
  alignItems: 'center',
};
const leftLabelStyles = { width: '30%' };
const centerItemStyles = {
  width: '50%',
  display: 'flex',
  justifyContent: 'center',
};
const rightLabelStyles = { width: '20%', textAlign: 'right' };

const Row = ({ label, molecule, count }: Props): JSX.Element => (
  <Box sx={rowStyles}>
    <Typography variant="body2" sx={leftLabelStyles}>
      {label}
    </Typography>
    <Typography sx={centerItemStyles}>{molecule}</Typography>
    <Typography variant="body2" sx={rightLabelStyles}>
      {count}
    </Typography>
  </Box>
);

export default Row;

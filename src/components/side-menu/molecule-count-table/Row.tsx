import { Box, Typography } from '@mui/material';

interface Props {
  label: JSX.Element;
  molecule: JSX.Element;
  count: number;
}

const row = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: '1em',
  alignItems: 'center',
};
const leftLabel = { width: '30%' };
const centerItem = {
  width: '20%',
  display: 'flex',
  justifyContent: 'center',
};
const rightLabel = { width: '20%', textAlign: 'right' };

const Row = ({ label, molecule, count }: Props): JSX.Element => (
  <Box sx={row}>
    <Typography variant="body2" sx={leftLabel}>
      {label}
    </Typography>
    <Typography sx={centerItem}>{molecule}</Typography>
    <Typography variant="body2" sx={rightLabel}>
      {count}
    </Typography>
  </Box>
);

export default Row;

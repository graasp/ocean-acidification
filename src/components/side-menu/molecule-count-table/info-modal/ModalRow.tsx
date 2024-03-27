import { Box, Typography } from '@mui/material';

interface Props {
  molecule: JSX.Element;
  label: JSX.Element;
  percent: string;
}

const styles = {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const ModalRow = ({ molecule, label, percent }: Props): JSX.Element => (
  <Box sx={styles}>
    <Box>{molecule}</Box>
    <Typography variant="caption">{label}</Typography>
    <Typography variant="caption">{percent}</Typography>
  </Box>
);

export default ModalRow;

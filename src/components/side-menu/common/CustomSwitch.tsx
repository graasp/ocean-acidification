import { Dispatch, SetStateAction } from 'react';

import { Box, Switch, Typography } from '@mui/material';

interface Props {
  label: string;
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}

const styles = {
  display: 'flex',
  width: '90%',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '0 auto',
  marginTop: '1em',
};

const CustomSwitch = ({
  label,
  isChecked,
  setIsChecked,
}: Props): JSX.Element => (
  <Box sx={styles} className="continuous-mode-7">
    <Typography variant="body2">{label}</Typography>
    <Switch checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
  </Box>
);

export default CustomSwitch;

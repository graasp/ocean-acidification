import { Dispatch, SetStateAction, useContext } from 'react';

import { Box, Switch, Typography } from '@mui/material';

import { RESPONSIVE_HEADING_STYLES } from '@/constants/css';
import { SEQUENTIAL } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

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
}: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { mode } = state;
  const isSequential = mode === SEQUENTIAL;

  const quickTourClass = isSequential
    ? 'sequential-mode-3'
    : 'continuous-mode-7';

  return (
    <Box sx={styles} className={quickTourClass}>
      <Typography variant="body2" sx={{ ...RESPONSIVE_HEADING_STYLES }}>
        {label}
      </Typography>
      <Switch checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
    </Box>
  );
};

export default CustomSwitch;

import { Dispatch, SetStateAction, useContext } from 'react';

import { Box, Switch, Typography } from '@mui/material';

import { RESPONSIVE_HEADING_STYLES } from '@/constants/css';
import { SEQUENTIAL } from '@/constants/strings';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

const container = {
  width: '90%',
  margin: '0 auto',
  marginTop: '0.5em',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};
const centerContainer = {
  width: '30%',
  display: 'flex',
  justifyContent: 'center',
};
const leftLabelStyles = { width: '35%' };
const rightLabelStyles = {
  width: '35%',
  display: 'flex',
  justifyContent: 'flex-end',
};

interface Props {
  leftLabel: string;
  rightLabel: string;
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
  disabled: boolean;
}

const TwoSidedSwitch = ({
  leftLabel,
  rightLabel,
  isChecked,
  setIsChecked,
  disabled,
}: Props): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { mode } = state;
  const isSequential = mode === SEQUENTIAL;

  const quickTourClass = isSequential
    ? 'sequential-mode-4'
    : 'continuous-mode-1';

  return (
    <Box sx={container}>
      <Typography
        variant="body2"
        sx={{ ...leftLabelStyles, ...RESPONSIVE_HEADING_STYLES }}
        className="sequential-mode-1"
      >
        {leftLabel}
      </Typography>
      <Box sx={centerContainer}>
        <Switch
          checked={isChecked}
          onChange={() => setIsChecked(isChecked)}
          disabled={disabled}
          color={disabled ? 'default' : 'primary'}
        />
      </Box>
      <Typography
        variant="body2"
        sx={{ ...rightLabelStyles, ...RESPONSIVE_HEADING_STYLES }}
        className={quickTourClass}
      >
        {rightLabel}
      </Typography>
    </Box>
  );
};

export default TwoSidedSwitch;

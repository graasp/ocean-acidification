import { Dispatch, SetStateAction } from 'react';

import { Box, Switch, Typography } from '@mui/material';

const container = {
  width: '90%',
  margin: '0 auto',
  marginTop: '1em',
  marginBottom: '2em',
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
}: Props): JSX.Element => (
  <Box sx={container}>
    <Typography variant="body2" sx={leftLabelStyles}>
      {leftLabel}
    </Typography>
    <Box sx={centerContainer}>
      <Switch
        checked={isChecked}
        onChange={() => setIsChecked(isChecked)}
        disabled={disabled}
      />
    </Box>
    <Typography variant="body2" sx={rightLabelStyles}>
      {rightLabel}
    </Typography>
  </Box>
);

export default TwoSidedSwitch;

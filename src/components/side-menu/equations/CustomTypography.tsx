import { ReactNode } from 'react';

import { Typography } from '@mui/material';

import {
  ACTIVE_EQUATION_COLOR,
  ACTIVE_EQUATION_WEIGHT,
  DEFAULT_EQUATION_COLOR,
  DEFAULT_EQUATION_WEIGHT,
  INACTIVE_EQUATION_COLOR,
} from '@/constants/side-menu';

interface Props {
  isActive: boolean;
  isInactive: boolean;
  children: string | ReactNode;
}

const CustomTypography = ({
  isActive,
  isInactive,
  children,
}: Props): JSX.Element => {
  let color = DEFAULT_EQUATION_COLOR;
  if (isActive) {
    color = ACTIVE_EQUATION_COLOR;
  } else if (isInactive) {
    color = INACTIVE_EQUATION_COLOR;
  }

  const styles = {
    color,
    fontWeight: isActive ? ACTIVE_EQUATION_WEIGHT : DEFAULT_EQUATION_WEIGHT,
  };

  return (
    <Typography variant="body2" sx={styles}>
      {children}
    </Typography>
  );
};

export default CustomTypography;

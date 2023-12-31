import { ReactNode } from 'react';

import { Typography } from '@mui/material';

import {
  ACTIVE_EQUATION_COLOR,
  ACTIVE_EQUATION_WEIGHT,
  INACTIVE_EQUATION_COLOR,
  INACTIVE_EQUATION_WEIGHT,
} from '@/constants/side-menu';

interface Props {
  isActive: boolean;
  children: string | ReactNode;
}

const CustomTypography = ({ isActive, children }: Props): JSX.Element => {
  const typographyStyles = {
    color: isActive ? ACTIVE_EQUATION_COLOR : INACTIVE_EQUATION_COLOR,
    fontWeight: isActive ? ACTIVE_EQUATION_WEIGHT : INACTIVE_EQUATION_WEIGHT,
  };

  return (
    <Typography variant="body2" sx={typographyStyles}>
      {children}
    </Typography>
  );
};

export default CustomTypography;

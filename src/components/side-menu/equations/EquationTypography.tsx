import { Typography } from '@mui/material';

import { RESPONSIVE_FONT_STYLES } from '@/constants/css';
import {
  ACTIVE_EQUATION_COLOR,
  DEFAULT_EQUATION_COLOR,
  INACTIVE_EQUATION_COLOR,
} from '@/constants/side-menu';

interface Props {
  molecule?: React.ReactNode;
  additionalText?: string;
  isActive: boolean;
  isInactive: boolean;
}

const EquationTypography = ({
  molecule,
  additionalText,
  isActive,
  isInactive,
}: Props): JSX.Element => {
  let color = DEFAULT_EQUATION_COLOR;
  if (isActive) {
    color = ACTIVE_EQUATION_COLOR;
  } else if (isInactive) {
    color = INACTIVE_EQUATION_COLOR;
  }

  const styles = { color };

  return (
    <Typography variant="body2" sx={{ ...styles, ...RESPONSIVE_FONT_STYLES }}>
      <strong>{molecule}</strong> {additionalText}
    </Typography>
  );
};

export default EquationTypography;

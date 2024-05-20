import { Box, Typography } from '@mui/material';

import EquilibriumScale from '../molecule-count-table/EquilibriumScale';
import CustomHelpIcon from '../molecule-count-table/info-modal/HelpIcon';

const container = {
  width: '90%',
  margin: '10px auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const extraInfo = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

interface Props {
  label: string | JSX.Element;
  isCustomHeader?: boolean;
}

const SideMenuHeader = ({ label, isCustomHeader }: Props): JSX.Element => (
  <Box sx={container}>
    <Typography variant="body2" fontWeight={600}>
      {label}
    </Typography>
    {isCustomHeader && (
      <Box sx={extraInfo}>
        <EquilibriumScale />
        <CustomHelpIcon />
      </Box>
    )}
  </Box>
);

SideMenuHeader.defaultProps = { isCustomHeader: false };

export default SideMenuHeader;

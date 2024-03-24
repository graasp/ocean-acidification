import { Box, Typography } from '@mui/material';

import CustomHelpIcon from '../molecule-count-table/info-modal/HelpIcon';

const styles = {
  width: '90%',
  margin: '10px auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

interface Props {
  label: string | JSX.Element;
  showHelpIcon?: boolean;
}

const SideMenuHeader = ({ label, showHelpIcon }: Props): JSX.Element => (
  <Box sx={styles}>
    <Typography variant="body2" fontWeight={600}>
      {label}
    </Typography>
    {showHelpIcon && <CustomHelpIcon />}
  </Box>
);

SideMenuHeader.defaultProps = { showHelpIcon: false };

export default SideMenuHeader;

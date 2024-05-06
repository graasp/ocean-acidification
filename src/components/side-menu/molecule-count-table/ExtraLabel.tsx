import { Box } from '@mui/material';

import { TABLE_EXTRA_LABEL_COLOR } from '@/constants/side-menu';

const styles = {
  width: '42.5%',
  float: 'right',
  fontSize: '12.5px',
  fontWeight: 600,
  color: TABLE_EXTRA_LABEL_COLOR,
};

const ExtraLabel = (): JSX.Element => <Box sx={styles}>pH</Box>;

export default ExtraLabel;

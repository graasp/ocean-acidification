import { Box } from '@mui/material';

import { OXYGEN_RADIUS } from '@/constants/side-menu';

const styles = {
  display: 'flex',
  alignItems: 'center',
  marginLeft: '-2px',
  fontSize: '10px',
  height: OXYGEN_RADIUS,
};

interface Props {
  numBonds: number;
}

const Bond = ({ numBonds }: Props): JSX.Element => (
  <Box sx={styles}>{numBonds === 2 ? '=' : '≡'}</Box>
);

export default Bond;

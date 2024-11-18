import { Box, Typography } from '@mui/material';

import { RESPONSIVE_CAPTION_STYLES } from '@/constants/css';
import { TABLE_ACTIVE_ANIMATION } from '@/constants/side-menu';

interface Props {
  src: string;
  isActive: boolean;
  count: number;
}

const rowContainer = { display: 'flex', justifyContent: 'center' };
const cell = {
  width: '25%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid grey',
};
const img = { width: '100%' };

const Row = ({ src, isActive, count }: Props): JSX.Element => {
  const blink = isActive ? TABLE_ACTIVE_ANIMATION : null;

  return (
    <Box sx={rowContainer}>
      <Box sx={{ ...cell, ...blink }}>
        <img alt={src} src={src} style={img} />
      </Box>
      <Box sx={cell}>
        <Typography sx={{ ...RESPONSIVE_CAPTION_STYLES }}>{count}</Typography>
      </Box>
    </Box>
  );
};

export default Row;

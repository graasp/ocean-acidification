import { Box } from '@mui/material';

const containerStyles = {
  display: 'flex',
  alignItems: 'center',
  width: 'max-content',
};

const horizontalLine = {
  height: '2px',
  background: 'black',
  width: 20,
};

const rightArrow = {
  width: 0,
  height: 0,
  borderTop: '4px solid transparent',
  borderBottom: '4px solid transparent',
  borderLeft: '4px solid black',
};

const RightArrow = (): JSX.Element => (
  <Box sx={containerStyles}>
    <Box sx={horizontalLine} />
    <Box sx={rightArrow} />
  </Box>
);

export default RightArrow;

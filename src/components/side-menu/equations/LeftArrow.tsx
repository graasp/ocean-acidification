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

const leftArrow = {
  width: 0,
  height: 0,
  borderTop: '4px solid transparent',
  borderBottom: '4px solid transparent',
  borderRight: '4px solid black',
};

const LeftArrow = (): JSX.Element => (
  <Box sx={containerStyles}>
    <Box sx={leftArrow} />
    <Box sx={horizontalLine} />
  </Box>
);

export default LeftArrow;

import { Box, Slider, Typography } from '@mui/material';

import {
  CARBON_DIOXIDE_MARKS,
  CARBON_DIOXIDE_MAX,
  CARBON_DIOXIDE_MIN,
} from '@/constants/side-menu';

const containerStyles = {
  width: '90%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
};

const sliderStyles = {
  width: '60%',
  marginRight: '0.25em',
  height: '0.125em',
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: '1em',
    width: '1em',
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: '0.8em',
    padding: 0,
    width: 30,
    height: 30,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#5050d2',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
  '& .MuiSlider-markLabel': {
    fontSize: '0.8em',
  },
};

const CarbonDioxideSlider = (): JSX.Element => (
  <Box sx={containerStyles}>
    <Typography variant="body2">
      CO<sub>2</sub> (ppm)
    </Typography>
    <Slider
      min={CARBON_DIOXIDE_MIN}
      max={CARBON_DIOXIDE_MAX}
      marks={CARBON_DIOXIDE_MARKS}
      sx={sliderStyles}
      valueLabelDisplay="auto"
    />
  </Box>
);

export default CarbonDioxideSlider;

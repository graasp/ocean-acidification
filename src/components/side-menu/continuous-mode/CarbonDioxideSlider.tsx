import { Box } from '@mui/material';

import {
  CARBON_DIOXIDE_MARKS,
  CARBON_DIOXIDE_MAX,
  CARBON_DIOXIDE_MIN,
} from '@/constants/side-menu';

import CustomSlider from '../common/CustomSlider';
import SideMenuHeader from '../common/SideMenuHeader';

const container = {
  width: '90%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
};

const CarbonDioxideSlider = (): JSX.Element => {
  const label = (
    <>
      CO<sub>2</sub> (ppm)
    </>
  );

  return (
    <Box>
      <SideMenuHeader label={label} />
      <Box sx={container}>
        <CustomSlider
          min={CARBON_DIOXIDE_MIN}
          max={CARBON_DIOXIDE_MAX}
          marks={CARBON_DIOXIDE_MARKS}
        />
      </Box>
    </Box>
  );
};

export default CarbonDioxideSlider;

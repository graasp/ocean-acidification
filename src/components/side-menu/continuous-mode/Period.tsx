import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';

import { DEFAULT_PERIOD, PERIODS } from '@/constants/side-menu';

import SideMenuHeader from '../common/SideMenuHeader';

const container = {
  flexDirection: 'row',
  display: 'flex',
  justifyContent: 'space-between',
  width: '90%',
  margin: '0 auto',
};

const radioButton = {
  '& svg': {
    width: '0.8em',
    height: '0.8em',
  },
};

const radioText = {
  fontSize: '0.8em',
};

const Period = (): JSX.Element => (
  <Box>
    <SideMenuHeader label="Year" />
    <RadioGroup sx={container} defaultValue={DEFAULT_PERIOD}>
      {PERIODS.map((period) => (
        <FormControlLabel
          key={period}
          value={period}
          control={<Radio color="primary" size="small" sx={radioButton} />}
          label={<Typography sx={radioText}>{period}</Typography>}
        />
      ))}
    </RadioGroup>
  </Box>
);

export default Period;

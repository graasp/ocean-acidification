import { Slider } from '@mui/material';

const slider = {
  width: '95%',
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

interface Marks {
  value: number;
  label: number | null;
}

interface Props {
  max: number;
  min: number;
  marks: Marks[];
  disabled: boolean;
  step: number;
  onChange: (event: Event, value: number | number[]) => void;
  value: number;
}

const CustomSlider = ({
  max,
  min,
  marks,
  disabled,
  step,
  onChange,
  value,
}: Props): JSX.Element => (
  <Slider
    min={min}
    max={max}
    marks={marks}
    sx={slider}
    valueLabelDisplay="auto"
    disabled={disabled}
    step={step}
    onChange={onChange}
    value={value}
  />
);

export default CustomSlider;

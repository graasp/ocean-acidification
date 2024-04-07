export const CO2_SLIDER_MIN = 0;
export const CO2_SLIDER_MAX = 1000;
export const CO2_SLIDER_STEP = 50;
export const CO2_SLIDER_NUM_STEPS = CO2_SLIDER_MAX / CO2_SLIDER_STEP;
const NUM_STEPS = (CO2_SLIDER_MAX - CO2_SLIDER_MIN) / CO2_SLIDER_STEP + 1;
export const CO2_SLIDER_MARKS = new Array(NUM_STEPS)
  .fill(null)
  .map((emptyElement, index) => ({
    value: index * CO2_SLIDER_STEP,
    label:
      index === 0 || index === NUM_STEPS - 1 ? index * CO2_SLIDER_STEP : null,
  }));
export const CO2_ADDED_PER_INCREMENT = 3;
export const STATIC_CO2_ADDED_PER_INCREMENT = 2;
export const REACTIVE_CO2_ADDED_PER_INCREMENT = 1;
export const CARBON_RADIUS = 12;
export const OXYGEN_RADIUS = 10;
export const NITROGEN_RADIUS = 10;
export const NITROGEN_FILL = '#7393B3';
export const HYDROGEN_RADIUS = 8;
export const ACTIVE_EQUATION_COLOR = 'green';
export const INACTIVE_EQUATION_COLOR = '#D3D3D3';
export const DEFAULT_EQUATION_COLOR = 'black';
export const ACTIVE_EQUATION_WEIGHT = '900';
export const DEFAULT_EQUATION_WEIGHT = '400';
export const ACTIVE_EQUATION_BACKGROUND = '#d6fed2';
export const PERIODS = [
  { year: '1850', co2: 300 },
  { year: '1990', co2: 350 },
  { year: '2015', co2: 450 },
  { year: '2050', co2: 550 },
];
export const DEFAULT_PERIOD = PERIODS[2];
export const DEFAULT_YEAR = DEFAULT_PERIOD.year;
export const DEFAULT_CO2 = DEFAULT_PERIOD.co2;

export const FADED_OPACITY = 0.5;
export const DEFAULT_OPACITY = 1;

// these constants/calculations to center table arrows on top of table
export const MOLECULE_CONTAINER_HEIGHT = '40px';
export const MOLECULE_CONTAINER_PADDING = '4px';
// table height is four molecule containers + their borders
export const TABLE_HEIGHT = '168px';
export const ARROWS_CONTAINER_HEIGHT = '20px';
// total height minus 32px * 2
// 32px because first arrow group has to sit between molecule containers
// its height is 20px, container + its border is 42px, that minus half its height
export const ALL_ARROWS_CONTAINER_HEIGHT = '104px';
export const ALL_ARROWS_CONTAINER_MARGIN_TOP = '32px';

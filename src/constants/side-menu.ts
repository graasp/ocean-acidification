export const CO2_SLIDER_MIN = 0;
export const CO2_SLIDER_MAX = 1000;
export const CO2_SLIDER_STEP = 50;
const NUM_STEPS = (CO2_SLIDER_MAX - CO2_SLIDER_MIN) / CO2_SLIDER_STEP + 1;
export const CO2_SLIDER_MARKS = new Array(NUM_STEPS)
  .fill(null)
  .map((emptyElement, index) => ({
    value: index * CO2_SLIDER_STEP,
    label:
      index === 0 || index === NUM_STEPS - 1 ? index * CO2_SLIDER_STEP : null,
  }));
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
export const PERIODS = ['1850', '1910', '2020', '2050'];
export const DEFAULT_PERIOD = '2020';

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

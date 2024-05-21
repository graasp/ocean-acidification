export const CO2_SLIDER_MIN = 200;
export const CO2_SLIDER_MAX = 600;
export const CO2_SLIDER_STEP = 50;
export const CO2_SLIDER_NUM_INCREMENTS =
  (CO2_SLIDER_MAX - CO2_SLIDER_MIN) / CO2_SLIDER_STEP;
const NUM_MARKS = (CO2_SLIDER_MAX - CO2_SLIDER_MIN) / CO2_SLIDER_STEP + 1;
export const CO2_SLIDER_MARKS = new Array(NUM_MARKS)
  .fill(null)
  .map((emptyElement, index) => ({
    value: CO2_SLIDER_MIN + index * CO2_SLIDER_STEP,
    label:
      index === 0 || index === NUM_MARKS - 1
        ? CO2_SLIDER_MIN + index * CO2_SLIDER_STEP
        : null,
  }));
export const STATIC_CO2_ADDED_PER_INCREMENT = 2;
export const ACTIVE_CO2_ADDED_PER_INCREMENT = 4;
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
  { year: '1900', co2: 300 },
  { year: '2015', co2: 400 },
  { year: '2050', co2: 550 },
];
export const DEFAULT_PERIOD = PERIODS[1];
export const DEFAULT_CO2 = DEFAULT_PERIOD.co2;

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

export const TABLE_ARROW_ACTIVE_COLOR = '#0047AB';
export const TABLE_ARROW_INACTIVE_COLOR = 'black';
export const TABLE_ARROW_BODY_SIDE_LARGE = '4px';
export const TABLE_ARROW_BODY_SIDE_SMALL = '3px';
export const TABLE_ARROW_BODY_TOP_LARGE = '6px';
export const TABLE_ARROW_BODY_TOP_SMALL = '5px';
export const TABLE_ARROW_POINTER_LARGE = '10px';
export const TABLE_ARROW_POINTER_SMALL = '8px';
export const TABLE_ARROW_UP_ROTATION = '180deg';
export const TABLE_ARROW_DOWN_ROTATION = '0deg';

export const TABLE_ACTIVE_ANIMATION = {
  animation: 'blinker 2s linear infinite',
  '@keyframes blinker': { '50%': { opacity: 0.5 } },
};
export const DEFAULT_ARROWS = {
  top: { up: false, down: false },
  middle: { up: false, down: false },
  bottom: { up: false, down: false },
};

export const TABLE_EXTRA_LABEL_COLOR = '#D22B2B';
export const HYDROGEN_BOX_BORDER = `2px solid ${TABLE_EXTRA_LABEL_COLOR}`;

export const EQ_SCALE_COLOR_EQ = '#FFB302';
export const EQ_SCALE_COLOR_DISEQ = '#AA4A44';
export const EQ_SCALE_ROTATE_EQ = '0deg';
export const EQ_SCALE_ROTATE_DISEQ = '-10deg';
export const EQ_SCALE_EMOJI_EQ = '😎';
export const EQ_SCALE_EMOJI_DISEQ = '⛔';

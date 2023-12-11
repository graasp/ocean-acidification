import { generateRandomCoordinates } from '@/utils/molecules';

export const INTERVAL_COUNT_INCREMENTED_EVERY = 50;

export const CANVAS_WIDTH = 0.75;

export const SKY_HEIGHT = 0.35;
export const SEA_HEIGHT = 0.53;
export const REEF_BLOCKER_HEIGHT = 1 - (SKY_HEIGHT + SEA_HEIGHT) + 0.001;

export const SKY_GRADIENT = [0, '#a4c8ea', 1, '#c8def2'];
export const SEA_FILL = '#6ba5c9';
export const REEF_BLOCKER_GRADIENT = [0, '#6ba5c9', 1, '#6b91a0'];

export const EXCHANGE_CIRCLE_FILL = '';
export const EXCHANGE_CIRCLE_BORDER = '';
export const EXCHANGE_CIRCLE_BORDER_WIDTH = 1;
export const EXCHANGE_CIRCLE_RADIUS = 0.05;
export const EXCHANGE_ARROW_FILL = '#5a5a5a';
export const EXCHANGE_ARROW_BORDER = '#5a5a5a';
export const EXCHANGE_ARROW_BORDER_WIDTH = 6;
export const EXCHANGE_ARROW_X_INDENT = 0.25;
export const EXCHANGE_ARROW_Y_INDENT = 0.55;

export const CARBON_RADIUS = 8;
export const OXYGEN_RADIUS = (15 / 17) * CARBON_RADIUS;
export const HYDROGEN_RADIUS = (10 / 13) * OXYGEN_RADIUS;
export const CARBON_FILL = 'black';
export const OXYGEN_FILL = 'indianred';
export const HYDROGEN_FILL = 'white';
export const HYDROGENS_ANGLE = 104.5 * (Math.PI / 180);
// Carbonic acid; angles derived from illustration by teachers
export const OXYGENS_ANGLE = 125.5 * (Math.PI / 180);
export const LEFT_OXYGEN_ANGLE = 8.25 * (Math.PI / 180);

export const PH_SCALE_BEGINS_X = 0.2;
export const PH_SCALE_BEGINS_Y = -0.11;
export const PH_SCALE_WIDTH = 0.6;
export const PH_SCALE_HEIGHT = 0.075;
export const PH_SCALE_GRADIENT = [0, '#fAf9f6', 1, '#ff4040'];
export const MARKER_FILL = '#1a1a1b';
export const MARKER_BORDER_WIDTH = 6;
export const MARKER_WIDTH = 0.035;
export const PH_SCALE_POINTS = [7.8, 7.85, 7.9, 7.95, 8, 8.05, 8.1, 8.15, 8.2];
export const PH_SCALE_AXIS_COLOR = 'black';
export const PH_SCALE_AXIS_HEIGHT = 5;
export const PH_SCALE_AXIS_STROKE_WIDTH = 1;
export const PH_SCALE_AXIS_LABEL_MARGIN = 2;

export const REEF_POINTS = [
  0, 0, 0.003, -0.029, -0.029, -0.059, -0.037, -0.074, -0.029, -0.088, -0.007,
  -0.074, -0.007, -0.11, -0.029, -0.14, -0.022, -0.154, -0.015, -0.154, 0,
  -0.14, 0.015, -0.125, 0.022, -0.103, 0.029, -0.103, 0.029, -0.147, 0, -0.176,
  -0.007, -0.191, 0, -0.199, 0.029, -0.176, 0.044, -0.176, 0.059, -0.191, 0.075,
  -0.206, 0.088, -0.213, 0.096, -0.206, 0.059, -0.147, 0.059, -0.118, 0.088,
  -0.147, 0.081, -0.169, 0.078, -0.176, 0.088, -0.191, 0.103, -0.176, 0.11,
  -0.162, 0.11, -0.132, 0.125, -0.14, 0.14, -0.154, 0.147, -0.147, 0.14, -0.14,
  0.11, -0.103, 0.132, -0.088, 0.132, -0.081, 0.103, -0.074, 0.088, -0.051,
  0.096, 0,
];
export const REEF_TENSION = 0.5;
export const REEF_COLOR = 'white';
export const REEF_GROUP = [
  { x: 0.285, y: 0.91, rotation: 0 },
  { x: 0.36, y: 0.91, rotation: 40 },
  { x: 0.545, y: 0.94, rotation: -20 },
  { x: 0.59, y: 0.89, rotation: 60 },
];
const REEF_HEIGHT = Math.min(
  ...REEF_POINTS.filter((point, index) => index % 2 !== 0),
);
const REEF_WIDTH =
  Math.max(...REEF_POINTS.filter((point, index) => index % 2 === 0)) -
  Math.min(...REEF_POINTS.filter((point, index) => index % 2 === 0));
export const REEF_HOLES_BEGIN_X =
  Math.min(...REEF_GROUP.map(({ x }) => x)) +
  Math.min(...REEF_POINTS.filter((point, index) => index % 2 === 0));
export const REEF_HOLES_END_X =
  Math.max(...REEF_GROUP.map(({ x }) => x)) + REEF_WIDTH;
export const REEF_HOLES_BEGIN_Y =
  Math.max(...REEF_GROUP.map(({ y }) => y)) + REEF_HEIGHT;
export const REEF_HOLES_END_Y = Math.max(...REEF_GROUP.map(({ y }) => y));
export const REEF_HOLES_RADII = [0.002, 0.004];
export const TOTAL_NUM_HOLES = 600;
export const PERCENT_HOLES_INCREMENT = 1 / (PH_SCALE_POINTS.length - 1);

const NUM_CO2_MOLS_SKY = 1;
export const CO2_MOLS_SKY_COORDINATES = generateRandomCoordinates(
  NUM_CO2_MOLS_SKY,
  0,
  SKY_HEIGHT,
);

const NUM_WATER_MOLS_SEA = 1;
export const WATER_MOLS_SEA_COORDINATES = generateRandomCoordinates(
  NUM_WATER_MOLS_SEA,
  SKY_HEIGHT + EXCHANGE_CIRCLE_RADIUS,
  0.5,
);

export const MOVEMENT_PER_INTERVAL = 0.005;

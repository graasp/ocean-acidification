import { generateRandomCoordinates } from '@/utils/canvas';

export const CANVAS_WIDTH = 0.75;

export const SKY_HEIGHT = 0.35;
export const SEA_HEIGHT = 0.54;
export const REEF_BLOCKER_HEIGHT = 1 - (SKY_HEIGHT + SEA_HEIGHT) + 0.001;

export const SKY_GRADIENT = [0, '#a4c8ea', 1, '#c8def2'];
export const SEA_GRADIENT = [0, '#9cc9e5', 1, '#6ba5c9'];
export const REEF_BLOCKER_GRADIENT = [0, '#6ba5c9', 1, '#6b91a0'];
export const RANDOM_COORDINATES = generateRandomCoordinates(20);

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
export const HYDROGEN_FILL = 'grey';

export const PH_SCALE_BEGINS_X = 0.2;
export const PH_SCALE_BEGINS_Y = -0.1;
export const PH_SCALE_WIDTH = 0.6;
export const PH_SCALE_HEIGHT = 0.075;
export const PH_SCALE_BORDER_RADIUS = 5;
export const PH_SCALE_GRADIENT = [0, '#ff4040', 1, '#fAf9f6'];
export const MARKER_FILL = '#1a1a1b';
export const MARKER_BORDER_WIDTH = 6;
export const MARKER_WIDTH = 0.035;

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

export const REEF_GROUP = [
  { x: 0.285, y: 0.92, rotation: 0 },
  { x: 0.36, y: 0.92, rotation: 40 },
  { x: 0.545, y: 0.95, rotation: -20 },
  { x: 0.59, y: 0.9, rotation: 60 },
];

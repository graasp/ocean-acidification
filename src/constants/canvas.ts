import { generateRandomCoordinates } from '@/utils/canvas';

export const CANVAS_WIDTH = 0.75;

export const SKY_HEIGHT = 0.35;
export const SEA_HEIGHT = 1 - SKY_HEIGHT;

export const SKY_GRADIENT = [0, '#a4c8ea', 1, '#c8def2'];
export const SEA_GRADIENT = [0, '#9cc9e5', 1, '#6ba5c9'];
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

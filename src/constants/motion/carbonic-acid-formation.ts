import { CO2_MIGRATION_INTERVALS } from './carbon-dioxide-migration';

export const FORMATION_CO2 = {
  begins: { x: 0.25, y: 0.5, rotation: 80 },
};

export const FORMATION_WATER = {
  begins: { x: 0.2, y: 0.6, rotation: 30 },
};

export const FORMATION_BEGINS = CO2_MIGRATION_INTERVALS;

export const FORMATION_INTERVALS = {
  intervalOne: 100,
  intervalTwo: 50,
  intervalThree: 50,
  intervalFour: 25,
};

export const TOTAL_FORMATION_INTERVALS = Object.values(
  FORMATION_INTERVALS,
).reduce((a, b) => a + b, 0);

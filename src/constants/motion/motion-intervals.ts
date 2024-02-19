export const MOTION_INTERVAL = 200;

export const FORMATION_INTERVALS = {
  intervalOne: MOTION_INTERVAL * 0.5,
  intervalTwo: MOTION_INTERVAL * 0.2,
  intervalThree: MOTION_INTERVAL * 0.2,
  intervalFour: MOTION_INTERVAL * 0.1,
};

export const HYDROGEN_SPLITS = 100;
export const IONS_COMBINE = 100;

export const WATER_FORMATION_INTERVALS = 50;
export const WATER_MOTION_INTERVALS =
  MOTION_INTERVAL - WATER_FORMATION_INTERVALS;

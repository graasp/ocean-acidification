import { CO2_MIGRATION_INTERVALS } from './carbon-dioxide-migration';
import { DISSOCIAION_INTERVALS } from './carbonic-acid-dissociation';
import { TOTAL_FORMATION_INTERVALS } from './carbonic-acid-formation';

const intervalOne = CO2_MIGRATION_INTERVALS;
const intervalTwo = intervalOne + TOTAL_FORMATION_INTERVALS;
const intervalThree = intervalTwo + DISSOCIAION_INTERVALS;

export const MOTION_INTERVALS = [intervalOne, intervalTwo, intervalThree];

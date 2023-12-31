import { CO2_MIGRATION_INTERVALS } from './carbon-dioxide-migration';
import { DISSOCIAION_INTERVALS } from './carbonic-acid-dissociation';
import { TOTAL_FORMATION_INTERVALS } from './carbonic-acid-formation';
import { REVERSE_DISSOCIATION_INTERVALS } from './reverse-dissociation';
import { REVERSE_FORMATION_INTERVALS } from './reverse-formation';

const intervalOne = CO2_MIGRATION_INTERVALS;
const intervalTwo = intervalOne + TOTAL_FORMATION_INTERVALS;
const intervalThree = intervalTwo + DISSOCIAION_INTERVALS;
const intervalFour = intervalThree + REVERSE_DISSOCIATION_INTERVALS;
const intervalFive = intervalFour + REVERSE_FORMATION_INTERVALS;

export const MOTION_INTERVALS = [
  intervalOne,
  intervalTwo,
  intervalThree,
  intervalFour,
  intervalFive,
];

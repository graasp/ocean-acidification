import {
  determineXEnd,
  distributeMoleculesOnRow,
  generateRandomNum,
  generateRandomRotation,
} from '@/utils/molecules';
import { createMigration } from '@/utils/motion-objects';

import { CO2_SLIDER_MAX, CO2_SLIDER_STEP } from '../side-menu';

const CO2_MIGRATION = createMigration(
  { x: 0.5, y: 0.25, rotation: -80 },
  { x: 0.4, y: 0.45, rotation: 120 },
);
const WATER_BEGINS = { x: 0.35, y: 0.5, rotation: 100 };
const CARBONIC_ACID_ENDS = { x: 0.35, y: 0.75 };
const HYDROGEN_ENDS = { x: 0.25, y: 0.8 };

export const FULL_CYCLE = {
  co2Migration: CO2_MIGRATION,
  waterBegins: WATER_BEGINS,
  carbonicAcidEnds: CARBONIC_ACID_ENDS,
  hydrogenEnds: HYDROGEN_ENDS,
  deProtonates: false,
};

const CO2_ADDED_PER_INCREMENET = 3;
const MAX_NUM_CO2 =
  (CO2_SLIDER_MAX / CO2_SLIDER_STEP) * CO2_ADDED_PER_INCREMENET;
const CO2_NUM_ROWS = 5;
const CO2_BEGINS_MIN_Y = 0.01;
const CO2_BEGINS_MAX_Y = 0.325;
const CO2_PER_ROW = MAX_NUM_CO2 / CO2_NUM_ROWS;
const CO2_ENDS_MIN_Y = 0.4;
const CO2_ENDS_MAX_Y = 0.6;
const WATER_BEGINS_MIN_X = 0.05;
const WATER_BEGINS_MAX_X = 0.9;
const WATER_BEGINS_MIN_Y = 0.4;
const WATER_BEGINS_MAX_Y = 0.7;

const CO2_RANDOM_DIST = new Array(CO2_NUM_ROWS)
  .fill(null)
  .map((emptyElement, index) =>
    distributeMoleculesOnRow(
      CO2_PER_ROW,
      CO2_NUM_ROWS,
      CO2_BEGINS_MIN_Y,
      CO2_BEGINS_MAX_Y,
      index,
    ),
  )
  .flat();

export const ALL_MOLECULES = CO2_RANDOM_DIST.map((molecule, index) => {
  const formsCarbonicAcid = index % CO2_ADDED_PER_INCREMENET === 0;
  return {
    formsCarbonicAcid,
    carbonDioxide: {
      begins: { ...molecule },
      ends: {
        x: determineXEnd(molecule.x),
        y: generateRandomNum(CO2_ENDS_MIN_Y, CO2_ENDS_MAX_Y),
        rotation: generateRandomRotation(),
      },
    },
    water: {
      begins: {
        x: generateRandomNum(WATER_BEGINS_MIN_X, WATER_BEGINS_MAX_X),
        y: generateRandomNum(WATER_BEGINS_MIN_Y, WATER_BEGINS_MAX_Y),
        rotation: generateRandomRotation(),
      },
    },
  };
});

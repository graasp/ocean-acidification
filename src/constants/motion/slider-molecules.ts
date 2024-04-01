import {
  determineXEnd,
  distributeMoleculesOnRow,
  generateRandomNum,
  generateRandomRotation,
} from '@/utils/molecules';

import {
  CO2_ADDED_PER_INCREMENT,
  CO2_SLIDER_MAX,
  CO2_SLIDER_STEP,
} from '../side-menu';

const MAX_NUM_CO2 =
  (CO2_SLIDER_MAX / CO2_SLIDER_STEP) * CO2_ADDED_PER_INCREMENT;
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

export const SLIDER_MOLECULES = CO2_RANDOM_DIST.map((molecule, index) => {
  const formsCarbonicAcid = index % CO2_ADDED_PER_INCREMENT === 0;
  return {
    molecules: {
      carbonDioxide: {
        begins: { ...molecule },
        ends: {
          x: determineXEnd(molecule.x),
          y: generateRandomNum(CO2_ENDS_MIN_Y, CO2_ENDS_MAX_Y),
          rotation: generateRandomRotation(),
        },
      },
      waterBegins: {
        x: generateRandomNum(WATER_BEGINS_MIN_X, WATER_BEGINS_MAX_X),
        y: generateRandomNum(WATER_BEGINS_MIN_Y, WATER_BEGINS_MAX_Y),
        rotation: generateRandomRotation(),
      },
      carbonicAcidEnds: { x: Math.random(), y: 0.75 },
      hydrogenEnds: { x: Math.random(), y: 0.8 },
    },
    properties: {
      formsCarbonicAcid,
      showInertCarbonDioxide: false,
      showReactiveCarbonDioxide: false,
      beginsAt: Infinity,
      reverse: false,
      deProtonates: true,
    },
  };
});

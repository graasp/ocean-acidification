import _ from 'lodash';

import {
  determineCarbonicAcidEnds,
  determineCo2EndX,
  determineCo2EndY,
  determineHydrogenEnds,
  determineWaterCoordinates,
  distributeMoleculesOnRow,
  generateRandomRotation,
} from '@/utils/molecules';

import {
  CO2_SLIDER_NUM_INCREMENTS,
  REACTIVE_CO2_ADDED_PER_INCREMENT,
} from '../side-menu';

const MAX_REACTIVE_CO2 =
  CO2_SLIDER_NUM_INCREMENTS * REACTIVE_CO2_ADDED_PER_INCREMENT;
const REACTIVE_CO2_NUM_ROWS = 2;
const REACTIVE_CO2_PER_ROW = MAX_REACTIVE_CO2 / REACTIVE_CO2_NUM_ROWS;
const REACTIVE_CO2_MIN_Y = 0.125;
const REACTIVE_CO2_MAX_Y = 0.3;

const INITIAL_DISTRIBUTION = new Array(REACTIVE_CO2_NUM_ROWS)
  .fill(null)
  .map((emptyElement, index) =>
    distributeMoleculesOnRow(
      REACTIVE_CO2_PER_ROW,
      REACTIVE_CO2_NUM_ROWS,
      REACTIVE_CO2_MIN_Y,
      REACTIVE_CO2_MAX_Y,
      index,
    ),
  )
  .flat();

const SHUFFLED_DISTRIBUTION = _.shuffle(INITIAL_DISTRIBUTION);

export const REACTIVE_CO2_DISTRIBUTION = SHUFFLED_DISTRIBUTION.map(
  (coordinates) => {
    const co2EndsX = determineCo2EndX(coordinates.x);
    const co2EndsY = determineCo2EndY(coordinates.y);
    const co2Ends = { x: co2EndsX, y: co2EndsY };
    const carbonicAcidEnds = determineCarbonicAcidEnds(co2Ends);
    return {
      molecules: {
        carbonDioxide: {
          begins: { ...coordinates },
          ends: {
            x: co2EndsX,
            y: co2EndsY,
            rotation: generateRandomRotation(),
          },
        },
        waterBegins: determineWaterCoordinates(co2Ends),
        carbonicAcidEnds,
        hydrogenEnds: determineHydrogenEnds(carbonicAcidEnds),
      },
      properties: { beginsAt: Infinity, reverse: false, showCycle: false },
    };
  },
);

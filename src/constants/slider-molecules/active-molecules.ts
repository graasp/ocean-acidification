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
  ACTIVE_CO2_ADDED_PER_INCREMENT,
  CO2_SLIDER_NUM_INCREMENTS,
} from '../side-menu';

const MAX_ACTIVE_CO2 =
  CO2_SLIDER_NUM_INCREMENTS * ACTIVE_CO2_ADDED_PER_INCREMENT;
const ACTIVE_CO2_NUM_ROWS = 2;
const ACTIVE_CO2_PER_ROW = MAX_ACTIVE_CO2 / ACTIVE_CO2_NUM_ROWS;
const ACTIVE_CO2_MIN_Y = 0.125;
const ACTIVE_CO2_MAX_Y = 0.3;

const INITIAL_DISTRIBUTION = new Array(ACTIVE_CO2_NUM_ROWS)
  .fill(null)
  .map((emptyElement, index) =>
    distributeMoleculesOnRow(
      ACTIVE_CO2_PER_ROW,
      ACTIVE_CO2_NUM_ROWS,
      ACTIVE_CO2_MIN_Y,
      ACTIVE_CO2_MAX_Y,
      index,
    ),
  )
  .flat();

const SHUFFLED_DISTRIBUTION = _.shuffle(INITIAL_DISTRIBUTION);

export const ACTIVE_CO2_DISTRIBUTION = SHUFFLED_DISTRIBUTION.map(
  (coordinates, index) => {
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
      properties: {
        beginsAt: Infinity,
        reverse: false,
        showCycle: false,
        formsCarbonicAcid: !(
          index % ACTIVE_CO2_ADDED_PER_INCREMENT === 0 ||
          index % ACTIVE_CO2_ADDED_PER_INCREMENT === 1
        ),
        deprotonates: index % ACTIVE_CO2_ADDED_PER_INCREMENT === 3,
      },
    };
  },
);

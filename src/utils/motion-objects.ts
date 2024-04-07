import {
  Dissociation,
  Formation,
  Migration,
  Point,
  PointWithoutRotation,
} from './molecules/types';

const createEmptyPoint = (): Point => ({
  x: 0,
  y: 0,
  rotation: 0,
});

export const createMigration = (
  co2Begins: Point,
  co2Ends: Point,
): Migration => ({ co2: { begins: { ...co2Begins }, ends: { ...co2Ends } } });

export const createFormation = (
  co2Begins: Point,
  waterBegins: Point,
): Formation => ({
  co2: { begins: { ...co2Begins }, ends: createEmptyPoint() },
  water: { begins: { ...waterBegins }, ends: createEmptyPoint() },
  hydroxide: { begins: createEmptyPoint(), ends: createEmptyPoint() },
});

export const createDissociation = (
  carbonicAcidBegins: PointWithoutRotation,
  carbonicAcidEnds: PointWithoutRotation,
  hydrogenEnds: PointWithoutRotation,
  noRotation = false,
): Dissociation => ({
  carbonicAcid: {
    begins: { ...carbonicAcidBegins, rotation: noRotation ? 0 : 100 },
    ends: { ...carbonicAcidEnds, rotation: noRotation ? 0 : -100 },
  },
  hydrogen: {
    begins: createEmptyPoint(),
    ends: { ...hydrogenEnds, rotation: 0 },
  },
});

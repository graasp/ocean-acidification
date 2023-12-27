export const CO2_MIGRATION = {
  begins: { x: 0.2, y: 0.1, rotation: -80 },
  ends: { x: 0.1, y: 0.4, rotation: 120 },
  movesPerInterval: { x: 0, y: 0, rotation: 0 },
};

export const CO2_MIGRATION_INTERVALS = 200;
CO2_MIGRATION.movesPerInterval.x =
  (CO2_MIGRATION.ends.x - CO2_MIGRATION.begins.x) / CO2_MIGRATION_INTERVALS;
CO2_MIGRATION.movesPerInterval.y =
  (CO2_MIGRATION.ends.y - CO2_MIGRATION.begins.y) / CO2_MIGRATION_INTERVALS;
CO2_MIGRATION.movesPerInterval.rotation =
  (CO2_MIGRATION.ends.rotation - CO2_MIGRATION.begins.rotation) /
  CO2_MIGRATION_INTERVALS;

export const CARBONIC_ACID_FORMATION_CO2 = {
  begins: { x: 0.25, y: 0.5, rotation: 80 },
};

export const CARBONIC_ACID_FORMATION_WATER = {
  begins: { x: 0.2, y: 0.6, rotation: 30 },
};

export const CARBONIC_ACID_FORMATION_BEGINS = CO2_MIGRATION_INTERVALS;

export const CARBONIC_ACID_FORMATION_INTERVALS = {
  intervalOne: 100,
  intervalTwo: 50,
  intervalThree: 50,
  intervalFour: 25,
};

export const TOTAL_CARBONIC_ACID_FORMATION_INTERVALS = Object.values(
  CARBONIC_ACID_FORMATION_INTERVALS,
).reduce((a, b) => a + b, 0);

export const MOTION_LIMITS = [
  CO2_MIGRATION_INTERVALS,
  CO2_MIGRATION_INTERVALS + TOTAL_CARBONIC_ACID_FORMATION_INTERVALS,
];

export const CO2_MIGRATION_INTERVALS = 200;

export const CO2_MIGRATION = {
  begins: { x: 0.2, y: 0.1, rotation: -80 },
  ends: { x: 0.1, y: 0.4, rotation: 120 },
  movesPerInterval: { x: 0, y: 0, rotation: 0 },
};
const { begins, ends, movesPerInterval } = CO2_MIGRATION;

movesPerInterval.x = (ends.x - begins.x) / CO2_MIGRATION_INTERVALS;
movesPerInterval.y = (ends.y - begins.y) / CO2_MIGRATION_INTERVALS;
movesPerInterval.rotation =
  (ends.rotation - begins.rotation) / CO2_MIGRATION_INTERVALS;

export const CO2_REVERSE_MIGRATION_INTERVALS = 225;

export const CO2_REVERSE_MIGRATION = {
  begins: { x: 0.9, y: 0.5, rotation: 110 },
  ends: { x: 0.8, y: 0.2, rotation: -90 },
  movesPerInterval: { x: 0, y: 0, rotation: 0 },
};
const { begins, ends, movesPerInterval } = CO2_REVERSE_MIGRATION;

movesPerInterval.x = (ends.x - begins.x) / CO2_REVERSE_MIGRATION_INTERVALS;
movesPerInterval.y = (ends.y - begins.y) / CO2_REVERSE_MIGRATION_INTERVALS;
movesPerInterval.rotation =
  (ends.rotation - begins.rotation) / CO2_REVERSE_MIGRATION_INTERVALS;

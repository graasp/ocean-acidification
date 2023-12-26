export const CO2_MIGRATION = {
  begins: { x: 0.2, y: 0.1, rotation: -80 },
  ends: { x: 0.1, y: 0.4 },
  movesPerInterval: { x: 0, y: 0 },
};

export const CO2_MIGRATION_INTERVALS = 200;
CO2_MIGRATION.movesPerInterval.x =
  (CO2_MIGRATION.ends.x - CO2_MIGRATION.begins.x) / CO2_MIGRATION_INTERVALS;
CO2_MIGRATION.movesPerInterval.y =
  (CO2_MIGRATION.ends.y - CO2_MIGRATION.begins.y) / CO2_MIGRATION_INTERVALS;

import { createMigration } from '@/utils/motion-objects';

const CO2_MIGRATION = createMigration(
  { x: 0.4, y: 0.15, rotation: -80 },
  { x: 0.3, y: 0.45, rotation: 120 },
);
const WATER_BEGINS = { x: 0.15, y: 0.6, rotation: 100 };
const CARBONIC_ACID_ENDS = { x: 0.35, y: 0.75 };
const HYDROGEN_ENDS = { x: 0.25, y: 0.8 };

export const DISEQUILIBRIUM_CYCLE = {
  co2Migration: CO2_MIGRATION,
  waterBegins: WATER_BEGINS,
  carbonicAcidEnds: CARBONIC_ACID_ENDS,
  hydrogenEnds: HYDROGEN_ENDS,
};

import {
  createDissociation,
  createFormation,
  createMigration,
} from '@/utils/motion-objects';

const CO2_MIGRATION = createMigration(
  { x: 0.2, y: 0.25, rotation: -80 },
  { x: 0.1, y: 0.55, rotation: 120 },
);

const CARBONIC_ACID_FORMATION = createFormation(
  { x: 0.25, y: 0.5, rotation: 80 },
  { x: 0.15, y: 0.6, rotation: -40 },
);

const CARBONIC_ACID_DISSOCIATION = createDissociation(
  { x: 0.2, y: 0.85 },
  { x: 0.4, y: 0.65 },
  { x: 0.275, y: 0.6 },
);

const REVERSE_DISSOCIATION = createDissociation(
  { x: 0.725, y: 0.6 },
  { x: 0.8, y: 0.75 },
  { x: 0.7, y: 0.6 },
);

const REVERSE_FORMATION = createFormation(
  { x: 0.7, y: 0.725, rotation: 80 },
  { x: 0.6, y: 0.8, rotation: -40 },
);

const REVERSE_MIGRATION = createMigration(
  { x: 0.9, y: 0.6, rotation: 110 },
  { x: 0.8, y: 0.225, rotation: -90 },
);

export const CYCLE_1 = {
  co2Migration: CO2_MIGRATION,
  carbonicAcidFormation: CARBONIC_ACID_FORMATION,
  carbonicAcidDissociation: CARBONIC_ACID_DISSOCIATION,
  reverseDissociation: REVERSE_DISSOCIATION,
  reverseFormation: REVERSE_FORMATION,
  reverseMigration: REVERSE_MIGRATION,
};

const CO2_MIGRATION_2 = createMigration(
  { x: 0.45, y: 0.2, rotation: 90 },
  { x: 0.35, y: 0.6, rotation: 190 },
);

const CARBONIC_ACID_FORMATION_2 = createFormation(
  { x: 0.15, y: 0.45, rotation: 80 },
  { x: 0.1, y: 0.5, rotation: 30 },
);

const CARBONIC_ACID_DISSOCIATION_2 = createDissociation(
  { x: 0.45, y: 0.7 },
  { x: 0.55, y: 0.5 },
  { x: 0.425, y: 0.475 },
);

const REVERSE_DISSOCIATION_2 = createDissociation(
  { x: 0.675, y: 0.5 },
  { x: 0.65, y: 0.65 },
  { x: 0.55, y: 0.475 },
);

const REVERSE_FORMATION_2 = createFormation(
  { x: 0.6, y: 0.6, rotation: 90 },
  { x: 0.5, y: 0.7, rotation: -20 },
);

const REVERSE_MIGRATION_2 = createMigration(
  { x: 0.8, y: 0.62, rotation: 80 },
  { x: 0.6, y: 0.21, rotation: 250 },
);

const CYCLE_2 = {
  co2Migration: CO2_MIGRATION_2,
  carbonicAcidFormation: CARBONIC_ACID_FORMATION_2,
  carbonicAcidDissociation: CARBONIC_ACID_DISSOCIATION_2,
  reverseDissociation: REVERSE_DISSOCIATION_2,
  reverseFormation: REVERSE_FORMATION_2,
  reverseMigration: REVERSE_MIGRATION_2,
};

export const CYCLES = [CYCLE_1, CYCLE_2];

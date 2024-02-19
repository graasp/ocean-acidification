// TODO: DETECT ENDS/BEGINS SO THAT CORRECTLY PARAMTERIZED
const CO2_MIGRATION = {
  co2: {
    begins: { x: 0.2, y: 0.1, rotation: -80 },
    ends: { x: 0.1, y: 0.4, rotation: 120 },
  },
};

const CARBONIC_ACID_FORMATION = {
  co2: { begins: { x: 0.25, y: 0.5, rotation: 80 } },
  water: { begins: { x: 0.2, y: 0.6, rotation: 30 } },
};

const CARBONIC_ACID_DISSOCIATION = {
  carbonicAcid: {
    begins: { x: 0.2, y: 0.85, rotation: 150 },
    ends: { x: 0.4, y: 0.65, rotation: 30 },
  },
  hydrogenEndsY: 0.625,
};

// TODO: solve the rotation issue here: Right now it works only with 100 and -100
const REVERSE_DISSOCIATION = {
  bicarbonate: {
    begins: { x: 0.7, y: 0.6, rotation: 100 },
    ends: { x: 0.8, y: 0.75, rotation: -100 },
  },
  hydrogen: {
    begins: { x: 0.65, y: 0.55, rotation: 0 },
    ends: { x: 0, y: 0, rotation: 0 },
  },
};

// TODO: APPLY PROVIDED ROTATION (right now the carbonicacid doesn't read this rotation)
const REVERSE_FORMATION = {
  carbonicAcid: { begins: { x: 0.7, y: 0.85, rotation: 50 } },
};

const REVERSE_MIGRATION = {
  co2: {
    begins: { x: 0.9, y: 0.5, rotation: 110 },
    ends: { x: 0.8, y: 0.2, rotation: -90 },
  },
};

export const CYCLE = {
  co2Migration: CO2_MIGRATION,
  carbonicAcidFormation: CARBONIC_ACID_FORMATION,
  carbonicAcidDissociation: CARBONIC_ACID_DISSOCIATION,
  reverseDissociation: REVERSE_DISSOCIATION,
  reverseFormation: REVERSE_FORMATION,
  reverseMigration: REVERSE_MIGRATION,
};

// FOR EXPERIMENTAL PURPOSES BELOW

const CO2_MIGRATION_2 = {
  co2: {
    begins: { x: 0.4, y: 0.2, rotation: -80 },
    ends: { x: 0.35, y: 0.5, rotation: 120 },
  },
};

const CARBONIC_ACID_FORMATION_2 = {
  co2: { begins: { x: 0.15, y: 0.45, rotation: 80 } },
  water: { begins: { x: 0.1, y: 0.5, rotation: 30 } },
};

const CARBONIC_ACID_DISSOCIATION_2 = {
  carbonicAcid: {
    begins: { x: 0.45, y: 0.7, rotation: 150 },
    ends: { x: 0.55, y: 0.5, rotation: 30 },
  },
  hydrogenEndsY: 0.475,
};

const REVERSE_DISSOCIATION_2 = {
  bicarbonate: {
    begins: { x: 0.6, y: 0.5, rotation: 100 },
    ends: { x: 0.7, y: 0.65, rotation: -100 },
  },
  hydrogen: {
    begins: { x: 0.55, y: 0.45, rotation: 0 },
    ends: { x: 0, y: 0, rotation: 0 },
  },
};

const REVERSE_FORMATION_2 = {
  carbonicAcid: { begins: { x: 0.6, y: 0.7, rotation: 50 } },
};

const REVERSE_MIGRATION_2 = {
  co2: {
    begins: { x: 0.8, y: 0.4, rotation: 80 },
    ends: { x: 0.6, y: 0.1, rotation: 50 },
  },
};

export const CYCLE_2 = {
  co2Migration: CO2_MIGRATION_2,
  carbonicAcidFormation: CARBONIC_ACID_FORMATION_2,
  carbonicAcidDissociation: CARBONIC_ACID_DISSOCIATION_2,
  reverseDissociation: REVERSE_DISSOCIATION_2,
  reverseFormation: REVERSE_FORMATION_2,
  reverseMigration: REVERSE_MIGRATION_2,
};
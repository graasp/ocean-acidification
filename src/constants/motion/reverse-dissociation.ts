export const REVERSE_DISSOCIATION_INTERVALS = 200;
export const IONS_COMBINE_AT = 100;

export const BICARBONATE = {
  begins: { x: 0.7, y: 0.6, rotation: IONS_COMBINE_AT },
  ends: {
    x: 0.8,
    y: 0.75,
    rotation: IONS_COMBINE_AT - REVERSE_DISSOCIATION_INTERVALS,
  },
  movesPerInterval: { x: 0, y: 0, rotation: 0 },
};

const { begins, ends, movesPerInterval } = BICARBONATE;
movesPerInterval.x = (ends.x - begins.x) / REVERSE_DISSOCIATION_INTERVALS;
movesPerInterval.y = (ends.y - begins.y) / REVERSE_DISSOCIATION_INTERVALS;
movesPerInterval.rotation =
  (ends.rotation - begins.rotation) / REVERSE_DISSOCIATION_INTERVALS;

export const CARBONIC_ACID = {
  begins: { x: 0, y: 0, rotation: 0 },
};

CARBONIC_ACID.begins.x = begins.x + movesPerInterval.x * IONS_COMBINE_AT;
CARBONIC_ACID.begins.y = begins.y + movesPerInterval.y * IONS_COMBINE_AT;
CARBONIC_ACID.begins.rotation =
  begins.rotation + movesPerInterval.rotation * IONS_COMBINE_AT;

export const HYDROGEN = {
  begins: { x: 0.65, y: 0.55, rotation: 0 },
  ends: { x: 0, y: 0, rotation: 0 },
  movesPerInterval: { x: 0, y: 0, rotation: 0 },
};

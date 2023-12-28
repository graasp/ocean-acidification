export const DISSOCIAION_INTERVALS = 200;

// carbonic acid in dissociation
export const DISSOCIATION_CARBONIC_ACID = {
  begins: { x: 0.2, y: 0.85, rotation: 150 },
  ends: { x: 0.4, y: 0.65, rotation: 30 },
  movesPerInterval: { x: 0, y: 0, rotation: 0 },
};
const {
  begins: beginsCA,
  ends: endsCA,
  movesPerInterval: movesPerIntervalCA,
} = DISSOCIATION_CARBONIC_ACID;
movesPerIntervalCA.x = (endsCA.x - beginsCA.x) / DISSOCIAION_INTERVALS;
movesPerIntervalCA.y = (endsCA.y - beginsCA.y) / DISSOCIAION_INTERVALS;
movesPerIntervalCA.rotation =
  (endsCA.rotation - beginsCA.rotation) / DISSOCIAION_INTERVALS;

// detached hydrogen in dissociation
export const HYDROGEN_SPLITS_AT = 100;
export const DISSOCIATION_HYDROGEN = {
  begins: { x: 0, y: 0, rotation: 0 },
  ends: { x: 0, y: 0, rotation: 0 },
  movesPerInterval: { x: 0, y: 0, rotation: 0 },
};
const {
  begins: beginsH,
  ends: endsH,
  movesPerInterval: movesPerIntervalH,
} = DISSOCIATION_HYDROGEN;

beginsH.x = beginsCA.x + movesPerIntervalCA.x * HYDROGEN_SPLITS_AT;
beginsH.y = beginsCA.y + movesPerIntervalCA.y * HYDROGEN_SPLITS_AT;
beginsH.rotation =
  beginsCA.rotation + movesPerIntervalCA.rotation * HYDROGEN_SPLITS_AT;

endsH.x = beginsH.x;
endsH.y = 0.625;

movesPerIntervalH.y =
  (endsH.y - beginsH.y) / (DISSOCIAION_INTERVALS - HYDROGEN_SPLITS_AT);

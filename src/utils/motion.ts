interface Coordinates {
  x: number;
  y: number;
  rotation: number;
}

interface EmptyObject {
  begins: Coordinates;
  ends: Coordinates;
  current: Coordinates;
  movesPerInterval: Coordinates;
}

export const createEmptyObject = (): EmptyObject => ({
  begins: { x: 0, y: 0, rotation: 0 },
  ends: { x: 0, y: 0, rotation: 0 },
  current: { x: 0, y: 0, rotation: 0 },
  movesPerInterval: { x: 0, y: 0, rotation: 0 },
});

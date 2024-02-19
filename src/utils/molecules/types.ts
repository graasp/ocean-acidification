export interface MoleculeCenter {
  x: number;
  y: number;
}

const coordinates = ['x', 'y', 'rotation'] as const;
export type Coordinate = (typeof coordinates)[number];

export interface Point {
  x: number;
  y: number;
  rotation: number;
}

export interface BeginningCoordinates {
  begins: Point;
}

export interface CompleteCoordinates {
  begins: Point;
  ends: Point;
}

export interface Migration {
  co2: CompleteCoordinates;
}

export interface Formation {
  co2: BeginningCoordinates;
  water: BeginningCoordinates;
}

export interface Dissociation {
  carbonicAcid: CompleteCoordinates;
  hydrogenEndsY: number;
}

export interface ReversedDissociation {
  bicarbonate: CompleteCoordinates;
  hydrogen: CompleteCoordinates;
}

export interface ReversedFormation {
  carbonicAcid: BeginningCoordinates;
}

export interface Cycle {
  co2Migration: Migration;
  carbonicAcidFormation: Formation;
  carbonicAcidDissociation: Dissociation;
  reverseDissociation: ReversedDissociation;
  reverseFormation: ReversedFormation;
  reverseMigration: Migration;
}

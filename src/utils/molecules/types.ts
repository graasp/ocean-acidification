export interface MoleculeCenter {
  x: number;
  y: number;
}

const coordinates = ['x', 'y', 'rotation'] as const;
export type Coordinate = (typeof coordinates)[number];

export interface PointWithoutRotation {
  x: number;
  y: number;
}

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
  co2: CompleteCoordinates;
  water: CompleteCoordinates;
  hydroxide: CompleteCoordinates;
}

export interface Dissociation {
  carbonicAcid: CompleteCoordinates;
  hydrogen: CompleteCoordinates;
}

export interface AllAnimationsCycleType {
  co2Migration: Migration;
  carbonicAcidFormation: Formation;
  carbonicAcidDissociation: Dissociation;
  reverseDissociation: Dissociation;
  reverseFormation: Formation;
  reverseMigration: Migration;
}

export interface CarbonDioxideCycleType {
  co2Migration: Migration;
  waterBegins: Point;
  carbonicAcidEnds: PointWithoutRotation;
  hydrogenEnds: PointWithoutRotation;
  deProtonates: boolean;
}

export interface SliderMoleculesType {
  formsCarbonicAcid: boolean;
  showCarbonDioxide: boolean;
  carbonDioxide: CompleteCoordinates;
  waterBegins: Point;
}

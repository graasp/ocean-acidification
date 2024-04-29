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

interface ReactiveSliderMolecules {
  carbonDioxide: CompleteCoordinates;
  waterBegins: Point;
  carbonicAcidEnds: PointWithoutRotation;
  hydrogenEnds: PointWithoutRotation;
}

interface ReactiveSliderMoleculesProperties {
  beginsAt: number;
  reverse: boolean;
  showCycle: boolean;
}

export interface ReactiveSliderMoleculesType {
  molecules: ReactiveSliderMolecules;
  properties: ReactiveSliderMoleculesProperties;
}

export interface StaticSliderMoleculesType {
  coordinates: Point;
  show: boolean;
}

export interface MoleculeCounts {
  co2Air: number;
  co2Water: number;
  carbonicAcid: number;
  hydrogen: number;
  bicarbonate: number;
}

interface ArrowsState {
  down: boolean;
  up: boolean;
}

export interface AllArrowsState {
  top: ArrowsState;
  middle: ArrowsState;
  bottom: ArrowsState;
}

export interface MoleculeCenter {
  x: number;
  y: number;
}

export type Coordinate = 'x' | 'y' | 'rotation';

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

interface ActiveMolecules {
  carbonDioxide: CompleteCoordinates;
  waterBegins: Point;
  carbonicAcidEnds: PointWithoutRotation;
  hydrogenEnds: PointWithoutRotation;
}

interface ActiveMoleculesProperties {
  beginsAt: number;
  reverse: boolean;
  showCycle: boolean;
  formsCarbonicAcid: boolean;
  deprotonates: boolean;
}

export interface ActiveMoleculesType {
  molecules: ActiveMolecules;
  properties: ActiveMoleculesProperties;
}

export interface StaticCarbonDioxidesType {
  coordinates: Point;
  show: boolean;
}

export interface Co2Counts {
  co2Air: number;
  co2Water: number;
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

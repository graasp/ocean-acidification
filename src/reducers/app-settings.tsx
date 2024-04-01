import { PERCENT_HOLES_INCREMENT } from '@/constants/canvas';
import { SLIDER_MOLECULES } from '@/constants/motion/slider-molecules';
import { DEFAULT_CO2, DEFAULT_YEAR } from '@/constants/side-menu';
import { CONTINUOUS, SEQUENTIAL } from '@/constants/strings';
import { computeEquilibriumDistribution } from '@/utils/molecules';
import { SliderMoleculesType } from '@/utils/molecules/types';

import {
  DECREMENT_REEF_HOLES,
  INCREMENT_INTERVAL_COUNT,
  INCREMENT_REEF_HOLES,
  RESET_SETTINGS,
  SET_ANIMATION_INDEX,
  SET_CARBON_DIOXIDE,
  SET_DIMENSIONS,
  SET_SLIDER_MOLECULES,
  SET_YEAR,
  TOGGLE_ANIMATION_IN_MOTION,
  TOGGLE_MODE,
  TOGGLE_PLAY,
  TOGGLE_SHOW_SHELLS,
} from '../types/app-settings';

type Dimensions = {
  width: number;
  height: number;
};
export interface appSettingsType {
  dimensions: Dimensions;
  intervalCount: number;
  isPlaying: boolean;
  reefHoles: number;
  mode: string;
  animationIndex: number;
  animationInMotion: boolean;
  showShells: boolean;
  sliderMolecules: SliderMoleculesType[];
  year: string;
  carbonDioxide: number;
}

export interface appSettingsActionType {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

export const initialAppSettings = {
  dimensions: { width: 0, height: 0 },
  intervalCount: 0,
  isPlaying: false,
  reefHoles: 0,
  mode: SEQUENTIAL,
  animationIndex: 0,
  animationInMotion: false,
  showShells: false,
  sliderMolecules: computeEquilibriumDistribution(
    SLIDER_MOLECULES,
    DEFAULT_CO2,
  ),
  year: DEFAULT_YEAR,
  carbonDioxide: DEFAULT_CO2,
};

export const appSettingsReducer = (
  state: appSettingsType,
  action: appSettingsActionType,
): appSettingsType => {
  const { type, payload } = action;
  switch (type) {
    case SET_DIMENSIONS:
      return { ...state, dimensions: payload };
    case TOGGLE_PLAY:
      return { ...state, isPlaying: !state.isPlaying };
    case INCREMENT_INTERVAL_COUNT:
      return { ...state, intervalCount: state.intervalCount + 1 };
    case RESET_SETTINGS:
      return {
        ...initialAppSettings,
        dimensions: { ...state.dimensions },
        mode: state.mode,
      };
    case DECREMENT_REEF_HOLES: {
      const updatedHoles = Math.max(
        state.reefHoles - PERCENT_HOLES_INCREMENT,
        0,
      );
      return { ...state, reefHoles: updatedHoles };
    }
    case INCREMENT_REEF_HOLES: {
      const updatedHoles = Math.min(
        state.reefHoles + PERCENT_HOLES_INCREMENT,
        1,
      );
      return { ...state, reefHoles: updatedHoles };
    }
    case TOGGLE_MODE: {
      return {
        ...state,
        mode: state.mode === SEQUENTIAL ? CONTINUOUS : SEQUENTIAL,
        intervalCount: 0,
        animationIndex: 0,
        isPlaying: false,
      };
    }
    case SET_ANIMATION_INDEX: {
      return { ...state, animationIndex: payload };
    }
    case TOGGLE_ANIMATION_IN_MOTION: {
      return { ...state, animationInMotion: !state.animationInMotion };
    }
    case TOGGLE_SHOW_SHELLS: {
      return { ...state, showShells: !state.showShells };
    }
    case SET_SLIDER_MOLECULES: {
      return { ...state, sliderMolecules: payload };
    }
    case SET_YEAR: {
      return { ...state, year: payload };
    }
    case SET_CARBON_DIOXIDE: {
      return { ...state, carbonDioxide: payload };
    }
    default:
      return state;
  }
};

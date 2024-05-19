import { MOTION_INTERVAL } from '@/constants/motion/motion-intervals';
import { DEFAULT_CO2 } from '@/constants/side-menu';
import { ACTIVE_CO2_DISTRIBUTION } from '@/constants/slider-molecules/active-molecules';
import { CONTINUOUS, SEQUENTIAL } from '@/constants/strings';
import { computeEquilibriumDistribution } from '@/utils/molecules';
import { ActiveMoleculesType } from '@/utils/molecules/types';

import {
  INCREMENT_INTERVAL_COUNT,
  RESET_SETTINGS,
  SET_ANIMATION_INDEX,
  SET_DIMENSIONS,
  SET_DISEQUILIBRIUM_CYCLES_BEGIN_AT,
  SET_DISTRIBUTION,
  SET_EQUILIBRIUM_CARBON_DIOXIDE,
  SET_INTERVAL_COUNT_DIRECTLY,
  SET_SLIDER_CARBON_DIOXIDE,
  TOGGLE_ANIMATION_IN_MOTION,
  TOGGLE_MODE,
  TOGGLE_PLAY,
  TOGGLE_SHOW_SCALE,
} from '../types/app-settings';

type Dimensions = {
  width: number;
  height: number;
};
export interface appSettingsType {
  dimensions: Dimensions;
  intervalCount: number;
  isPlaying: boolean;
  mode: string;
  animationIndex: number;
  animationInMotion: boolean;
  showScale: boolean;
  activeMoleculeDistribution: ActiveMoleculesType[];
  sliderCarbonDioxide: number;
  equilibriumCarbonDioxide: number;
  disequilibriumCyclesBeginAt: number;
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
  mode: SEQUENTIAL,
  animationIndex: 0,
  animationInMotion: false,
  showScale: false,
  activeMoleculeDistribution: computeEquilibriumDistribution(
    ACTIVE_CO2_DISTRIBUTION,
    DEFAULT_CO2,
  ),
  sliderCarbonDioxide: DEFAULT_CO2,
  equilibriumCarbonDioxide: DEFAULT_CO2,
  disequilibriumCyclesBeginAt: 0,
};

export const appSettingsReducer = (
  state: appSettingsType,
  action: appSettingsActionType,
): appSettingsType => {
  const { type, payload } = action;
  switch (type) {
    case SET_DIMENSIONS:
      return { ...state, dimensions: payload };
    case TOGGLE_PLAY: {
      const { isPlaying, intervalCount } = state;
      let excessIntervals = 0;
      if (isPlaying && intervalCount % MOTION_INTERVAL !== 0) {
        excessIntervals = intervalCount % MOTION_INTERVAL;
      }
      return {
        ...state,
        isPlaying: !state.isPlaying,
        intervalCount: intervalCount - excessIntervals,
      };
    }
    case INCREMENT_INTERVAL_COUNT:
      return { ...state, intervalCount: state.intervalCount + 1 };
    case RESET_SETTINGS:
      return {
        ...initialAppSettings,
        dimensions: { ...state.dimensions },
        mode: state.mode,
      };
    case TOGGLE_MODE: {
      return {
        ...initialAppSettings,
        dimensions: { ...state.dimensions },
        mode: state.mode === SEQUENTIAL ? CONTINUOUS : SEQUENTIAL,
      };
    }
    case SET_ANIMATION_INDEX: {
      return { ...state, animationIndex: payload };
    }
    case TOGGLE_ANIMATION_IN_MOTION: {
      return { ...state, animationInMotion: !state.animationInMotion };
    }
    case TOGGLE_SHOW_SCALE: {
      return { ...state, showScale: !state.showScale };
    }
    case SET_SLIDER_CARBON_DIOXIDE: {
      return { ...state, sliderCarbonDioxide: payload };
    }
    case SET_DISTRIBUTION: {
      return { ...state, activeMoleculeDistribution: payload };
    }
    case SET_EQUILIBRIUM_CARBON_DIOXIDE: {
      return { ...state, equilibriumCarbonDioxide: payload };
    }
    case SET_DISEQUILIBRIUM_CYCLES_BEGIN_AT: {
      return { ...state, disequilibriumCyclesBeginAt: payload };
    }
    case SET_INTERVAL_COUNT_DIRECTLY: {
      return { ...state, intervalCount: payload };
    }
    default:
      return state;
  }
};

import { PERCENT_HOLES_INCREMENT } from '@/constants/canvas';
import { CONTINUOUS, SEQUENTIAL } from '@/constants/strings';

import {
  DECREMENT_REEF_HOLES,
  INCREMENT_INTERVAL_COUNT,
  INCREMENT_REEF_HOLES,
  RESET_SETTINGS,
  SET_ANIMATION_INDEX,
  SET_DIMENSIONS,
  TOGGLE_ANIMATION_IN_MOTION,
  TOGGLE_MODE,
  TOGGLE_PAUSE,
} from '../types/app-settings';

type Dimensions = {
  width: number;
  height: number;
};
export interface appSettingsType {
  dimensions: Dimensions;
  intervalCount: number;
  isPaused: boolean;
  reefHoles: number;
  mode: string;
  animationIndex: number;
  animationInMotion: boolean;
}

export interface appSettingsActionType {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

export const initialAppSettings = {
  dimensions: { width: 0, height: 0 },
  intervalCount: 0,
  isPaused: true,
  reefHoles: 0,
  mode: SEQUENTIAL,
  animationIndex: 0,
  animationInMotion: false,
};

export const appSettingsReducer = (
  state: appSettingsType,
  action: appSettingsActionType,
): appSettingsType => {
  const { type, payload } = action;
  switch (type) {
    case SET_DIMENSIONS:
      return { ...state, dimensions: payload };
    case TOGGLE_PAUSE:
      return { ...state, isPaused: !state.isPaused };
    case INCREMENT_INTERVAL_COUNT:
      return { ...state, intervalCount: state.intervalCount + 1 };
    case RESET_SETTINGS:
      return { ...initialAppSettings, dimensions: { ...state.dimensions } };
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
      };
    }
    case SET_ANIMATION_INDEX: {
      return { ...state, animationIndex: payload };
    }
    case TOGGLE_ANIMATION_IN_MOTION: {
      return { ...state, animationInMotion: !state.animationInMotion };
    }
    default:
      return state;
  }
};

import {
  INCREMENT_INTERVAL_COUNT,
  RESET_SETTINGS,
  TOGGLE_PAUSE,
} from '../types/app-settings';

export interface appSettingsType {
  intervalCount: number;
  isPaused: boolean;
}

export interface appSettingsActionType {
  type: string;
}

export const initialAppSettings = { intervalCount: 0, isPaused: true };

export const appSettingsReducer = (
  state: appSettingsType,
  action: appSettingsActionType,
): appSettingsType => {
  const { type } = action;
  switch (type) {
    case TOGGLE_PAUSE:
      return { ...state, isPaused: !state.isPaused };
    case INCREMENT_INTERVAL_COUNT:
      return { ...state, intervalCount: state.intervalCount + 1 };
    case RESET_SETTINGS:
      return { ...initialAppSettings };
    default:
      return state;
  }
};

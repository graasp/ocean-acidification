import { appSettingsActionType } from '@/reducers/app-settings';
import {
  DECREMENT_REEF_HOLES,
  INCREMENT_INTERVAL_COUNT,
  INCREMENT_REEF_HOLES,
  RESET_SETTINGS,
  SET_ANIMATION_INDEX,
  SET_DIMENSIONS,
  SET_DISEQUILIBRIUM_CYCLES_BEGIN_AT,
  SET_DISTRIBUTION,
  SET_EQUILIBRIUM_CARBON_DIOXIDE,
  SET_SLIDER_CARBON_DIOXIDE,
  SET_YEAR,
  TOGGLE_ANIMATION_IN_MOTION,
  TOGGLE_MODE,
  TOGGLE_PLAY,
  TOGGLE_SHOW_SHELLS,
} from '@/types/app-settings';
import { ActiveSliderMoleculesType } from '@/utils/molecules/types';

interface Dimensions {
  width: number;
  height: number;
}

export const setDimensions = (payload: Dimensions): appSettingsActionType => ({
  type: SET_DIMENSIONS,
  payload,
});

export const togglePlay = (): appSettingsActionType => ({
  type: TOGGLE_PLAY,
});

export const incrementIntervalCount = (): appSettingsActionType => ({
  type: INCREMENT_INTERVAL_COUNT,
});

export const resetSettings = (): appSettingsActionType => ({
  type: RESET_SETTINGS,
});

export const incrementReefHoles = (): appSettingsActionType => ({
  type: INCREMENT_REEF_HOLES,
});

export const decrementReefHoles = (): appSettingsActionType => ({
  type: DECREMENT_REEF_HOLES,
});

export const toggleMode = (): appSettingsActionType => ({
  type: TOGGLE_MODE,
});

export const setAnimationIndex = (payload: number): appSettingsActionType => ({
  type: SET_ANIMATION_INDEX,
  payload,
});

export const toggleAnimationInMotion = (): appSettingsActionType => ({
  type: TOGGLE_ANIMATION_IN_MOTION,
});

export const toggleShowShells = (): appSettingsActionType => ({
  type: TOGGLE_SHOW_SHELLS,
});

export const setDistribution = (
  payload: ActiveSliderMoleculesType[],
): appSettingsActionType => ({
  type: SET_DISTRIBUTION,
  payload,
});

export const setYear = (payload: string): appSettingsActionType => ({
  type: SET_YEAR,
  payload,
});

export const setSliderCarbonDioxide = (
  payload: number,
): appSettingsActionType => ({
  type: SET_SLIDER_CARBON_DIOXIDE,
  payload,
});

export const setEquilibriumCarbonDioxide = (
  payload: number,
): appSettingsActionType => ({
  type: SET_EQUILIBRIUM_CARBON_DIOXIDE,
  payload,
});

export const setDisequilibriumCyclesBeginAt = (
  payload: number,
): appSettingsActionType => ({
  type: SET_DISEQUILIBRIUM_CYCLES_BEGIN_AT,
  payload,
});

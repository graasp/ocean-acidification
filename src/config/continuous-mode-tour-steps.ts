import i18n from './i18n';

const CONTINUOUS_MODE_TOUR_STEPS = [
  {
    target: '.continuous-mode-1',
    content: i18n.t(
      'Continuous mode simulates all the chemical reactions seen in Sequential mode occurring simultaneously',
    ),
    disableBeacon: true,
  },
  {
    target: '.continuous-mode-2',
    content: i18n.t(
      'Press Play to start the simulation and let the molecules interact',
    ),
  },
  {
    target: '.continuous-mode-3',
    content: i18n.t(
      'This table shows the number of molecules of each chemical species visible on the screen',
    ),
  },
  {
    target: '.continuous-mode-4',
    content: 'This scale indicates whether the system is at equilibrium or not',
  },
  {
    target: '.continuous-mode-5',
    content: i18n.t(
      'To alter the CO₂ concentration in the air, stop the simulation, adjust the the CO₂ level using this slider or by choosing a new concentration from the presets below, then click Play to see how it affects the reactions',
    ),
  },
  {
    target: '.continuous-mode-6',
    content: i18n.t(
      'There are three preset values for the CO₂ concentration in ppm; the first two correspond to the measured values of those years, while the third is a predicted future level',
    ),
  },
  {
    target: '.continuous-mode-7',
    content: i18n.t(
      'The water pH and its potential effects on corals, shells, and aquatic animals are shown when this switch is on',
    ),
  },
] as const;

export const CONTINUOUS_TOUR_INITIAL_STATE = {
  run: false,
  continuous: true,
  stepIndex: 0,
  steps: CONTINUOUS_MODE_TOUR_STEPS,
};

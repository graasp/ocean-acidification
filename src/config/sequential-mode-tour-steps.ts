import i18n from './i18n';

const SEQUENTIAL_MODE_TOUR_STEPS = [
  {
    target: '.sequential-mode-1',
    content: i18n.t(
      'Sequential mode simulates the different reactions that occur in the air and in the water one step at a time',
    ),
    disableBeacon: true,
  },
  {
    target: '.sequential-mode-2',
    content: i18n.t(
      'Each time this button is pressed, one step of the reaction cycle occurs',
    ),
  },
  {
    target: '.sequential-mode-3',
    content: i18n.t(
      'The chemical equations associated with each reaction can be displayed with this switch',
    ),
  },
  {
    target: '.sequential-mode-4',
    content: i18n.t(
      'Switch to Continuous mode to simulate all reactions occurring simultaneously',
    ),
  },
];

const updateTranslations = (): void => {
  SEQUENTIAL_MODE_TOUR_STEPS.forEach((step, index) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const translatedStep = i18n.t<any>(step.content);
    SEQUENTIAL_MODE_TOUR_STEPS[index].content = translatedStep;
  });
};

if (i18n.isInitialized) {
  updateTranslations();
}

i18n.on('languageChanged', () => {
  updateTranslations();
});

export const SEQUENTIAL_TOUR_INITIAL_STATE = {
  run: false,
  continuous: true,
  stepIndex: 0,
  steps: SEQUENTIAL_MODE_TOUR_STEPS,
};

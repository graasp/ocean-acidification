import { useContext } from 'react';
import { Group } from 'react-konva';

import { STATIC_CO2_DISTRIBUTION } from '@/constants/slider-molecules/static-slider-molecules';
import { AppSettingsContext } from '@/contexts/AppSettingsProvider';
import { computeStaticDistribution } from '@/utils/molecules';

import CarbonDioxide from '../molecules/CarbonDioxide';

const StaticSliderMolecules = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions, sliderCarbonDioxide } = state;
  const { width, height } = dimensions;

  return (
    <Group>
      {computeStaticDistribution(
        STATIC_CO2_DISTRIBUTION,
        sliderCarbonDioxide,
      ).map(({ coordinates, show }, index) =>
        show ? (
          <CarbonDioxide
            x={coordinates.x * width}
            y={coordinates.y * height}
            rotation={coordinates.rotation}
            key={index}
          />
        ) : null,
      )}
    </Group>
  );
};

export default StaticSliderMolecules;

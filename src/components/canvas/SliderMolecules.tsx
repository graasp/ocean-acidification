import { useContext } from 'react';
import { Group } from 'react-konva';

import { AppSettingsContext } from '@/contexts/AppSettingsProvider';

import CarbonDioxide from './molecules/CarbonDioxide';
import CarbonDioxideCycle from './motion/CarbonDioxideCycle';

const SliderMolecules = (): JSX.Element => {
  const { state } = useContext(AppSettingsContext);
  const { dimensions, sliderMolecules } = state;
  const { width, height } = dimensions;

  return (
    <Group>
      {sliderMolecules.map((sliderMolecule, index) => {
        const { carbonDioxide } = sliderMolecule.molecules;
        const { formsCarbonicAcid, showInertCarbonDioxide } =
          sliderMolecule.properties;

        return (
          <Group key={index}>
            {showInertCarbonDioxide && !formsCarbonicAcid ? (
              <CarbonDioxide
                x={carbonDioxide.begins.x * width}
                y={carbonDioxide.begins.y * height}
                rotation={carbonDioxide.begins.rotation}
              />
            ) : null}
            {formsCarbonicAcid ? (
              <CarbonDioxideCycle sliderMolecule={sliderMolecule} />
            ) : null}
          </Group>
        );
      })}
    </Group>
  );
};

export default SliderMolecules;

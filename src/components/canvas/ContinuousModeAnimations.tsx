import MoleculesMovementCycle from './motion/MoleculesMovementCycle';

const ContinuousModeAnimations = (): JSX.Element => {
  const intervals = [0, 0, 0, 0, 0, 0];
  return <MoleculesMovementCycle intervals={intervals} />;
};

export default ContinuousModeAnimations;

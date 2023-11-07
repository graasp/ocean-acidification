import { PLAYER_VIEW_CY } from '@/config/selectors';

const PlayerView = (): JSX.Element => (
  // console.log('helllllo');
  // return (
  <div
    data-cy={PLAYER_VIEW_CY}
    style={{ height: '100vh', width: '100vw', backgroundColor: 'pink' }}
  >
    <p>Hello World!</p>
  </div>
);

export default PlayerView;

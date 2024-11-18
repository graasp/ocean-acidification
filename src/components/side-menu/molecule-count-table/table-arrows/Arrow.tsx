import {
  LARGE_ARROW_WIDTH,
  REG_ARROW_WIDTH,
  TABLE_ACTIVE_ANIMATION,
} from '@/constants/side-menu';
import { EMPTY_STRING } from '@/constants/strings';
import { determineImgSrc } from '@/utils/side-menu';

interface Props {
  direction: string;
  isActive: boolean;
  isLarge?: boolean;
}

const Arrow = ({ direction, isActive, isLarge }: Props): JSX.Element => {
  const blink = isActive ? TABLE_ACTIVE_ANIMATION : EMPTY_STRING;
  const style = {
    width: isLarge || isActive ? LARGE_ARROW_WIDTH : REG_ARROW_WIDTH,
    ...blink,
  };
  const src = determineImgSrc(direction, isActive, isLarge);

  return <img src={src} alt="arrow" style={style} />;
};

export default Arrow;

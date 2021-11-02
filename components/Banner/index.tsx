import BannerImage from 'assets/Banner.svg';
import * as S from './styles';

const Banner = (): JSX.Element => {
  return (
    <S.BannerWrap>
      <BannerImage />
    </S.BannerWrap>
  );
};

export default Banner;

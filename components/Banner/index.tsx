import Image from 'next/image';
import * as S from './styles';
import BannerImg from 'public/static/Banner.jpg';

const Banner = (): JSX.Element => {
  return (
    <S.BannerWrap>
      <Image src={BannerImg} alt="Banner" width={1410} height={170} />
    </S.BannerWrap>
  );
};

export default Banner;

import Image from 'next/image';
import BannerImage from 'assets/Banner.png';
import * as S from './styles';

const Banner = (): JSX.Element => {
  return (
    <S.BannerWrap>
      <Image src={BannerImage.src} alt="Banner" width={1410} height={170} />
    </S.BannerWrap>
  );
};

export default Banner;

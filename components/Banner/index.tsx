import Image from 'next/image';
import BannerImg from 'public/static/Banner.png';
import * as S from './styles';

const Banner = (): JSX.Element => {
  const prefix =
    process.env.NODE_ENV === 'production' ? 'http://dgit.b1nd.com' : '';
  return (
    <S.BannerWrap>
      <Image
        src={`${prefix}${BannerImg.src}`}
        alt="Banner"
        width={1410}
        height={170}
      />
    </S.BannerWrap>
  );
};

export default Banner;

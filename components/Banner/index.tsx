import Image from 'next/image';
import BannerImage from 'assets/Banner.png';
import * as S from './styles';

const Banner = ({ prefix }: { prefix: string }): JSX.Element => {
  return (
    <S.BannerWrap>
      <Image
        src={`${prefix}${BannerImage.src}`}
        alt="Banner"
        width={1410}
        height={170}
      />
    </S.BannerWrap>
  );
};

export default Banner;

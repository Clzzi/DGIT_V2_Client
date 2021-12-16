import * as S from './styles';

const Banner = (): JSX.Element => {
  return (
    <S.BannerWrap>
      <div>
        <S.Title>Dgsw Github Rank</S.Title>
        <S.Content>
          대구 소프트웨어고등학교의 학생의 기여도 순위를 표시합니다.
        </S.Content>
      </div>
    </S.BannerWrap>
  );
};

export default Banner;

import * as S from './styles';
import useNav from 'hooks/nav/useNav';
import NavButton from './NavButton';
import Theme from 'components/Theme';

const Nav = (): JSX.Element => {
  const [nav, onChangeNav] = useNav();

  return (
    <S.Nav>
      <S.NavContent>
        <S.NavButtonWrap>
          <NavButton
            title="종합"
            showing={nav === '종합'}
            click={() => {
              onChangeNav('종합');
            }}
          />
          <NavButton
            title="주간"
            showing={nav === '주간'}
            click={() => {
              onChangeNav('주간');
            }}
          />
          <NavButton
            title="주간기록"
            showing={nav === '주간기록'}
            click={() => {
              onChangeNav('주간기록');
            }}
          />
        </S.NavButtonWrap>
        <Theme />
      </S.NavContent>
    </S.Nav>
  );
};

export default Nav;

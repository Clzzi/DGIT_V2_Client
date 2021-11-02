import * as S from './styles';
import NavButton from './NavButton';
import useNav from 'hooks/nav/useNav';
import Filter from 'components/common/Filter';

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
        <Filter />
      </S.NavContent>
    </S.Nav>
  );
};

export default Nav;

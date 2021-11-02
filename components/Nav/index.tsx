import * as S from './styles';
import { useState } from 'react';
import NavButton from './NavButton';
import { TNav } from 'types/common.type';
import Filter from 'components/common/Filter';

const Nav = (): JSX.Element => {
  const [navState, setNavState] = useState<TNav>('종합');
  // 나중에 navState Hooks만들어서 state, handler 가져와주기
  return (
    <S.Nav>
      <S.NavContent>
        <S.NavButtonWrap>
          <NavButton
            title="종합"
            showing={navState === '종합'}
            click={() => {
              setNavState('종합');
            }}
          />
          <NavButton
            title="주간"
            showing={navState === '주간'}
            click={() => {
              setNavState('주간');
            }}
          />
          <NavButton
            title="주간기록"
            showing={navState === '주간기록'}
            click={() => {
              setNavState('주간기록');
            }}
          />
        </S.NavButtonWrap>
        <Filter />
      </S.NavContent>
    </S.Nav>
  );
};

export default Nav;

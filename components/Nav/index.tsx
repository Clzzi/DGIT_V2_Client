import { useState } from 'react';
import { TNav } from 'types/common.type';
import NavButton from './NavButton';
import * as S from './styles';

const Nav = (): JSX.Element => {
  const [navState, setNavState] = useState<TNav>('종합');
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
        {/* filter */}
      </S.NavContent>
    </S.Nav>
  );
};

export default Nav;

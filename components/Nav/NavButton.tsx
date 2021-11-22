import { memo } from 'react';
import { INavButton } from 'types/common.type';
import * as S from './styles';

const NavButton = ({ title, showing, click }: INavButton): JSX.Element => {
  return (
    <S.NavButton showing={showing} onClick={click}>
      <div>{title}</div>
    </S.NavButton>
  );
};

export default memo(NavButton);

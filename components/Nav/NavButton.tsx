import * as S from './styles';

interface INavButton {
  title: string;
  showing: boolean;
  click: () => void;
}

const NavButton = ({ title, showing, click }: INavButton): JSX.Element => {
  return (
    <S.NavButton showing={showing} onClick={click}>
      <div>{title}</div>
    </S.NavButton>
  );
};

export default NavButton;

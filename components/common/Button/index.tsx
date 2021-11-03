import { IButton } from 'types/common.type';
import * as S from './styles';

const Button: React.FC<IButton> = ({
  message,
  fontColor,
  backgroundColor,
  click,
  customStyle,
}): JSX.Element => {
  return (
    <S.Button
      fontColor={fontColor}
      backgroundColor={backgroundColor}
      customStyle={customStyle}
      onClick={click}>
      {message}
    </S.Button>
  );
};

export default Button;

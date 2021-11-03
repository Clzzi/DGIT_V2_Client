import * as S from './styles';
import { IModal } from 'types/common.type';
import { useEffect } from 'react';
import useModal from 'hooks/modal/useModal';

const Modal = ({
  children,
  set,
  width = '750px',
  height = '474px',
}: IModal): JSX.Element => {
  const [el, clickOutside] = useModal(set);

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [clickOutside]);

  return (
    <S.ModalBackground>
      <S.Modal ref={el} style={{ width, height }}>
        {children}
      </S.Modal>
    </S.ModalBackground>
  );
};

export default Modal;

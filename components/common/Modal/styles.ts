import styled from 'styled-components';

export const Modal = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  border-radius: 10px;
  max-width: 1060px;
  max-height: 680px;
  min-height: 350px;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.modalBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

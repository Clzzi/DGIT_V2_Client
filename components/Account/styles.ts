import styled from 'styled-components';
import { FontConfig } from 'styles/FontConfig';

export const Account = styled.div`
  width: 554px;
  height: 313px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: ${(props) => props.theme.modalContent};
  font-size: ${FontConfig.font30};
  font-weight: bold;
`;

export const Content = styled.div`
  width: 100%;
  height: 89px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: start;
`;

export const SubTitle = styled.div<{ showing: boolean }>`
  width: 100%;
  text-align: start;
  color: ${(props) => props.theme.modalSubTitle};
  opacity: ${(props) => (props.showing ? 1 : 0)};
  font-size: ${FontConfig.font18};
  transition: 0.2s ease-in-out;
`;

export const Input = styled.input`
  width: 100%;
  color: ${(props) => props.theme.modalContent};
  font-size: ${FontConfig.font24};
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.modalBorder};
  padding-bottom: 14px;
  font-weight: bold;
  &::placeholder {
    font-size: ${FontConfig.font24};
    font-weight: 400;
    color: ${(props) => props.theme.modalSubTitle};
  }
`;

export const Button = styled.div<{ showing: boolean }>`
  width: 72px;
  height: 40px;
  font-size: ${FontConfig.font18};
  color: ${(props) =>
    props.showing ? props.theme.modalContent : props.theme.modalBorder};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
  background-color: ${(props) => props.theme.background};
  cursor: pointer;
  transition: 0.2s ease-in-out;
  font-weight: bold;
`;

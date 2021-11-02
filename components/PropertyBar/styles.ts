import styled from 'styled-components';

const returnPropertyWidth = (number: number): string => {
  switch (number) {
    case 0:
      return '136px';
    case 1:
      return '91px';
    case 2:
      return '136px';
    case 3:
      return '159px';
    case 4:
      return '151px';
    default:
      return 'auto';
  }
};

export const PropertyBar = styled.section`
  width: 100vw;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const PropertyBarContent = styled.div`
  width: 1410px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme.mainPropertyBackground};
  border-radius: 8px;
`;

export const Property = styled.div<{ number: number }>`
  height: 100%;
  width: ${(props) => returnPropertyWidth(props.number)};
  color: ${(props) => props.theme.mainProperty};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

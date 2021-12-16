import * as M from 'styles/moduleStyle';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset} 

  @font-face {
    font-family: 'SB AGGRO';
    font-weight: normal;
    src: url('/static/font/SB AGGRO.woff') format('woff');
  }
  
  @font-face {
    font-family: 'YiSunShin';
    font-weight: normal;
    src: url('/static/font/YiSunShin.woff') format('woff');
  }

    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family:  'Noto Sans KR', sans-serif !important;
    }

    a {
      text-decoration: none;
      outline: none;
    }
    
    a:hover,
    a:active,
    :visited,
    :link {
      text-decoration: none;
      color: ${({ theme }) => theme.mainContent}
    }
    ol,
    ul {
      list-style: none;
    }
    input {
      outline: none;
      &:focus {
        outline: none;
      }
    }

    body {
    ${M.selectNone};
    ${M.dragNone};
    background-color: ${({ theme }) => theme.background};
    min-height: 100vh;
    }
`;
export default GlobalStyle;

import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}
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
      color: ${(props) => props.theme.mainContent}
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
`;
export default GlobalStyle;

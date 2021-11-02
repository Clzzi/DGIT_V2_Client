import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
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

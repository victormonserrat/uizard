import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --color-black: #000000;
    --color-gray100: #f5f5f5;
    --color-gray200: #eeeeee;
    --color-gray300: #e0e0e0;
    --color-gray400: #bdbdbd;
    --color-gray500: #9e9e9e;
    --color-gray600: #757575;
    --color-gray700: #616161;
    --color-gray800: #424242;
    --color-gray900: #212121;
    --color-owlblue700: #0336ff;
    --color-pink500: #e91e63;
    --color-white: #ffffff;

    --font-primary: 'Roboto', sans-serif;
  }

  * {
    box-sizing: border-box;

    ::after,
    ::before {
      box-sizing: border-box;
    }
  }

  body {
    background-color: var(--color-gray100);
  }

  button {
    appearance: unset;
    background-color: unset;
    border: unset;
    color: unset;
    cursor: pointer;
    font: unset;
    margin: unset;
    outline: unset;
    padding: unset;
    user-select: none;
  }

  button:disabled {
    cursor: unset;
  }
`

export default GlobalStyle

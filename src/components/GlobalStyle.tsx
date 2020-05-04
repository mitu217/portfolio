import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

  @font-face {
    font-family: 'Press Start 2P';
    font-display: auto;
  }

  html {
    font-family: 'Press Start 2P';
    font-size: 62.5%;
  }

  h1 {
    margin: 24px 0;
    font-size: 3.6rem;
  }

  h2 {
    font-size: 3.2rem;
  }

  h3 {
    font-size: 2.4rem;
  }

  h4 {
    font-size: 2.0rem;
  }

  p {
    margin: 16px 0;
    font-size: 2.0rem;
  }

  a {
    text-decoration: none;
    font-size: 2.0rem;
  }
`;

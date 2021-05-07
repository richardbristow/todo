import { createGlobalStyle } from 'styled-components/macro';
import styledNormalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  body {
    font-family: Roboto, sans-serif, serif;
    background: #f8f9fb;
  }
`;

const globalTheme = {
  backgroundColor: '#f8f9fb',
  lightGrey: '#d3d7dd',
  darkerGrey: '#b6bdc7',
  darkestGrey: '#2c3139',
};

export { GlobalStyle, globalTheme };

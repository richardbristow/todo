import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components/macro';

import { GlobalStyle, globalTheme } from './theme/globalStyle';
import Todo from './Todo';

ReactDOM.render(
  <ThemeProvider theme={globalTheme}>
    <GlobalStyle />
    <Todo />
  </ThemeProvider>,
  document.getElementById('root'),
);

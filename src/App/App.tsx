import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from '~/styles';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div>APP</div>
  </ThemeProvider>
);

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Main } from '~/pages';
import { GlobalStyle, theme } from '~/styles';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </ThemeProvider>
);

export default App;

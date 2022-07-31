import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main } from 'src/pages';
import { GlobalStyle, theme } from 'src/styles';
import { ThemeProvider } from 'styled-components';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </ThemeProvider>
);

export default App;

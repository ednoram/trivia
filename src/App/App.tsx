import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Paths } from '~/constants';
import { GamePage, MainPage, ResultsPage } from '~/pages';
import { GlobalStyle, theme } from '~/styles';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Routes>
      <Route path={Paths.Main} element={<MainPage />} />
      <Route path={Paths.Game} element={<GamePage />} />
      <Route path={Paths.Results} element={<ResultsPage />} />
    </Routes>
  </ThemeProvider>
);

export default App;

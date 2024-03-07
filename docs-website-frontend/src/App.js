import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Layout from "./view/pages/layout/page";
import ScrollToTop from "./view/components/layout/scrollToTop/component";
import MainPage from "./view/pages/main/page";
import TablePage from "./view/pages/table/page";
import EggsPage from "./view/pages/eggs/page";

function App() {
  return (
      <>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<MainPage />} />
              <Route path="/tables/" element={<TablePage />} />
              <Route path="/eggs/" element={<EggsPage />} />
          </Route>
        </Routes>
      </>
  );
}

export default App;
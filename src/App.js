import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Attraction from './pages/attraction';


function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Attraction />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

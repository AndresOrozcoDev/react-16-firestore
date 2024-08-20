import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import City from './pages/City';


function App() {

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<City />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

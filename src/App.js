import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './Variables.css';

import City from './pages/City';


function App() {

  return (
    <BrowserRouter>
      <div className='bg-full'>
        <Routes>
          <Route path="/" element={<City />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

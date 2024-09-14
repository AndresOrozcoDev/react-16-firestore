import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './Variables.css';


import Home from './pages/home/Home';
import Add from './pages/add/Add';

function App() {

  return (
    <BrowserRouter>
      <div className='bg-full'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact={true} path="/grit-and-grace" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

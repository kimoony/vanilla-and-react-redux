import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Detail from './routers/Detail';
import Home from './routers/Home';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Detail />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

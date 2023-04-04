import { Component } from 'solid-js';
import { Route, Routes } from '@solidjs/router';
import Home from './pages/Home';
import Redirect from './pages/Redirect';

const App: Component = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:url' element={<Redirect />} />
      </Routes>
    </>
  )
};

export default App;

import './App.scss';
import React from 'react';
import { HashRouter, Link, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SliderPage from './pages/SliderPage';

function App() {
  return (
    <div className='App'>
      <h1>Hola amigos!</h1>

      <HashRouter>
        <div className='links'>
          <Link to='/'>HomePage</Link>
          <br />
          <Link to='/slider'>Slides</Link>
          <br />
        </div>

        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/slider' element={<SliderPage></SliderPage>}></Route>
        </Routes>
      </HashRouter>

    </div>
  );
}

export default App;

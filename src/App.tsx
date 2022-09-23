import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  Country,
  WorldMap
} from './components';
import './App.css'


export const App: FC = () => {
  return (
    <div>
      <h2>GeoLearnr</h2>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
          </ul>
        </nav>
        <hr />
        <main>
          <Routes>
            <Route path='/' element={<WorldMap/>}/>
            <Route path='/country/:country' element={<Country/>}/>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

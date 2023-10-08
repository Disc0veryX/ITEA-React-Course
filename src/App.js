import React from 'react';
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './components/General/Home';
import Popular from './components/Popular/Popular';
import Battle from './components/Battle/Battle';
import Nav from './components/General/Nav';
import Results from './components/Battle/Results';

export default class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='popular' element={<Popular />} />
          <Route path='battle' element={<Battle />} />
          <Route path='battle/results' element={<Results />} />
          <Route path='*' element={<main style={{ padding: "1rem" }}><p>There's nothing here!</p></main>} />
        </Routes>
      </HashRouter>
    );
  }
}
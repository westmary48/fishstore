import React from 'react';

import Auth from '../components/Auth/Auth';
import Home from '../components/Home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <div className="App">
        <Auth />
        <Home />
    </div>
  );
}

export default App;

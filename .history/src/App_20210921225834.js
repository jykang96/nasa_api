import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import NasaData from './components/NasaData';


function App() {
  return (
    <div id="container">
      <BrowserRouter>
          <Route component={NasaData} path="/" exact />
      </BrowserRouter>
    </div>
  );
}

export default App;

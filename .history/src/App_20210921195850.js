import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import NasaData from './components/NasaData';


function App() {
  return (
    <div id="container">
    <BrowserRouter>
        <Route component={Home} path="/" exact />
        <Route component={NasaData} path="/nasadata" />
    </BrowserRouter>
          </div>
  );
}

export default App;

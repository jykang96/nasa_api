import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import NasaData from './components/NasaData';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={Home} path="/" exact />
        <Route component={NasaData} path="/nasadata" />
      </div>
    </BrowserRouter>
  );
}

export default App;

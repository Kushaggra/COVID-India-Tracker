import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './components/covid-india'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div className="d-flex justify-content-between">
        <h1 className="">COVID-19 INDIA TRACKER</h1>
       </div>     
       <Data/>
      </header>
      
    </div>
  );
}

export default App;

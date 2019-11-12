import React from 'react';
import logo from './logo.svg';
import './App.css';
import MVChart from './MVChart.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>NYPD Moving Violations <small style={{fontSize: '8px' }}>v0.1</small></h2>
        <p>
          Select a Precinct or Bureau to get started
        </p>
        <MVChart />
        <small>Comments/Suggestions? email joe@urbaneoptics.com</small>
      <small>Data retrieved from <a href="https://github.com/UrbaneOptics/nyc-moving-violation-data">github.com/UrbaneOptics/nyc-moving-violation-data</a></small>
      </header>
      
    </div>
  );
}

export default App;

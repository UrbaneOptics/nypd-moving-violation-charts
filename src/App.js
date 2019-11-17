import React from 'react';
import './App.css';
import MVChart from './MVChart.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>NYPD Moving Violations <small style={{fontSize: '8px' }}>v0.2</small></h2>
        <p>Data retrieved from <a href="https://github.com/UrbaneOptics/nyc-moving-violation-data">github.com/UrbaneOptics/nyc-moving-violation-data</a></p>
      </header>   
      <div className="App-body">
        <MVChart />
      </div>
      <div className="App-footer">
      </div>
    </div>
  );
}

export default App;

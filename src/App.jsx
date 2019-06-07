import React from 'react';
import DateTimeZonePicker from './components/date-time-zone-picker';

// Styles
import './App.css';

function App() {
  return (
    <div className="main">
      <div className="docs-example">
        <DateTimeZonePicker setDate setTime setZone />
      </div>
    </div>
  );
}

export default App;

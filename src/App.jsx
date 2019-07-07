import React from 'react';
import DateTimeZonePicker from './date-time-zone-picker';

// Styles
import './App.css';

const mockApi = {
  // date: {
  //   year: 1975,
  //   month: 6,
  //   day: 20,
  // },
  // time: {
  //   hour: 1,
  //   minute: 2,
  //   second: 0,
  //   millisecond: 0,
  // },
  // zone: 'Australia/Sydney',
};

function App() {
  return (
    <div className="main">
      <div className="docs-example">
        <DateTimeZonePicker setDate setTime setZone value={mockApi} />
      </div>
    </div>
  );
}

export default App;

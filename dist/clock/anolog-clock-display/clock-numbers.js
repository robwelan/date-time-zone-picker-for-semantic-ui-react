import React from 'react';

const ClockNumbers = () => {
  const arrNumbers = [{
    start: 12,
    end: 6
  }, {
    start: 1,
    end: 7
  }, {
    start: 2,
    end: 8
  }, {
    start: 3,
    end: 9
  }, {
    start: 4,
    end: 10
  }, {
    start: 5,
    end: 11
  }];
  return arrNumbers.map((v, i) => {
    const f = i * 30;
    let deg = f;

    if (f < 100) {
      deg = `0${f}`;
    }

    if (f < 10) {
      deg = `00${f}`;
    }

    return (// nothing unique about index
      // eslint-disable-next-line react/no-array-index-key
      React.createElement("div", {
        className: `rotate-${deg}`,
        key: i
      }, React.createElement("div", {
        className: "start"
      }, v.start), React.createElement("div", {
        className: "end"
      }, v.end))
    );
  });
};

export { ClockNumbers as default };
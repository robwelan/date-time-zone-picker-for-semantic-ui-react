import React from 'react';

const ClockTicks = () => {
  const arrTicks = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
  ];

  return arrTicks.map((v, i) => {
    const f = v * 6;
    let deg = f;

    if (f < 100) {
      deg = `0${f}`;
    }

    if (f < 10) {
      deg = `00${f}`;
    }

    return (
      // nothing unique about index
      // eslint-disable-next-line react/no-array-index-key
      <div className={`rotate-${deg}`} key={i}>
        <div className="start" />
        <div className="end" />
      </div>
    );
  });
};

export { ClockTicks as default };

const getTimeFormat = (showMillisecond, showSecond, showTwentyFour) => {
  let format = '';
  const millisecond = showMillisecond ? 'SSS' : '';
  const minute = 'mm';
  const hour = showTwentyFour ? 'HH' : 'hh';
  const second = showSecond ? 'ss' : '';
  format = `${hour}:${minute}`;

  if (showSecond) {
    format = `${format}:${second}`;

    if (showMillisecond) {
      format = `${format}:${millisecond}`;
    }
  }

  if (!showTwentyFour) {
    format = `${format} a`;
  }

  return format;
};

export { getTimeFormat };
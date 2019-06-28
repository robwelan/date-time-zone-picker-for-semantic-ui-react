import {
  getDateFormat,
  getTimeFormat,
  getZoneFormat,
} from '../utilities/functions';

const FONT_SIZE = 14;
const PIXEL_TO_EM_FACTOR = 3;

const getTextWidthEstimate = (str, fontSize = 10) => {
  const widths = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0.2796875,
    0.2765625,
    0.3546875,
    0.5546875,
    0.5546875,
    0.8890625,
    0.665625,
    0.190625,
    0.3328125,
    0.3328125,
    0.3890625,
    0.5828125,
    0.2765625,
    0.3328125,
    0.2765625,
    0.3015625,
    0.5546875,
    0.5546875,
    0.5546875,
    0.5546875,
    0.5546875,
    0.5546875,
    0.5546875,
    0.5546875,
    0.5546875,
    0.5546875,
    0.2765625,
    0.2765625,
    0.584375,
    0.5828125,
    0.584375,
    0.5546875,
    1.0140625,
    0.665625,
    0.665625,
    0.721875,
    0.721875,
    0.665625,
    0.609375,
    0.7765625,
    0.721875,
    0.2765625,
    0.5,
    0.665625,
    0.5546875,
    0.8328125,
    0.721875,
    0.7765625,
    0.665625,
    0.7765625,
    0.721875,
    0.665625,
    0.609375,
    0.721875,
    0.665625,
    0.94375,
    0.665625,
    0.665625,
    0.609375,
    0.2765625,
    0.3546875,
    0.2765625,
    0.4765625,
    0.5546875,
    0.3328125,
    0.5546875,
    0.5546875,
    0.5,
    0.5546875,
    0.5546875,
    0.2765625,
    0.5546875,
    0.5546875,
    0.221875,
    0.240625,
    0.5,
    0.221875,
    0.8328125,
    0.5546875,
    0.5546875,
    0.5546875,
    0.5546875,
    0.3328125,
    0.5,
    0.2765625,
    0.5546875,
    0.5,
    0.721875,
    0.5,
    0.5,
    0.5,
    0.3546875,
    0.259375,
    0.353125,
    0.5890625,
  ];
  const avg = 0.5279276315789471;
  return (
    str
      .split('')
      .map(c =>
        c.charCodeAt(0) < widths.length ? widths[c.charCodeAt(0)] : avg
      )
      .reduce((cur, acc) => acc + cur) * fontSize
  );
};

const getClassNames = devClasses => {
  const classes = [''];

  if (devClasses !== '') {
    const customClasses = devClasses.split(' ');
    classes.push(...customClasses);
  }

  return classes;
};

const getInputProperties = (
  setDate,
  setMilliseconds,
  setSeconds,
  setTime,
  setTwentyFour,
  setValues,
  setZone
) => {
  let placeholder = '';
  let placeholderDate = '';
  let placeholderTime = '';
  let placeholderZone = '';
  let nWidth = 0;

  if (setDate || (!setDate && !setTime && !setZone)) {
    placeholderDate = getDateFormat();
  }

  if (setTime) {
    placeholderTime = getTimeFormat(setSeconds, setMilliseconds, setTwentyFour);
  }

  if ((setDate && setZone) || (setTime && setZone)) {
    placeholderZone = getZoneFormat();
  }

  if (setDate && setTime && setZone) {
    placeholder = `${placeholderDate} ${placeholderTime} ${placeholderZone}`;
  }

  if (setDate && setTime && !setZone) {
    placeholder = `${placeholderDate} ${placeholderTime}`;
  }

  if (setDate && !setTime && setZone) {
    placeholder = `${placeholderDate} ${placeholderZone}`;
  }

  if ((setDate && !setTime && !setZone) || (!setDate && !setTime && !setZone)) {
    placeholder = `${placeholderDate}`;
  }

  if (!setDate && setTime && setZone) {
    placeholder = `${placeholderTime} ${placeholderZone}`;
  }

  if (!setDate && setTime && !setZone) {
    placeholder = `${placeholderTime}`;
  }

  if (!setDate && !setTime && setZone) {
    placeholder = 'time zone';
  }

  if (setValues.changed && setValues.input.value !== '') {
    nWidth =
      getTextWidthEstimate(setValues.input.value, FONT_SIZE) / FONT_SIZE +
      PIXEL_TO_EM_FACTOR;
  } else {
    nWidth =
      getTextWidthEstimate(placeholder, FONT_SIZE) / FONT_SIZE +
      PIXEL_TO_EM_FACTOR;
  }

  return { placeholder: placeholder.toUpperCase(), width: `${nWidth}em` };
};

export { getClassNames, getInputProperties };

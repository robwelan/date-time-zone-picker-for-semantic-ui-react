const getValueOrMin = (min, value) =>
  Number.isNaN(parseInt(value, 10)) || value < min ? min : +value;

const getValueOrMax = (max, value) =>
  Number.isNaN(parseInt(value, 10)) || value > max ? max : +value;

const getSantisedValue = (min, max, value) => {
  let newValue = value;

  if (newValue > max) {
    newValue = min;
  }

  if (newValue < min) {
    newValue = max;
  }

  return newValue;
};

const getDecrement = (min, max, value, d) => {
  let newValue = getValueOrMin(min, value) - d;
  newValue = getSantisedValue(min, max, newValue);

  return newValue;
};

const getIncrement = (min, max, value, d) => {
  let newValue = getValueOrMax(max, value) + d;
  newValue = getSantisedValue(min, max, newValue);

  return newValue;
};

const getNumericOrMinOrMax = (min, max, value) => {
  let newValue = getValueOrMin(min, value);

  if (newValue > max) {
    newValue = max;
  }

  return newValue;
};

export { getDecrement, getIncrement, getNumericOrMinOrMax };

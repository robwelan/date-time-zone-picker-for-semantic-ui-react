import { ARRAY_OF_DAYS_BY_FIRST_LETTER as days } from './constants';

const getFirstDayNumber = first => {
  let number = 0; // sunday

  if (first.toLowerCase() === 'monday') {
    number = 1; // monday
  }

  return number;
};

const toEnd = (list, from, count) => {
  list.push(...list.splice(from, count));
  return list;
};

const getWeekDayOrder = first => {
  let processDays = [];

  if (first !== 0) {
    processDays = toEnd(days, first, first - 1);
  } else {
    processDays = days;
  }

  return processDays;
};

export { getFirstDayNumber, getWeekDayOrder };

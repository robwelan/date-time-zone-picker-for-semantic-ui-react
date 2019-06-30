import { getAllDaysBetween, getISODayOfWeek, getLastDayOfMonth } from '../../utilities/functions';
const MAX_DAYS = 6;
const WEEK_DAYS_AMOUNT = 7;

const getIsCurrentDay = (setDay, compareDay) => setDay === compareDay;

const getBorderMonths = (year, month) => {
  /*  Manage Month
        -   Month is stored as the actual month (eg. March equals 3)
        -   JavaScript uses an array starting from zero to manage month,
            meaning March actually equals 2.
  */
  const jsMonth = month - 1; //  Previous Month

  const lastYear = jsMonth === 0 ? year - 1 : year;
  const lastMonth = jsMonth === 0 ? 11 : jsMonth - 1; //  Next Month

  const nextYear = jsMonth === 11 ? year + 1 : year;
  const nextMonth = jsMonth === 11 ? 0 : jsMonth + 1;
  return {
    last: {
      year: lastYear,
      month: lastMonth
    },
    next: {
      year: nextYear,
      month: nextMonth
    }
  };
};

const getStartDayOfCalendarDisplay = (year, month, day) => {
  let startDay = day - getISODayOfWeek(year, month, day);

  if (day - startDay > MAX_DAYS) {
    startDay += WEEK_DAYS_AMOUNT;
  }

  return startDay;
};

const getDatesOfCalendarDisplay = (year, month, setFirstDay) => {
  //  Get Start Date of Calendar Display
  //  Get Last Date of Calendar Display
  const borderMonths = getBorderMonths(year, month);
  const {
    last: lastMonth,
    next: nextMonth
  } = borderMonths;
  const lastDayOfLastMonth = getLastDayOfMonth(lastMonth.year, lastMonth.month);
  const startDayOfCalendarDisplay = getStartDayOfCalendarDisplay(lastMonth.year, lastMonth.month, lastDayOfLastMonth);
  const lastDayOfCalendarDisplay = MAX_DAYS - getISODayOfWeek(nextMonth.year, nextMonth.month, 1) + setFirstDay + 1;
  const arrayOfDates = getAllDaysBetween(lastMonth.year, lastMonth.month, startDayOfCalendarDisplay, nextMonth.year, nextMonth.month, lastDayOfCalendarDisplay);
  return arrayOfDates;
};

export { getIsCurrentDay, getDatesOfCalendarDisplay };
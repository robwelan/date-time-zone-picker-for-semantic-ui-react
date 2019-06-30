//  Dependancies
import eachDay from 'date-fns/each_day';
import format from 'date-fns/format';
import getDate from 'date-fns/get_date';
import getDaysInMonth from 'date-fns/get_days_in_month';
import getISODay from 'date-fns/get_iso_day';
import getYear from 'date-fns/get_year';
import getMonth from 'date-fns/get_month';
import { formatToTimeZone } from 'date-fns-timezone/dist/formatToTimeZone';

const isUnique = (value, index, self) => self.indexOf(value) === index;

const getSafeDate = (year, month, day, hour, minute, second, millisecond) => {
  //  https://stackoverflow.com/questions/5863327/tips-for-working-with-pre-1000-a-d-dates-in-javascript
  const d = new Date(year, month, day, hour, minute, second, millisecond);
  d.setFullYear(year);
  return d;
};

const getFormattedOffset = (value, index, char) => `${value.substring(0, index)}${char}${value.substring(index)}`;

const replaceAllCharacters = (target, search, replace) => target.split(search).join(replace);

const roundDownToNearestFive = value => Math.floor(value / 5) * 5;

const getDateFormat = () => 'YYYY-MM-DD';

const getTimeFormat = (showSecond, showMillisecond, showTwentyFour) => {
  let formattedTime = '';
  const millisecond = showMillisecond ? 'SSS' : '';
  const minute = 'mm';
  const hour = showTwentyFour ? 'HH' : 'hh';
  const second = showSecond ? 'ss' : '';
  formattedTime = `${hour}:${minute}`;

  if (showSecond) {
    formattedTime = `${formattedTime}:${second}`;

    if (showMillisecond) {
      formattedTime = `${formattedTime}.${millisecond}`;
    }
  }

  if (!showTwentyFour) {
    formattedTime = `${formattedTime} a`;
  }

  return formattedTime;
};

const getFormattedDateLabel = (year, month, day) => {
  const lm = month > 0 ? month - 1 : month;
  const label = format(getSafeDate(year, lm, day, 0, 0, 0, 0), 'dddd, DD-MMM-YYYY');
  return label;
};

const getFormattedTimeLabel = (hour, minute, second, millisecond, showSecond, showMillisecond, showTwentyFour) => {
  const timeFormat = getTimeFormat(showMillisecond, showSecond, showTwentyFour);
  const date = new Date();
  const time = date.setHours(hour, minute, second, millisecond);
  const label = format(time, timeFormat);
  const formattedTime = {
    hour: Number(format(time, showTwentyFour ? 'H' : 'h')),
    minute,
    second,
    millisecond,
    meridiem: format(time, 'a'),
    label
  };
  return formattedTime;
};

const getLastDayOfMonth = (year, month) => {
  const lastDay = Number(getDaysInMonth(getSafeDate(year, month, 1, 0, 0, 0, 0)));
  return lastDay;
};

const getISODayOfWeek = (year, month, day) => getISODay(getSafeDate(year, month, day, 0, 0, 0, 0));

const getAllDaysBetween = (yearStart, monthStart, dayStart, yearEnd, monthEnd, dayEnd) => eachDay(getSafeDate(yearStart, monthStart, dayStart, 0, 0, 0, 0), getSafeDate(yearEnd, monthEnd, dayEnd, 0, 0, 0, 0));

const getYearFromDate = date => getYear(date);

const getMonthFromDate = date => getMonth(date);

const getDayOfMonthFromDate = date => getDate(date);

const getFormattedMonthNumber = date => Number(format(date, 'M'));

const getZoneFormat = () => '[GMT]Z (z)';

const getPickerTimeAsObject = (setTime, pickerTime, doTwentyFour, doSecond, doMillisecond) => {
  const {
    hour: timeHour,
    minute: timeMinute,
    second: timeSecond,
    millisecond: timeMillisecond
  } = pickerTime;
  let hour = 0;
  let minute = 0;
  let second = 0;
  let millisecond = 0;

  if (setTime) {
    hour = timeHour;
    minute = timeMinute;

    if (doSecond) {
      second = timeSecond;
    }

    if (doMillisecond) {
      millisecond = timeMillisecond;
    }
  }

  return {
    hour,
    minute,
    second,
    millisecond
  };
};

const getDateTimeObject = (setTime, pickerDate, pickerTime, doSecond, doMillisecond, doTwentyFour) => {
  const time = getPickerTimeAsObject(setTime, pickerTime, doTwentyFour, doSecond, doMillisecond);
  return {
    date: {
      year: pickerDate.year,
      month: pickerDate.month - 1,
      // JavaScript
      day: pickerDate.day
    },
    time
  };
};

const getDateTimeZoneObject = (setDate, setTime, setZone, pickerDate, pickerTime, pickerZone, doSecond, doMillisecond, doTwentyFour) => {
  let data = {};

  if (setDate) {
    const date = {
      year: pickerDate.year,
      month: pickerDate.month,
      day: pickerDate.day
    };
    data = { ...data,
      date: { ...date
      }
    };
  }

  if (setTime) {
    const time = getPickerTimeAsObject(setTime, pickerTime, doTwentyFour, doSecond, doMillisecond);
    data = { ...data,
      time: { ...time
      }
    };
  }

  if (setZone) {
    data = { ...data,
      zone: pickerZone
    };
  }

  return data;
};

const setTimeToTimeZone = (time, formatZone, zone) => formatToTimeZone(time, formatZone, zone);

const getCustomTimeFormat = (doSecond, doMillisecond, doTwentyFour, setDate, setTime, setZone) => {
  let customFormat = '';
  let zoneFormat = '';
  const dateFormat = getDateFormat();
  const timeFormat = getTimeFormat(doSecond, doMillisecond, doTwentyFour);

  if (setZone) {
    zoneFormat = ` ${getZoneFormat()}`;
  }

  if (setDate && setTime) {
    customFormat = `${dateFormat} ${timeFormat}${zoneFormat}`;
  } else {
    if (setDate) {
      customFormat = `${dateFormat}${zoneFormat}`;
    }

    if (setTime) {
      customFormat = `${timeFormat}${zoneFormat}`;
    }
  }

  return customFormat;
};

const getDateTimeZoneAsOutputObject = (setDate, setTime, setZone, pickerDate, pickerTime, pickerZone, doSecond, doMillisecond, doTwentyFour) => {
  const customFormat = getCustomTimeFormat(doSecond, doMillisecond, doTwentyFour, setDate, setTime, setZone);
  let customValue = '';
  const myDateTime = getDateTimeObject(setTime, pickerDate, pickerTime, doSecond, doMillisecond, doTwentyFour);
  const safeDate = getSafeDate(myDateTime.date.year, myDateTime.date.month, myDateTime.date.day, myDateTime.time.hour, myDateTime.time.minute, myDateTime.time.second, myDateTime.time.millisecond);
  const data = getDateTimeZoneObject(setDate, setTime, setZone, pickerDate, pickerTime, pickerZone, doSecond, doMillisecond, doTwentyFour);

  if (setZone) {
    customValue = setTimeToTimeZone(safeDate, customFormat, {
      timeZone: pickerZone
    });
  } else {
    customValue = format(safeDate, customFormat);
  }

  return {
    value: customValue,
    data
  };
};

export { getAllDaysBetween, getDateFormat, getDateTimeZoneAsOutputObject, getDayOfMonthFromDate, getFormattedDateLabel, getFormattedMonthNumber, getFormattedOffset, getFormattedTimeLabel, getISODayOfWeek, getLastDayOfMonth, getMonthFromDate, getSafeDate, getTimeFormat, getYearFromDate, getZoneFormat, isUnique, setTimeToTimeZone, replaceAllCharacters, roundDownToNearestFive };
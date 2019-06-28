'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleVisibleCloser = exports.setVisibleZone = exports.setVisibleTime = exports.setVisibleDate = exports.setInvisibleCloser = exports.setInvisibleModalAndSave = exports.setInvisibleModal = exports.setVisibleModal = exports.setOverrideForSetDate = exports.setPickerValuesTime = exports.setPickerValuesDay = exports.setPickerValuesDateToday = exports.setPickerValuesDate = exports.setComponentDidUpdateState = exports.setComponentDidMountState = exports.getDefaultNow = exports.doCheckPropsChanged = exports.clearAllValues = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jstz = require('jstz');

var _jstz2 = _interopRequireDefault(_jstz);

var _state = require('./state');

var _functions = require('../../utilities/functions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setOverrideForSetDate = function setOverrideForSetDate(setDate, setTime, setZone) {
  if (!setDate && !setTime && !setZone) {
    return true;
  }

  return setDate;
};

var doCheckPropsChanged = function doCheckPropsChanged(prevProps, nextProps) {
  var prevValue = prevProps.value;
  var nextValue = nextProps.value;


  if (prevProps.setDate !== nextProps.setDate) {
    return true;
  }

  if (prevProps.setTime !== nextProps.setTime) {
    return true;
  }

  if (prevProps.setZone !== nextProps.setZone) {
    return true;
  }

  // Date Checks
  if (prevValue.date.year !== nextValue.date.year) {
    return true;
  }

  if (prevValue.date.month !== nextValue.date.month) {
    return true;
  }

  if (prevValue.date.day !== nextValue.date.day) {
    return true;
  }

  // Time Checks
  if (prevValue.time.hour !== nextValue.time.hour) {
    return true;
  }

  if (prevValue.time.minute !== nextValue.time.minute) {
    return true;
  }

  if (prevValue.time.second !== nextValue.time.second) {
    return true;
  }

  if (prevValue.time.millisecond !== nextValue.time.millisecond) {
    return true;
  }

  if (prevValue.zone !== nextValue.zone) {
    return true;
  }

  return false;
};

var setPickerValuesDay = function setPickerValuesDay(prevState, year, month, day) {
  var newState = _extends({}, prevState, {
    picker: _extends({}, prevState.picker, {
      values: _extends({}, prevState.picker.values, {
        date: _extends({}, prevState.picker.values.date, {
          year: year,
          month: month,
          day: day
        })
      })
    })
  });

  return newState;
};

var setPickerValuesDate = function setPickerValuesDate(prevState, parameter, value) {
  var newState = _extends({}, prevState, {
    picker: _extends({}, prevState.picker, {
      values: _extends({}, prevState.picker.values, {
        date: _extends({}, prevState.picker.values.date, _defineProperty({}, parameter, value))
      })
    })
  });

  return newState;
};

var getDefaultNow = function getDefaultNow() {
  var d = new Date();

  return {
    year: (0, _functions.getYearFromDate)(d),
    month: (0, _functions.getFormattedMonthNumber)(d),
    day: (0, _functions.getDayOfMonthFromDate)(d),
    hour: d.getHours(),
    minute: d.getMinutes(),
    second: d.getSeconds(),
    millisecond: d.getMilliseconds(),
    zone: _jstz2.default.determine().name()
  };
};

var setPickerValuesDateToday = function setPickerValuesDateToday(prevState) {
  var defaultNow = getDefaultNow();

  var newState = _extends({}, prevState, {
    picker: _extends({}, prevState.picker, {
      values: _extends({}, prevState.picker.values, {
        date: _extends({}, prevState.picker.values.date, {
          year: defaultNow.year,
          month: defaultNow.month,
          day: defaultNow.day
        })
      })
    })
  });

  return newState;
};

var setPickerValuesTime = function setPickerValuesTime(prevState, parameter, value) {
  var _prevState$picker$val = prevState.picker.values.time,
      hour = _prevState$picker$val.hour,
      meridiem = _prevState$picker$val.meridiem;


  var newHour = hour;
  var newMeridiem = meridiem;

  if (parameter === 'hour') {
    if (value < 12) {
      newMeridiem = 'am';
    } else {
      newMeridiem = 'pm';
    }
  }

  if (parameter === 'meridiem') {
    if (meridiem !== value) {
      if (value === 'am') {
        newHour -= 12;
      } else {
        newHour += 12;
      }
    }
  }

  var newState = {};

  newState = _extends({}, prevState, {
    picker: _extends({}, prevState.picker, {
      values: _extends({}, prevState.picker.values, {
        time: _extends({}, prevState.picker.values.time, _defineProperty({}, parameter, value))
      })
    })
  });

  if (parameter === 'hour') {
    newState = _extends({}, newState, {
      picker: _extends({}, newState.picker, {
        values: _extends({}, newState.picker.values, {
          time: _extends({}, newState.picker.values.time, {
            meridiem: newMeridiem
          })
        })
      })
    });
  }

  if (parameter === 'meridiem') {
    newState = _extends({}, newState, {
      picker: _extends({}, newState.picker, {
        values: _extends({}, newState.picker.values, {
          time: _extends({}, newState.picker.values.time, {
            hour: newHour
          })
        })
      })
    });
  }

  return newState;
};

var getComponentDidMountVisibleState = function getComponentDidMountVisibleState(props, prevState) {
  var setDate = props.setDate,
      setTime = props.setTime,
      setZone = props.setZone;

  var date = false;
  var time = false;
  var zone = false;

  if (!setDate && !setTime && !setZone) {
    date = true;
  }

  if (setDate && setTime) {
    date = true;
  }

  if (setDate && !setTime) {
    date = true;
  }

  if (!setDate && setTime) {
    time = true;
  }

  if (!setDate && !setTime && setZone) {
    zone = true;
  }

  var visibleState = _extends({}, prevState.picker.visible, {
    date: date,
    time: time,
    zone: zone
  });

  return visibleState;
};

var setComponentDidMountState = function setComponentDidMountState(props, prevState) {
  var value = props.value,
      setClasses = props.setClasses,
      setDate = props.setDate,
      setFirstDay = props.setFirstDay,
      setName = props.setName,
      setMilliseconds = props.setMilliseconds,
      setSeconds = props.setSeconds,
      setTwentyFour = props.setTwentyFour,
      setTime = props.setTime,
      setZone = props.setZone;


  var visibleState = getComponentDidMountVisibleState(props, prevState);

  var timeLabel = (0, _functions.getFormattedTimeLabel)(value.time.hour, value.time.minute, value.time.second, value.time.millisecond, setSeconds, setMilliseconds, setTwentyFour);

  var mountedState = _extends({}, prevState, {
    picker: {
      settings: {
        classes: setClasses,
        date: setOverrideForSetDate(setDate, setTime, setZone),
        twentyFour: setTwentyFour,
        firstDay: setFirstDay,
        name: setName,
        milliseconds: setMilliseconds,
        seconds: setSeconds,
        time: setTime,
        zone: setZone
      },
      values: {
        date: {
          year: value.date.year,
          month: value.date.month,
          day: value.date.day
        },
        time: {
          hour: timeLabel.hour,
          minute: value.time.minute,
          second: value.time.second,
          millisecond: value.time.millisecond,
          meridiem: timeLabel.meridiem
        },
        zone: value.zone
      },
      visible: _extends({}, prevState.picker.visible, visibleState)
    }
  });

  return mountedState;
};

var setComponentDidUpdateState = function setComponentDidUpdateState(props, prevState) {
  var value = props.value,
      setClasses = props.setClasses,
      setDate = props.setDate,
      setFirstDay = props.setFirstDay,
      setName = props.setName,
      setMilliseconds = props.setMilliseconds,
      setSeconds = props.setSeconds,
      setTwentyFour = props.setTwentyFour,
      setTime = props.setTime,
      setZone = props.setZone;


  var visibleState = getComponentDidMountVisibleState(props, prevState);
  var timeLabel = (0, _functions.getFormattedTimeLabel)(value.time.hour, value.time.minute, value.time.second, value.time.millisecond, setSeconds, setMilliseconds, setTwentyFour);

  var updatedState = _extends({}, prevState, {
    picker: {
      settings: {
        classes: setClasses,
        date: setOverrideForSetDate(setDate, setTime, setZone),
        twentyFour: setTwentyFour,
        firstDay: setFirstDay,
        name: setName,
        milliseconds: setMilliseconds,
        seconds: setSeconds,
        time: setTime,
        zone: setZone
      },
      values: {
        date: {
          year: value.date.year,
          month: value.date.month,
          day: value.date.day
        },
        time: {
          hour: timeLabel.hour,
          minute: value.time.minute,
          second: value.time.second,
          millisecond: value.time.millisecond,
          meridiem: timeLabel.meridiem
        },
        zone: value.zone
      },
      visible: _extends({}, prevState.picker.visible, visibleState)
    }
  });

  return updatedState;
};

var toggleVisibleCloser = function toggleVisibleCloser(prevState) {
  return _extends({}, prevState, {
    picker: _extends({}, prevState.picker, {
      visible: _extends({}, prevState.picker.visible, {
        closer: !prevState.picker.visible.closer,
        content: prevState.picker.visible.closer
      })
    })
  });
};

var setInvisibleCloser = function setInvisibleCloser(prevState) {
  return _extends({}, prevState, {
    picker: _extends({}, prevState.picker, {
      visible: _extends({}, prevState.picker.visible, {
        content: true,
        closer: false,
        modal: true
      })
    })
  });
};

var clearAllValues = function clearAllValues(prevState) {
  var newState = _extends({}, prevState, {
    values: _state.outputValues
  });

  return newState;
};

var setInvisibleModalAndSave = function setInvisibleModalAndSave(prevState, props) {
  var _prevState$picker$val2 = prevState.picker.values,
      pickerDate = _prevState$picker$val2.date,
      pickerTime = _prevState$picker$val2.time,
      pickerZone = _prevState$picker$val2.zone;
  var setDate = props.setDate,
      setMilliseconds = props.setMilliseconds,
      setSeconds = props.setSeconds,
      setTwentyFour = props.setTwentyFour,
      setTime = props.setTime,
      setZone = props.setZone;

  var newValues = _extends({}, _state.outputValues, { changed: true });

  var values = (0, _functions.getDateTimeZoneAsOutputObject)(setDate, setTime, setZone, pickerDate, pickerTime, pickerZone, setSeconds, setMilliseconds, setTwentyFour);

  newValues = _extends({}, newValues, {

    input: {
      value: values.value
    },

    data: values.data
  });

  var newState = {
    picker: _extends({}, prevState.picker, {
      visible: _extends({}, prevState.picker.visible, {
        closer: false,
        content: false,
        modal: false
      })
    }),
    values: newValues
  };

  return newState;
};

var setInvisibleModal = function setInvisibleModal(prevState) {
  return _extends({}, prevState, {
    picker: _extends({}, prevState.picker, {
      visible: _extends({}, prevState.picker.visible, {
        content: true,
        closer: false,
        modal: false
      })
    })
  });
};

var setVisibleModal = function setVisibleModal(prevState) {
  return _extends({}, prevState, {
    picker: _extends({}, prevState.picker, {
      visible: _extends({}, prevState.picker.visible, {
        content: true,
        closer: false,
        modal: true
      })
    })
  });
};

var setVisibleDate = function setVisibleDate(prevState) {
  return _extends({}, prevState, {
    picker: _extends({}, prevState.picker, {
      visible: _extends({}, prevState.picker.visible, {
        date: true,
        time: false,
        zone: false
      })
    })
  });
};

var setVisibleTime = function setVisibleTime(prevState) {
  return _extends({}, prevState, {
    picker: _extends({}, prevState.picker, {
      visible: _extends({}, prevState.picker.visible, {
        date: false,
        time: true,
        zone: false
      })
    })
  });
};

var setVisibleZone = function setVisibleZone(prevState) {
  return _extends({}, prevState, {
    picker: _extends({}, prevState.picker, {
      visible: _extends({}, prevState.picker.visible, {
        date: false,
        time: false,
        zone: true
      })
    })
  });
};

exports.clearAllValues = clearAllValues;
exports.doCheckPropsChanged = doCheckPropsChanged;
exports.getDefaultNow = getDefaultNow;
exports.setComponentDidMountState = setComponentDidMountState;
exports.setComponentDidUpdateState = setComponentDidUpdateState;
exports.setPickerValuesDate = setPickerValuesDate;
exports.setPickerValuesDateToday = setPickerValuesDateToday;
exports.setPickerValuesDay = setPickerValuesDay;
exports.setPickerValuesTime = setPickerValuesTime;
exports.setOverrideForSetDate = setOverrideForSetDate;
exports.setVisibleModal = setVisibleModal;
exports.setInvisibleModal = setInvisibleModal;
exports.setInvisibleModalAndSave = setInvisibleModalAndSave;
exports.setInvisibleCloser = setInvisibleCloser;
exports.setVisibleDate = setVisibleDate;
exports.setVisibleTime = setVisibleTime;
exports.setVisibleZone = setVisibleZone;
exports.toggleVisibleCloser = toggleVisibleCloser;
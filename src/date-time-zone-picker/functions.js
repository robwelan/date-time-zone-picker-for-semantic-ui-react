//  Dependancy Module
import jstz from 'jstz';

//  Local State
import { outputValues } from './state';

//  Utility Functions
import {
  getDateTimeZoneAsOutputObject,
  getDayOfMonthFromDate,
  getFormattedMonthNumber,
  getFormattedTimeLabel,
  getYearFromDate,
} from './utilities/functions';

const getClassNames = (devClasses) => {
  const classes = [''];

  if (devClasses !== '') {
    const customClasses = devClasses.split(' ');
    classes.unshift(...customClasses);
  }

  return classes;
};

const setOverrideForSetDate = (setDate, setTime, setZone) => {
  if (!setDate && !setTime && !setZone) {
    return true;
  }

  return setDate;
};

const doCheckPropsChanged = (prevProps, nextProps) => {
  const { value: prevValue } = prevProps;
  const { value: nextValue } = nextProps;

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

const setPickerValuesDay = (prevState, year, month, day) => {
  const newState = {
    ...prevState,
    picker: {
      ...prevState.picker,
      values: {
        ...prevState.picker.values,
        date: {
          ...prevState.picker.values.date,
          year,
          month,
          day,
        },
      },
    },
  };

  return newState;
};

const setPickerValuesDate = (prevState, parameter, value) => {
  const newState = {
    ...prevState,
    picker: {
      ...prevState.picker,
      values: {
        ...prevState.picker.values,
        date: {
          ...prevState.picker.values.date,
          [parameter]: value,
        },
      },
    },
  };

  return newState;
};

const getDefaultNow = () => {
  const d = new Date();

  return {
    year: getYearFromDate(d),
    month: getFormattedMonthNumber(d),
    day: getDayOfMonthFromDate(d),
    hour: d.getHours(),
    minute: d.getMinutes(),
    second: d.getSeconds(),
    millisecond: d.getMilliseconds(),
    zone: jstz.determine().name(),
  };
};

const setPickerValuesDateToday = (prevState) => {
  const defaultNow = getDefaultNow();

  const newState = {
    ...prevState,
    picker: {
      ...prevState.picker,
      values: {
        ...prevState.picker.values,
        date: {
          ...prevState.picker.values.date,
          year: defaultNow.year,
          month: defaultNow.month,
          day: defaultNow.day,
        },
      },
    },
  };

  return newState;
};

const setPickerValuesTime = (prevState, parameter, value) => {
  const {
    picker: {
      values: {
        time: { hour, meridiem },
      },
    },
  } = prevState;

  let newHour = hour;
  let newMeridiem = meridiem;

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

  let newState = {};

  newState = {
    ...prevState,
    picker: {
      ...prevState.picker,
      values: {
        ...prevState.picker.values,
        time: {
          ...prevState.picker.values.time,
          [parameter]: value,
        },
      },
    },
  };

  if (parameter === 'hour') {
    newState = {
      ...newState,
      picker: {
        ...newState.picker,
        values: {
          ...newState.picker.values,
          time: {
            ...newState.picker.values.time,
            meridiem: newMeridiem,
          },
        },
      },
    };
  }

  if (parameter === 'meridiem') {
    newState = {
      ...newState,
      picker: {
        ...newState.picker,
        values: {
          ...newState.picker.values,
          time: {
            ...newState.picker.values.time,
            hour: newHour,
          },
        },
      },
    };
  }

  return newState;
};

const getComponentDidMountVisibleState = (props, prevState) => {
  const { setDate, setTime, setZone } = props;
  let date = false;
  let time = false;
  let zone = false;

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

  const visibleState = {
    ...prevState.picker.visible,
    date,
    time,
    zone,
  };

  return visibleState;
};

const setComponentDidMountState = (props, prevState) => {
  const {
    // value
    value,
    // settings
    setClasses,
    setDate,
    setFirstDay,
    setName,
    setMilliseconds,
    setSeconds,
    setTwentyFour,
    setTime,
    setZone,
  } = props;

  const visibleState = getComponentDidMountVisibleState(props, prevState);

  const timeLabel = getFormattedTimeLabel(
    value.time.hour,
    value.time.minute,
    value.time.second,
    value.time.millisecond,
    setSeconds,
    setMilliseconds,
    setTwentyFour,
  );

  const mountedState = {
    ...prevState,
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
        zone: setZone,
      },
      values: {
        date: {
          year: value.date.year,
          month: value.date.month,
          day: value.date.day,
        },
        time: {
          hour: timeLabel.hour,
          minute: value.time.minute,
          second: value.time.second,
          millisecond: value.time.millisecond,
          meridiem: timeLabel.meridiem,
        },
        zone: value.zone,
      },
      visible: {
        ...prevState.picker.visible,
        ...visibleState,
      },
    },
  };

  return mountedState;
};

const setComponentDidUpdateState = (props, prevState) => {
  const {
    // values
    value,
    // settings
    setClasses,
    setDate,
    setFirstDay,
    setName,
    setMilliseconds,
    setSeconds,
    setTwentyFour,
    setTime,
    setZone,
  } = props;

  const visibleState = getComponentDidMountVisibleState(props, prevState);
  const timeLabel = getFormattedTimeLabel(
    value.time.hour,
    value.time.minute,
    value.time.second,
    value.time.millisecond,
    setSeconds,
    setMilliseconds,
    setTwentyFour,
  );

  const updatedState = {
    ...prevState,
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
        zone: setZone,
      },
      values: {
        date: {
          year: value.date.year,
          month: value.date.month,
          day: value.date.day,
        },
        time: {
          hour: timeLabel.hour,
          minute: value.time.minute,
          second: value.time.second,
          millisecond: value.time.millisecond,
          meridiem: timeLabel.meridiem,
        },
        zone: value.zone,
      },
      visible: {
        ...prevState.picker.visible,
        ...visibleState,
      },
    },
  };

  return updatedState;
};

const toggleVisibleCloser = prevState => ({
  ...prevState,
  picker: {
    ...prevState.picker,
    visible: {
      ...prevState.picker.visible,
      closer: !prevState.picker.visible.closer,
      content: prevState.picker.visible.closer,
    },
  },
});

const setInvisibleCloser = prevState => ({
  ...prevState,
  picker: {
    ...prevState.picker,
    visible: {
      ...prevState.picker.visible,
      content: true,
      closer: false,
      modal: true,
    },
  },
});

const clearAllValues = (prevState) => {
  const newState = {
    ...prevState,
    values: outputValues,
  };

  return newState;
};

const setInvisibleModalAndSave = (prevState, props) => {
  const {
    picker: {
      values: { date: pickerDate, time: pickerTime, zone: pickerZone },
    },
  } = prevState;
  const {
    setDate,
    setMilliseconds,
    setSeconds,
    setTwentyFour,
    setTime,
    setZone,
  } = props;
  let newValues = { ...outputValues, changed: true };

  const values = getDateTimeZoneAsOutputObject(
    setDate,
    setTime,
    setZone,
    pickerDate,
    pickerTime,
    pickerZone,
    setSeconds,
    setMilliseconds,
    setTwentyFour,
  );

  newValues = {
    ...newValues,

    input: {
      value: values.value,
    },

    data: values.data,
  };

  const newState = {
    picker: {
      ...prevState.picker,
      visible: {
        ...prevState.picker.visible,
        closer: false,
        content: false,
        modal: false,
      },
    },
    values: newValues,
  };

  return newState;
};

const setInvisibleModal = prevState => ({
  ...prevState,
  picker: {
    ...prevState.picker,
    visible: {
      ...prevState.picker.visible,
      content: true,
      closer: false,
      modal: false,
    },
  },
});

const setVisibleModal = prevState => ({
  ...prevState,
  picker: {
    ...prevState.picker,
    visible: {
      ...prevState.picker.visible,
      content: true,
      closer: false,
      modal: true,
    },
  },
});

const setVisibleDate = prevState => ({
  ...prevState,
  picker: {
    ...prevState.picker,
    visible: {
      ...prevState.picker.visible,
      date: true,
      time: false,
      zone: false,
    },
  },
});

const setVisibleTime = prevState => ({
  ...prevState,
  picker: {
    ...prevState.picker,
    visible: {
      ...prevState.picker.visible,
      date: false,
      time: true,
      zone: false,
    },
  },
});

const setVisibleZone = prevState => ({
  ...prevState,
  picker: {
    ...prevState.picker,
    visible: {
      ...prevState.picker.visible,
      date: false,
      time: false,
      zone: true,
    },
  },
});

export {
  clearAllValues,
  doCheckPropsChanged,
  getDefaultNow,
  getClassNames,
  setComponentDidMountState,
  setComponentDidUpdateState,
  setPickerValuesDate,
  setPickerValuesDateToday,
  setPickerValuesDay,
  setPickerValuesTime,
  setOverrideForSetDate,
  setVisibleModal,
  setInvisibleModal,
  setInvisibleModalAndSave,
  setInvisibleCloser,
  setVisibleDate,
  setVisibleTime,
  setVisibleZone,
  toggleVisibleCloser,
};

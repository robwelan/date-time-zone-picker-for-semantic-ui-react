const outputValues = {
  changed: false,
  input: {
    value: '',
  },
  data: {},
};

const defaultState = {
  picker: {
    settings: {
      classes: '',
      date: true,
      name: '',
      time: false,
      zone: false,
      twentyFour: false,
      seconds: false,
      milliseconds: false,
      firstDay: 'Sunday',
    },
    values: {
      date: {
        year: 0,
        month: 0,
        day: 0,
      },
      time: {
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
        meridiem: 'am',
      },
      zone: '',
    },
    visible: {
      // outer
      content: false,
      closer: false,
      modal: false,
      // inner
      date: false,
      time: false,
      zone: false,
    },
  },
  values: outputValues,
};

export { defaultState, outputValues };

import PropTypes from 'prop-types';
import React from 'react';

//  Custom Components
import Calendar from '../calendar';
import Clock from '../clock';
import DateTimeZoneInput from '../date-time-zone-input';
import ModalMain from '../modal';
import Zones from '../zones';

//  State
import { defaultState } from './state';

//  Functions
import {
  clearAllValues,
  doCheckPropsChanged,
  getDefaultNow,
  setComponentDidMountState,
  setComponentDidUpdateState,
  setInvisibleCloser,
  setPickerValuesDate,
  setPickerValuesDateToday,
  setPickerValuesDay,
  setPickerValuesTime,
  setInvisibleModal,
  setInvisibleModalAndSave,
  setOverrideForSetDate,
  setVisibleModal,
  setVisibleDate,
  setVisibleTime,
  setVisibleZone,
  toggleVisibleCloser,
} from './functions';

//  Utilities
import {
  getFormattedDateLabel,
  getFormattedTimeLabel,
  replaceAllCharacters,
} from '../utilities/functions';

class DateTimeZonePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = defaultState;

    this.doClearValues = this.doClearValues.bind(this);
    this.doShowCalendar = this.doShowCalendar.bind(this);
    this.doShowClock = this.doShowClock.bind(this);
    this.doShowZone = this.doShowZone.bind(this);
    this.doCloseCloser = this.doCloseCloser.bind(this);
    this.doShowCloser = this.doShowCloser.bind(this);
    this.doShowModal = this.doShowModal.bind(this);
    this.doCloseModal = this.doCloseModal.bind(this);
    this.doSaveChanges = this.doSaveChanges.bind(this);
    this.doSetYear = this.doSetYear.bind(this);
    this.doSetMonth = this.doSetMonth.bind(this);
    this.doSetDay = this.doSetDay.bind(this);
    this.doSetToday = this.doSetToday.bind(this);
    this.doSetHour = this.doSetHour.bind(this);
    this.doSetMinute = this.doSetMinute.bind(this);
    this.doSetSecond = this.doSetSecond.bind(this);
    this.doSetMillisecond = this.doSetMillisecond.bind(this);
    this.doSetMeridiem = this.doSetMeridiem.bind(this);
    this.doSetZone = this.doSetZone.bind(this);
  }

  componentDidMount() {
    this.setState(prevState => {
      const newState = setComponentDidMountState(this.props, prevState);

      return newState;
    });
  }

  componentDidUpdate(prevProps) {
    const checkPropsChanged = doCheckPropsChanged(this.props, prevProps);

    if (checkPropsChanged) {
      //  Reactjs documentation says putting setState inside a check
      //  is legal. Air-BnB does not provide adequate documentation
      //  to the contrary...
      //  eslint-disable-next-line react/no-did-update-set-state
      this.setState(prevState => {
        const newState = setComponentDidUpdateState(this.props, prevState);

        return newState;
      });
    }
  }

  doShowCalendar() {
    this.setState(prevState => {
      const newState = setVisibleDate(prevState);

      return newState;
    });
  }

  doShowClock() {
    this.setState(prevState => {
      const newState = setVisibleTime(prevState);

      return newState;
    });
  }

  doShowZone() {
    this.setState(prevState => {
      const newState = setVisibleZone(prevState);

      return newState;
    });
  }

  doCloseCloser() {
    this.setState(prevState => {
      const newState = setInvisibleCloser(prevState);

      return newState;
    });
  }

  doShowCloser() {
    this.setState(prevState => {
      const newState = toggleVisibleCloser(prevState);

      return newState;
    });
  }

  doCloseModal() {
    this.setState(prevState => {
      const newState = setInvisibleModal(prevState);

      return newState;
    });
  }

  doClearValues() {
    const { onChange } = this.props;
    this.setState(prevState => {
      const newState = clearAllValues(prevState);

      if (typeof onChange !== 'undefined') {
        onChange({});
      }

      return newState;
    });
  }

  doSaveChanges() {
    const { onChange } = this.props;
    this.setState(prevState => {
      const newState = setInvisibleModalAndSave(prevState, this.props);
      const { values } = newState;

      if (values.changed) {
        if (typeof onChange !== 'undefined') {
          onChange(values.data);
        }
      }

      return newState;
    });
  }

  doShowModal() {
    this.setState(prevState => {
      const newState = setVisibleModal(prevState);

      return newState;
    });
  }

  doSetYear(value) {
    this.setState(prevState => {
      const newState = setPickerValuesDate(prevState, 'year', value);

      return newState;
    });
  }

  doSetMonth(value) {
    this.setState(prevState => {
      const newState = setPickerValuesDate(prevState, 'month', value);

      return newState;
    });
  }

  doSetDay(year, month, day) {
    return () => {
      this.setState(prevState => {
        const newState = setPickerValuesDay(prevState, year, month, day);

        return newState;
      });
    };
  }

  doSetToday() {
    this.setState(prevState => {
      const newState = setPickerValuesDateToday(prevState);

      return newState;
    });
  }

  doSetHour(value) {
    this.setState(prevState => {
      const newState = setPickerValuesTime(prevState, 'hour', value);

      return newState;
    });
  }

  doSetMinute(value) {
    this.setState(prevState => {
      const newState = setPickerValuesTime(prevState, 'minute', value);

      return newState;
    });
  }

  doSetSecond(value) {
    this.setState(prevState => {
      const newState = setPickerValuesTime(prevState, 'second', value);

      return newState;
    });
  }

  doSetMeridiem(value) {
    this.setState(prevState => {
      const newState = setPickerValuesTime(prevState, 'meridiem', value);

      return newState;
    });
  }

  doSetMillisecond(value) {
    this.setState(prevState => {
      const newState = setPickerValuesTime(prevState, 'millisecond', value);

      return newState;
    });
  }

  doSetZone(zone) {
    this.setState(prevState => {
      const newState = {
        ...prevState,
        picker: {
          ...prevState.picker,
          values: {
            ...prevState.picker.values,
            zone,
          },
        },
      };

      return newState;
    });
  }

  render() {
    const {
      className,
      setDate: overrideSetDate,
      setFirstDay,
      setMilliseconds,
      setName,
      setSeconds,
      setTime,
      setTwentyFour,
      setZone,
    } = this.props;

    const {
      picker: {
        values: {
          date: { day, month, year },
          time: { hour, minute, second, millisecond, meridiem },
          zone,
        },
        visible: {
          closer,
          content,
          modal,
          date: showDate,
          time: showTime,
          zone: showZone,
        },
      },
      values,
    } = this.state;

    const setDate = setOverrideForSetDate(overrideSetDate, setTime, setZone);

    const labelDate = getFormattedDateLabel(year, month, day);

    const labelTime = getFormattedTimeLabel(
      hour,
      minute,
      second,
      millisecond,
      setSeconds,
      setMilliseconds,
      setTwentyFour
    );

    let labelZone = '';

    if (typeof zone !== 'undefined' && zone !== '') {
      labelZone = replaceAllCharacters(zone, '_', ' ');
    }

    return (
      <div className="date-time-zone-picker">
        <DateTimeZoneInput
          devsClasses={className}
          devsName={setName}
          doOnClick={this.doShowModal}
          setValues={values}
          setDate={setDate}
          setMilliseconds={setMilliseconds}
          setSeconds={setSeconds}
          setTime={setTime}
          setTwentyFour={setTwentyFour}
          setZone={setZone}
          onChange={this.handleInputChange}
        />
        <ModalMain
          allowDate={setDate}
          allowTime={setTime}
          allowZone={setZone}
          clearValues={this.doClearValues}
          closeCloser={this.doCloseCloser}
          showCloser={this.doShowCloser}
          showClearValues={values.changed}
          visibleCloser={closer}
          dimmedContent={content}
          showModal={this.doShowModal}
          closeModal={this.doCloseModal}
          saveChanges={this.doSaveChanges}
          visibleModal={modal}
          actShowCalendar={this.doShowCalendar}
          actShowClock={this.doShowClock}
          actShowZone={this.doShowZone}
          showDate={showDate}
          showTime={showTime}
          showZone={showZone}
          labelDate={labelDate}
          labelTime={labelTime.label}
          labelZone={labelZone}
        >
          {setDate && showDate && (
            <Calendar
              allowDate={setDate}
              doSetYear={this.doSetYear}
              doSetMonth={this.doSetMonth}
              doSetDay={this.doSetDay}
              doSetToday={this.doSetToday}
              day={day}
              month={month}
              setFirstDay={setFirstDay}
              year={year}
              showDate={showDate}
            />
          )}
          {setTime && showTime && (
            <Clock
              allowClock={setTime}
              doSetHour={this.doSetHour}
              doSetMinute={this.doSetMinute}
              doSetSecond={this.doSetSecond}
              doSetMillisecond={this.doSetMillisecond}
              doSetMeridiem={this.doSetMeridiem}
              hour={hour}
              minute={minute}
              second={second}
              millisecond={millisecond}
              meridiem={meridiem}
              showMillisecond={setMilliseconds}
              showSecond={setSeconds}
              showTwentyFour={setTwentyFour}
              showTime={showTime}
            />
          )}
          {setZone && showZone && (
            <Zones
              allowDate={setDate}
              allowTime={setTime}
              allowZone={setZone}
              doSetZone={this.doSetZone}
              setYear={year}
              setMonth={month}
              setDay={day}
              setHour={hour}
              setMinute={minute}
              setSecond={second}
              setMillisecond={millisecond}
              showZone={showZone}
              zoneTitle={zone}
            />
          )}
        </ModalMain>
      </div>
    );
  }
}

const detailedNow = getDefaultNow();

DateTimeZonePicker.defaultProps = {
  //  value
  value: {
    date: {
      year: detailedNow.year,
      month: detailedNow.month,
      day: detailedNow.day,
    },
    time: {
      hour: detailedNow.hour,
      minute: detailedNow.minute,
      second: detailedNow.second,
      millisecond: detailedNow.millisecond,
    },
    zone: detailedNow.zone,
  },
  //  settings
  className: '',
  setDate: true,
  setFirstDay: 'Sunday',
  setName: '',
  setMilliseconds: false,
  setSeconds: false,
  setTwentyFour: true,
  setTime: false,
  setZone: false,
  //  functions
  onChange: undefined,
};

DateTimeZonePicker.propTypes = {
  //  initial value(s):
  value: PropTypes.shape({
    date: PropTypes.shape({
      year: PropTypes.number,
      month: PropTypes.number,
      day: PropTypes.number,
    }),
    time: PropTypes.shape({
      hour: PropTypes.number,
      minute: PropTypes.number,
      second: PropTypes.number,
      millisecond: PropTypes.number,
    }),
    zone: PropTypes.string,
  }),
  //  settings:
  className: PropTypes.string,
  setDate: PropTypes.bool,
  setFirstDay: PropTypes.string,
  setName: PropTypes.string,
  setSeconds: PropTypes.bool,
  setMilliseconds: PropTypes.bool,
  setTwentyFour: PropTypes.bool,
  setTime: PropTypes.bool,
  setZone: PropTypes.bool,
  //  functions
  onChange: PropTypes.func,
};

export { DateTimeZonePicker as default };

import PropTypes from 'prop-types';
import React from 'react';

//  Semantic-React-UI
import { Grid } from '../../frameworks/semantic-ui-react/scripts';

//  Components
import {
  ControlNumber as ControlYear,
  ControlNumber as ControlMonth,
} from '../number-controller';
import ControlToday from './today';
import DayController from './day-controller';
import { Header } from './header';
import PresentChange from '../present-change';
import Spacer from '../spacer';

//  Functions
import { getFirstDayNumber } from './functions';

//  Style
import './index.css';

const Calendar = props => {
  const {
    allowDate,
    doSetYear,
    doSetMonth,
    doSetDay,
    doSetToday,
    day,
    month,
    setFirstDay,
    showDate,
    year,
  } = props;
  const firstDay = getFirstDayNumber(setFirstDay);

  return (
    <React.Fragment>
      {allowDate && showDate && (
        <Grid className="calendar" columns={1} container>
          <PresentChange icon="calendar alternate outline" label="Change Date">
            <ControlYear
              doChange={doSetYear}
              doubleAngle
              placeholder="YYYY"
              max={3000}
              min={1}
              value={year}
            />
            <Spacer height="4px" />
            <ControlMonth
              doChange={doSetMonth}
              doubleAngle={false}
              placeholder="M"
              max={12}
              min={1}
              value={month}
            />
            <Header firstDay={firstDay} />
            <DayController
              setDay={doSetDay}
              day={day}
              month={month}
              year={year}
              firstDay={firstDay}
            />
            <ControlToday
              day={day}
              month={month}
              year={year}
              doChange={doSetToday}
            />
          </PresentChange>
        </Grid>
      )}
    </React.Fragment>
  );
};

Calendar.propTypes = {
  allowDate: PropTypes.bool.isRequired,
  doSetDay: PropTypes.func.isRequired,
  doSetYear: PropTypes.func.isRequired,
  doSetMonth: PropTypes.func.isRequired,
  doSetToday: PropTypes.func.isRequired,
  day: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  setFirstDay: PropTypes.string.isRequired,
  showDate: PropTypes.bool.isRequired,
  year: PropTypes.number.isRequired,
};

export default Calendar;

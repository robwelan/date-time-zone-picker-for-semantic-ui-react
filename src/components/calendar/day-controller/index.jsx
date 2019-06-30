import PropTypes from 'prop-types';
import React from 'react';

//  Semantic-UI-React
import { Button } from 'semantic-ui-react';

//  Utilities
import {
  getDayOfMonthFromDate,
  getMonthFromDate,
  getYearFromDate,
} from '../../utilities/functions';

import { getDatesOfCalendarDisplay } from './functions';

const DayController = (props) => {
  const {
    setDay,
    year,
    month,
    day,
    firstDay,
  } = props;
  const datesArray = getDatesOfCalendarDisplay(year, month, firstDay);
  const groupSize = 7;
  const rowsSize = datesArray.length / groupSize - 1;

  const ButtonGroups = datesArray
    .map((content, index) => {
      const contentDay = getDayOfMonthFromDate(content);
      const contentMonth = getMonthFromDate(content);
      const contentYear = getYearFromDate(content);
      const classNames = [];
      // remove month for JavaScript handling of month
      const jsMonth = month - 1;

      if (
        Number(contentYear) === year
        && Number(contentMonth) === jsMonth
        && Number(contentDay) === day
      ) {
        classNames.push('active');
      }

      return (
        // map content to Button
        <Button
          className={classNames.join(' ').trim()}
          // nothing unique about processDays
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          // add month for JavaScript handling of month
          onClick={setDay(contentYear, contentMonth + 1, contentDay)}
        >
          <span>{contentDay}</span>
        </Button>
      );
    })
    .reduce((r, element, index) => {
      // create element groups with size 3, result looks like:
      // [[elem1, elem2, elem3], [elem4, elem5, elem6], ...]
      if (index % groupSize === 0) {
        r.push([]);
      }
      r[r.length - 1].push(element);
      return r;
    }, [])
    .map((rowContent, index) => {
      const classNames = [`row-${index + 1}`];
      if (index === 0) {
        classNames.push('start');
      } else if (index === rowsSize) {
        classNames.push('end');
      } else {
        classNames.push('middle');
      }

      return (
        //  Surround every group with 'Button.Group'
        <Button.Group
          basic
          className={classNames.join(' ').trim()}
          // nothing unique about processDays
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          widths={groupSize}
        >
          {rowContent}
        </Button.Group>
      );
    });

  return ButtonGroups;
};

DayController.propTypes = {
  setDay: PropTypes.func.isRequired,
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired,
  firstDay: PropTypes.number.isRequired,
};

export { DayController as default };

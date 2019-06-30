import PropTypes from 'prop-types';
import React from 'react';

//  Semantic-UI-React
import { Grid } from 'semantic-ui-react';

//  Functions
import { getWeekDayOrder } from '../functions';

const Titles = (props) => {
  const { firstDay } = props;
  const processDays = getWeekDayOrder(firstDay);

  return processDays.map((day, index) => (
    // nothing unique about processDays
    // eslint-disable-next-line react/no-array-index-key
    <Grid.Column key={index} textAlign="center">
      {day}
    </Grid.Column>
  ));
};

Titles.propTypes = {
  firstDay: PropTypes.number.isRequired,
};

export { Titles };

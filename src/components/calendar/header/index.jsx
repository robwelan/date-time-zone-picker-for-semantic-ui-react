import PropTypes from 'prop-types';
import React from 'react';
import { Titles } from './titles';
import { Divider, Grid } from '../../../frameworks/semantic-ui-react/scripts';

const Header = props => {
  const { firstDay } = props;

  return (
    <React.Fragment>
      <Divider className="day-title-divider-top" />
      <Grid columns={7} container>
        <Titles firstDay={firstDay} />
      </Grid>
      <Divider className="day-title-divider-bottom" />
    </React.Fragment>
  );
};

Header.propTypes = {
  firstDay: PropTypes.number.isRequired,
};

export { Header };

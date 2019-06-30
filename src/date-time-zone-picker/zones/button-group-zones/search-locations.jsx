import PropTypes from 'prop-types';
import React from 'react';

// Semantic-UI
import { Input } from 'semantic-ui-react';

const SearchLocations = (props) => {
  const { doOnChangeFilter, filter } = props;

  return (
    <React.Fragment>
      <Input
        className="locations-filter"
        icon="search"
        placeholder="Search Locations..."
        onChange={event => doOnChangeFilter(event)}
        value={filter || ''}
      />
    </React.Fragment>
  );
};

SearchLocations.defaultProps = {
  filter: '',
};

SearchLocations.propTypes = {
  doOnChangeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

export { SearchLocations as default };

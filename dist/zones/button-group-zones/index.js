import PropTypes from 'prop-types';
import React from 'react'; // Components

import ContainerButtonGroupZones from './container-button-group-zones';
import SearchLocations from './search-locations';

const ButtonGroupZones = props => {
  const {
    allZones,
    doChooseZone,
    doShowRegions,
    inputOnChangeFilter,
    inputSearchValue,
    showAllLocations
  } = props;
  return React.createElement(React.Fragment, null, React.createElement(SearchLocations, {
    doOnChangeFilter: inputOnChangeFilter,
    filter: inputSearchValue
  }), React.createElement(ContainerButtonGroupZones, {
    doChooseZone: doChooseZone,
    doShowRegions: doShowRegions,
    showAllLocations: showAllLocations,
    list: allZones
  }));
};

ButtonGroupZones.defaultProps = {
  inputSearchValue: ''
};
ButtonGroupZones.propTypes = {
  allZones: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  doChooseZone: PropTypes.func.isRequired,
  doShowRegions: PropTypes.func.isRequired,
  inputOnChangeFilter: PropTypes.func.isRequired,
  inputSearchValue: PropTypes.string,
  showAllLocations: PropTypes.bool.isRequired
};
export { ButtonGroupZones as default };
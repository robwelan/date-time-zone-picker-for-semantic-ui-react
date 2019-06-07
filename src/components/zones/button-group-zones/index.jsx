import PropTypes from 'prop-types';
import React from 'react';
// Components
import ContainerButtonGroupZones from './container-button-group-zones';
import SearchLocations from './search-locations';

const ButtonGroupZones = props => {
  const {
    allZones,
    doChooseZone,
    doShowRegions,
    inputOnChangeFilter,
    inputSearchValue,
    showAllLocations,
  } = props;

  return (
    <React.Fragment>
      <SearchLocations
        doOnChangeFilter={inputOnChangeFilter}
        filter={inputSearchValue}
      />
      <ContainerButtonGroupZones
        doChooseZone={doChooseZone}
        doShowRegions={doShowRegions}
        showAllLocations={showAllLocations}
        list={allZones}
      />
    </React.Fragment>
  );
};

ButtonGroupZones.defaultProps = {
  inputSearchValue: '',
};

ButtonGroupZones.propTypes = {
  allZones: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  doChooseZone: PropTypes.func.isRequired,
  doShowRegions: PropTypes.func.isRequired,
  inputOnChangeFilter: PropTypes.func.isRequired,
  inputSearchValue: PropTypes.string,
  showAllLocations: PropTypes.bool.isRequired,
};

export { ButtonGroupZones as default };

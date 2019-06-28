import PropTypes from 'prop-types';
import React from 'react';
// Semantic-UI
import { Button } from 'semantic-ui-react';
// Components
import ButtonContent from './button-content';
import ListItems from './list-items';

const ContainerButtonGroupZones = props => {
  const { doChooseZone, doShowRegions, list, showAllLocations } = props;

  return (
    <div className="container-button-group-zones">
      <div className="zone-buttons">
        <Button.Group basic vertical>
          <Button onClick={doShowRegions}>
            <ButtonContent image="etc" option title="All Regions" />
          </Button>
          {showAllLocations && (
            <Button>
              <ButtonContent title="All Locations" image="etc" option />
            </Button>
          )}
          <ListItems doChooseZone={doChooseZone} list={list} />
        </Button.Group>
      </div>
    </div>
  );
};

ContainerButtonGroupZones.propTypes = {
  doChooseZone: PropTypes.func.isRequired,
  doShowRegions: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  showAllLocations: PropTypes.bool.isRequired,
};

export { ContainerButtonGroupZones as default };

import PropTypes from 'prop-types';
import React from 'react';

//  Semantic-UI
import { Button } from '../../../frameworks/semantic-ui-react/scripts';
//  Components
import ButtonContent from './button-content';
import ListItems from './list-items';

const ButtonGroupRegions = props => {
  const { doChooseRegion, doShowRegion, regions } = props;

  return (
    <div className="container-button-group-regions">
      <div className="region-buttons">
        <Button.Group basic vertical>
          <Button onClick={doChooseRegion('all-locations')}>
            <ButtonContent title="All Locations" image="etc" />
          </Button>
          <ListItems doShowRegion={doShowRegion} regions={regions} />
        </Button.Group>
      </div>
    </div>
  );
};

ButtonGroupRegions.propTypes = {
  doChooseRegion: PropTypes.func.isRequired,
  doShowRegion: PropTypes.func.isRequired,
  regions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { ButtonGroupRegions as default };

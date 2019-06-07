import PropTypes from 'prop-types';
import React from 'react';
// Semantic-UI
import {
  Button,
  Item,
  Grid,
} from '../../../frameworks/semantic-ui-react/scripts';

const SelectedZone = props => {
  const { doShowRegions, zoneTitle } = props;

  const buttons = zoneTitle.split('/').map((value, index) => {
    const type = index === 0 ? 'Region' : 'Zone';

    return (
      <Button
        // nothing unique about index
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        onClick={doShowRegions}
      >
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header>{value}</Item.Header>
              <Item.Extra>{type}</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Button>
    );
  });

  return (
    <Grid className="timezone-controls" container>
      <Button.Group basic vertical>
        {buttons}
      </Button.Group>
    </Grid>
  );
};

SelectedZone.propTypes = {
  doShowRegions: PropTypes.func.isRequired,
  zoneTitle: PropTypes.string.isRequired,
};

export { SelectedZone as default };

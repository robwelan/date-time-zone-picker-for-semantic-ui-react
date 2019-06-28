import PropTypes from 'prop-types';
import React from 'react';
// Semantic-UI
import { Item } from 'semantic-ui-react';

const ButtonContent = props => {
  const { image, offset, time, title, option, zone } = props;

  return (
    <React.Fragment>
      {option && (
        <Item.Group>
          <Item>
            <Item.Image
              size="mini"
              src={`/images/time-zones/100x100/${image}.png`}
            />
            <Item.Content>
              <Item.Header>{title}</Item.Header>
              <Item.Meta>Show all regions</Item.Meta>
            </Item.Content>
          </Item>
        </Item.Group>
      )}
      {!option && (
        <Item.Group>
          <Item>
            <Item.Image
              size="mini"
              src={`/images/time-zones/100x100/${image}.png`}
            />
            <Item.Content>
              <Item.Header>{zone}</Item.Header>
              <Item.Meta>{`${time} (GMT ${offset})`}</Item.Meta>
              <Item.Extra>{title}</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      )}
    </React.Fragment>
  );
};

ButtonContent.defaultProps = {
  offset: '',
  time: '',
  zone: '',
};

ButtonContent.propTypes = {
  image: PropTypes.string.isRequired,
  offset: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string.isRequired,
  option: PropTypes.bool.isRequired,
  zone: PropTypes.string,
};

export { ButtonContent as default };

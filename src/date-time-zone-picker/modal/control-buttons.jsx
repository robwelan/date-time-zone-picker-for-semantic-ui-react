import PropTypes from 'prop-types';
import React from 'react';

//  Semantic-UI-React
import { Button, Icon } from 'semantic-ui-react';

const ControlButtons = (props) => {
  const { doClearValues, doShowModal, showClearButton } = props;
  const type = {
    calendar: 'calendar alternate outline',
    time: 'clock outline',
    zone: 'world',
  };

  return (
    <Button.Group attached="right" icon>
      <Button icon onClick={() => doShowModal()}>
        <Icon name={type.calendar} />
      </Button>
      {showClearButton && (
        <Button icon onClick={() => doClearValues()}>
          <Icon name="delete calendar" />
        </Button>
      )}
    </Button.Group>
  );
};

ControlButtons.propTypes = {
  doClearValues: PropTypes.func.isRequired,
  doShowModal: PropTypes.func.isRequired,
  showClearButton: PropTypes.bool.isRequired,
};

export { ControlButtons as default };

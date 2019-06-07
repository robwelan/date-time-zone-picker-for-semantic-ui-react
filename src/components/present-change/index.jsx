import PropTypes from 'prop-types';
import React from 'react';
import {
  Icon,
  Label,
  Segment,
} from '../../frameworks/semantic-ui-react/scripts';

const PresentChange = props => {
  const { children, icon, label } = props;

  return (
    <Segment padded>
      <Label attached="top">
        <Icon name={icon} />
        {label}
      </Label>
      {children}
    </Segment>
  );
};

PresentChange.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export { PresentChange as default };

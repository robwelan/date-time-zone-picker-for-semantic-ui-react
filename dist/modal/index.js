import PropTypes from 'prop-types';
import React from 'react'; //  Semantic-UI-React

import { Button, Card, Container, Grid, Icon, Label, Modal, Sidebar } from 'semantic-ui-react'; //  Components

import ChangeControls from '../change-controls';
import ControlButtons from './control-buttons';
import PickerCloser from '../picker-closer'; //  Styles

import './index.css';
/*
  paint the main container that holds everything else
*/

const ModalMain = props => {
  const {
    allowDate,
    allowTime,
    allowZone,
    clearValues,
    children,
    dimmedContent,
    showCloser,
    showClearValues,
    closeCloser,
    showModal,
    closeModal,
    saveChanges,
    visibleCloser,
    visibleModal,
    actShowCalendar,
    actShowClock,
    actShowZone,
    showDate,
    showTime,
    showZone,
    labelDate,
    labelTime,
    labelZone
  } = props;
  const ControlButtonProps = {
    doClearValues: clearValues,
    doShowModal: showModal,
    showClearButton: showClearValues
  };

  const getCloserLabel = () => {
    if (visibleCloser) {
      return 'Continue';
    }

    return 'Back';
  };

  const getCloserIcon = () => {
    if (visibleCloser) {
      return 'down';
    }

    return 'left';
  };

  return React.createElement(Modal, {
    className: "modal-date-time-zone-picker",
    closeOnEscape: false,
    closeOnDimmerClick: false,
    dimmer: "blurring",
    open: visibleModal,
    onClose: () => closeModal(),
    trigger: React.createElement(ControlButtons, ControlButtonProps)
  }, React.createElement("div", {
    className: "all-picker-content"
  }, React.createElement("div", {
    className: "main-controls"
  }, React.createElement(Grid, {
    centered: true,
    columns: 1,
    container: true,
    padded: true
  }, React.createElement(Card, null, React.createElement(Card.Content, null, React.createElement(Card.Header, null, React.createElement(Button, {
    as: "div",
    floated: "left",
    labelPosition: "right"
  }, React.createElement(Button, {
    icon: true,
    onClick: showCloser
  }, React.createElement(Icon, {
    name: `angle ${getCloserIcon()}`
  })), React.createElement(Label, {
    as: "a",
    basic: true,
    onClick: showCloser
  }, getCloserLabel())), allowDate && (allowTime || allowZone) && React.createElement(ChangeControls, {
    actions: {
      showDate: actShowCalendar,
      showTime: actShowClock,
      showZone: actShowZone
    },
    visible: {
      date: showDate,
      time: showTime,
      zone: showZone
    },
    allowZone: allowZone,
    allowDate: allowDate,
    allowTime: allowTime
  })), allowDate && (allowTime || allowZone) && React.createElement(Card.Description, null, allowDate && !showDate && React.createElement("p", null, React.createElement(Icon, {
    name: "calendar alternate outline"
  }), labelDate), allowTime && !showTime && React.createElement("p", null, React.createElement(Icon, {
    name: "clock outline"
  }), labelTime), allowZone && !showZone && React.createElement("p", null, React.createElement(Icon, {
    name: "world"
  }), labelZone)))))), React.createElement("div", {
    className: "all-sidebar-content"
  }, React.createElement(Sidebar.Pushable, {
    as: Container
  }, React.createElement(PickerCloser, {
    animation: "scale down",
    direction: "bottom",
    visible: visibleCloser,
    setInvisibleCloser: closeCloser,
    discard: closeModal,
    save: saveChanges
  }), React.createElement(Sidebar.Pusher, {
    dimmed: !dimmedContent
  }, React.createElement(Container, {
    className: "picker-content"
  }, children))))));
};

ModalMain.propTypes = {
  allowDate: PropTypes.bool.isRequired,
  allowTime: PropTypes.bool.isRequired,
  allowZone: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  clearValues: PropTypes.func.isRequired,
  closeCloser: PropTypes.func.isRequired,
  showCloser: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  showClearValues: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  saveChanges: PropTypes.func.isRequired,
  visibleCloser: PropTypes.bool.isRequired,
  dimmedContent: PropTypes.bool.isRequired,
  visibleModal: PropTypes.bool.isRequired,
  actShowCalendar: PropTypes.func.isRequired,
  actShowClock: PropTypes.func.isRequired,
  actShowZone: PropTypes.func.isRequired,
  showDate: PropTypes.bool.isRequired,
  showTime: PropTypes.bool.isRequired,
  showZone: PropTypes.bool.isRequired,
  labelDate: PropTypes.string.isRequired,
  labelTime: PropTypes.string.isRequired,
  labelZone: PropTypes.string.isRequired
};
export { ModalMain as default };
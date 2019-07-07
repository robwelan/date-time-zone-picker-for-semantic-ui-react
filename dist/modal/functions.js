const doShowChangeControls = (allowDate, allowTime, allowZone) => {
  let showChangeControls = true;

  if (allowDate && allowTime === false && allowZone === false) {
    showChangeControls = false;
  }

  if (allowTime && allowDate === false && allowZone === false) {
    showChangeControls = false;
  }

  if (allowZone && allowDate === false && allowTime === false) {
    showChangeControls = false;
  }

  return showChangeControls;
};

export { doShowChangeControls as default };
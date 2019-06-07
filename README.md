# Date-Time-Zone Picker for Semantic-UI-React

## Status

In Progress.

This is a side project and a labour of love at that. I hope to have it functional and released to NPM soon.

## About

This is a date-time-zone picker specifically built for Semantic-UI-React.

It uses date-fns and date-fns-timezone to work its magic. There is no moment.js to be found here.

## Features

- pick a date
- pick a time
- pick a date and a time
- pick a timezone

## Dependencies

- semantic-ui-react
- semantic-ui-css
- date-fns
- jstz
- timezone-support
- date-fns-timezone

## DevDependencies

- eslint
- prettier
- eslint-plugin-prettier
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-react
- eslint-config-airbnb
- eslint-config-airbnb-base

## Use Yarn

- yarn start to start the app
- yarn build to build the app

---

## Props

Documentation is under development.

### setDate

Description: Show the Calendar Control so that the date can be set.

Default: true

Type: boolean

### setMilliseconds

Description: Within the Time Control allow setting of Milliseconds.

Default: false

Type: boolean

Dependancies: setTime, setSeconds

### setSeconds

Description: Within the Time Control allow setting of Seconds.

Default: false

Type: boolean

Dependancies: setTime

### setTwentyFour

Description: Within the Time Control, set time in twenty-four hour time or in am/pm style.

Default: true

Type: boolean

Dependancies: setTime

### setTime

Description: Show the Time Control so that the time can be set.

Default: false

Type: boolean

### setZone

Description: Show the Timezone Control so that the timezone can be set.

Default: false

Type: boolean

NOTE: the date control will still be available if setDate, setTime and setZone are all set to false.

---

### MIT License

Copyright (c) 2019 Rob Welan

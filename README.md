# Date-Time-Zone Picker for Semantic-UI-React

## Status

Coming Soon: dedicated documentation page.

In Progress.

This is a side project and a labour of love at that.

## How To Include

`import DateTimeZonePicker from 'date-time-zone-picker-for-semantic-ui-react'`

See Component further down for information on how to use.

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

---

## Component

`<DateTimeZonePicker setDate, setTime, setZone value={value} onChange={this.handleChange} />`

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

### value

Description: The time and date and zone value. You should create a shape that matches the Props you have chosen. For example, if you set setTime to true, you should include the time shape. If you set setTime to false, you should not include the time shape.

Default: {}

Type: Object

**Number Types**:
year, month, day, hour, minute, second, millisecond

**String Types**:
zone

What it should look like (you should set to an empty object or the time derived from your api):

value = {
&nbsp;&nbsp;date: {
&nbsp;&nbsp;&nbsp;&nbsp;year: 2019,
&nbsp;&nbsp;&nbsp;&nbsp;month: 6, // where January is 1
&nbsp;&nbsp;&nbsp;&nbsp;day: 1,
&nbsp;&nbsp;},
&nbsp;&nbsp;time: {
&nbsp;&nbsp;&nbsp;&nbsp;hour: 18,
&nbsp;&nbsp;&nbsp;&nbsp;minute: 59,
&nbsp;&nbsp;&nbsp;&nbsp;second: 0,
&nbsp;&nbsp;&nbsp;&nbsp;millisecond: 0,
&nbsp;&nbsp;},
&nbsp;&nbsp;zone: 'Australia/Sydney',
};

### onChange

Description: gets data from the DateTimeZonePicker. Create a handleChange function that accepts a _data_ object as an arguement.

For example:

handleChange(data) {

&nbsp;&nbsp;console.log(data);

}

output: { date: { year: 2019, month: 6, day: 1 }, time: { hour: 18, minute: 59, second: 0, millisecond: 0 }, zone: 'Australia/Sydney' }

### Data Returned

Depending on the Props set, your shape will return either an empty object ({}) or a date object ({date: {year: ...}}) or a time object ({time: {hour: ...}}) or a zone object {zone: 'Australia/Sydney'}. If setDate and setTime are both true and setZone is false, then the returned data object will return a data object including date object and a time object, but not a zone object.

You can expect to get returned what you ask the Picker to enable you to pick - but no more. In other words, if you setDate to _true_ and setZone to _true_, date and zone will be returned in the _data_ object, but not time.

---

## Use Yarn

- yarn start to start the app
- yarn build to build the app

---

### MIT License

Copyright (c) 2019 Rob Welan

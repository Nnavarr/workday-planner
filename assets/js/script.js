// date variables
var now = dayjs();

// pass date time in string format to #currentDay 
// Day of Week, Month, Day Numbe
var dateString = now.format('dddd: MMMM D, YYYY');

// html elements
var currentDayEl = document.getElementById('currentDay');

// set current day string
currentDayEl.textContent = dateString;

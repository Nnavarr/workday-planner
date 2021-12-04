// date variables
var now = dayjs();
var dateString = now.format('dddd: MMMM D, YYYY');
var date = now.format('YYYY-MM-D');

// import local storage if present
var taskStorage = localStorage.getItem('taskMemory');
// if the current date is not present, establish an empty container
if (!taskStorage){
    var taskStorage = {
        'date': date,
            'tasks': {
                '9:00 AM': '',
                '10:00 AM': '',
                '11:00 AM': '',
                '12:00 PM': '',
                '1:00 PM': '',
                '2:00 PM': '',
                '3:00 PM': '',
                '4:00 PM': '',
                '5:00 PM': ''
            }
    }
    localStorage.setItem('taskMemory', JSON.stringify(taskStorage))
}

// html elements
var currentDayEl = document.getElementById('currentDay');

// set current day string
currentDayEl.textContent = dateString;

// click event for saveBtn
$('.saveBtn').click(function () {
    // extract task description
    var taskDescription = $(this)
        .siblings('.description')[0]
        .innerText;
    // extract task time slot
    var taskTime = $(this)
        .siblings('.hour')[0]
        .innerText;


})

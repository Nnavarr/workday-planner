// date variables
var now = dayjs();
var dateString = now.format('dddd: MMMM D, YYYY');
var date = now.format('YYYY-MM-D');

var test = document.getElementById('text-test');

// import local storage if present
var taskStorage = JSON.parse(localStorage.getItem('taskMemory'));

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
    localStorage.setItem('taskMemory', JSON.stringify(taskStorage));
} else {
    // iterate through the local storage and import saved tasks
    for (task in taskStorage['tasks']){
        var taskEl = document.getElementById(`${task}`);
        var descriptionEl = taskEl.nextElementSibling;

        // update descriptionEl with storage value
        descriptionEl.value = taskStorage['tasks'][task];
    }
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
        .value;

    // extract task time slot
    var taskTime = $(this)
        .siblings('.hour')[0]
        .innerText;

    // update specific task entry and update local storage
    taskStorage['tasks'][taskTime] = taskDescription;
    localStorage.setItem('taskMemory', JSON.stringify(taskStorage));
})

// click event for task description or creation
$('.description').click(function () {
    var text = $(this).value().trim();
    var newText = $('<textarea>').addClass('description col-sm-8').val(text);
    $(this).replaceWith(newText);
})


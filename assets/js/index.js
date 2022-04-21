// set all my variables
var mainContainer = $('.container');
var jumbotron = $('.jumbotron');
var currentDay = $('#currentDay');
var divContainer = $('.container');
var timeBlock = divContainer.children('section')

// add time function to jumbotron
function updateTime() {
    /* By declaring the variable inside the function, it allows for the time to be updated every second. 
    With the variable declared outside the function, it would always remain the time as when the page was loaded. */
    var time = moment().format('MMM Do YYYY, hh:mm:ss:a');
    $(currentDay).text(time);
}
// this runs the updateTime function every second
setInterval(updateTime, 1000);

// add functionality for changing the color of the row depending on the time of day.
function changeColor() {
    var time = moment().format('hha');
    // check if the value of time is == value of time tag in the html.
    for (var i = 0; i <= 8; i++) {
        // here I am comparing the current time with the text of each time slot on the planner.
        if (time == timeBlock.eq(i).children().eq(0).text()) {
            // if the current hour is on the page, change that class to present
            timeBlock.eq(i).children().eq(1).addClass('present');
        }
    }
}

setInterval(changeColor, 1000);



// add functionality that the user can click and add text to each row.

// add the function to delete info in row with clear button

// store written text in localStorage
// set all my variables
var mainContainer = $('.container');
var jumbotron = $('.jumbotron');
var currentDay = $('#currentDay');

// add time function to jumbotron
function updateTime() {
    /* By declaring the variable inside the function, it allows for the time to be updated every second. 
    With the variable declared outside the function, it would always remain the time as when the page was loaded. */
    var time = moment().format('MMM Do YYYY, hh:mm:ss:a');
    $(currentDay).text(time);
}
// this runs the updateTime function every second
setInterval(updateTime, 1000);
// when page loads, display planner.


// add functionality for changing the color of the row depending on the time of day.

// add functionality that the user can click and add text to each row.

// add the function to delete info in row with clear button

// store written text in localStorage
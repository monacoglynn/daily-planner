// set all my variables
var mainContainer = $('.container');
var jumbotron = $('.jumbotron');
var currentDay = $('#currentDay');
var divContainer = $('.container');
var timeBlock = divContainer.children('section');
// Selects the save buttons
var saves = [$('.9Save'), $('.10Save'), $('.11Save'), $('.12Save'), $('.13Save'), $('.14Save'), $('.15Save'), $('.16Save'), $('.17Save')]
// selects the textarea elements
var textInput = [$('#9'), $('#10'), $('#11'), $('#12'), $('#13'), $('#14'), $('#15'), $('#16'), $('#17')]

// add time function to jumbotron
function updateTime() {
    /* By declaring the variable inside the function, it allows for the time to be updated every second. 
    With the variable declared outside the function, it would always remain the time as when the page was loaded. */
    var time = moment().format('MMM Do YYYY, hh:mm:ss a');
    currentDay.text(time);
}

// add function to pull saved text from localStorage

function init() {
    var oneSavedText;
    for (var i = 0; i < saves.length; i++) {
        var savedText;
        var oneSavedNote = JSON.parse(localStorage.getItem(`savedText${i}`));
        // if there isn't any thing in local storage
        if (oneSavedNote == null) {
            console.log(i + ' memory is empty')
        } else {
            //otherwise we use that data to fill in the text area
            textInput[i].val(oneSavedNote);
        }
    }
}
init();
// this runs the updateTime function every second
setInterval(updateTime, 1000);

// add functionality for changing the color of the row depending on the time of day.
function changeColor() {
    var currentTime = moment().hour();
    for (var i = 9; i <= 17; i++) {
        var timeBlock = $('#' + i);
        if (currentTime > i) {
            // if the current time is more than the index, the timeblock will be set to past
            timeBlock.addClass('past');
            // this removes other color classes.
            timeBlock.removeClass('present');
            timeBlock.removeClass('future');
        } else if (currentTime == i) {
            // if the current time is equal to index, the time block will be set to present.
            timeBlock.addClass('present');
            timeBlock.removeClass('past');
            timeBlock.removeClass('future');
        } else {
            // all other cases will be treated as future times.
            timeBlock.addClass('future');
            timeBlock.removeClass('past');
            timeBlock.removeClass('present');
        }
    }
}
// this makes sure the timeBlocks are updated in real time by running the function every minute.
setInterval(changeColor, 1000);

// here I are the listeners for each save button to save the text to localStorage
saves[0].on('click', function () {
    console.log('YOU CLICKED ON ME');
    localStorage.setItem('savedText0', JSON.stringify(textInput[0].val()));
});
saves[1].on('click', function () {
    console.log('YOU CLICKED ON ME');
    localStorage.setItem('savedText1', JSON.stringify(textInput[1].val()));
});

saves[2].on('click', function () {
    console.log('YOU CLICKED ON ME');
    localStorage.setItem('savedText2', JSON.stringify(textInput[2].val()));
});

saves[3].on('click', function () {
    console.log('YOU CLICKED ON ME');
    localStorage.setItem('savedText3', JSON.stringify(textInput[3].val()));
});

saves[4].on('click', function () {
    console.log('YOU CLICKED ON ME');
    localStorage.setItem('savedText4', JSON.stringify(textInput[4].val()));
});

saves[5].on('click', function () {
    console.log('YOU CLICKED ON ME');
    localStorage.setItem('savedText5', JSON.stringify(textInput[5].val()));
});
saves[6].on('click', function () {
    console.log('YOU CLICKED ON ME');
    localStorage.setItem('savedText6', JSON.stringify(textInput[6].val()));
});

saves[7].on('click', function () {
    console.log('YOU CLICKED ON ME');
    localStorage.setItem('savedText7', JSON.stringify(textInput[7].val()));
});

saves[8].on('click', function () {
    console.log('YOU CLICKED ON ME');
    localStorage.setItem('savedText8', JSON.stringify(textInput[8].val()));
});
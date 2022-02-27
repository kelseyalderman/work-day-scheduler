// Current day is displayed at the top of the calendar
// Each time block is color-coded to indicate whether it is in the past, present, or future
//      Check times every minute?
// Save event entered in time block by clicking the save button
//     Save text to local storage
// Load events from local storage

// Current day is displayed at the top of the calendar
var date = moment().format("dddd, MMMM Do");

$("#currentDay").text(date);

// Function to color-code each time block to indicate whether it is in the past, present, or future
var timeTracker = function () {
  // Get current time
  var currentHour = moment().hours();

  // Loop through each time block to determine if it is past, preset, or future
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id"));

    // Change ids to color code time blocks to indicate past, present, and future
    if (blockHour < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
  console.log("time checked");
};

// Check time to update blocks when page loads
timeTracker();

// Check time to update blocks every 10 minutes
setInterval(function () {
  $(".time-block").each(function (index, el) {
    timeTracker(el);
  });
}, 1000 * 60 * 10);

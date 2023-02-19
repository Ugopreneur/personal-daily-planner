// When this document loads in the browser, run this function
$(document).ready(function () {

  //Get the current date and day from moment.js
  var currentDate = moment().format("MMMM Do YYYY");
  var currentDay = moment().format("dddd");

  //display the current date and time at the top of the calendar
  $("#currentDay").text(`${currentDay}, ${currentDate}`);

  // When the SAVE button is clicked, grab the related time and value then save to local storage
  $(".saveBtn").on("click", function () { 

    var time = $(this).parent().attr("id"); // targets parent's id
    var value = $(this).siblings(".description").val(); // targets siblling with class of description and get's its value
    localStorage.setItem(time, value); // saves to local storage

    // FUTURE CONSIDERATION: write if statement to display notification to user after they succesfully save text to local storage
    // but display "nothing saved" if field was empty or unchanged

  });

  // looks at time block and gives a BG colour based on past, present or future
  (function pastPresentOrFuture() {

    var currentTime = moment().hour();

    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("-")[1]); //parseInt looks at the number and parses it into an integer
      // compare the block time to the current time and set the adequate BG colour
      if (currentTime > blockTime) {
        $(this).addClass("past");
      } else if (currentTime == blockTime) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }

      // Ensure the text stays on screen even when user refreshes
      $(this)
        .children("textarea")
        .val(localStorage.getItem($(this).attr("id")));

        // FUTURE CONSIDERATION: Move the code getting stuff from localstorage from inside the pastPresentOrFuture function
    
    });
  })();

});

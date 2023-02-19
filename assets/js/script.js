// When this document loads in the browser, run this function
$(document).ready(function(){

    //Get the current time from moment.js
    var timeTEst = moment().format('MMMM Do YYYY');
    var test2 = moment().format('dddd'); 

    //display the current date and time at the top of the calendar
    $("#currentDay").text(test2 + ", " + timeTEst); // use back tick stuff
    
    // When the SAVE button is clicked, grab the related time and value then save to local storage
    $(".saveBtn").on("click", function(){
        var time = $(this).parent().attr("id"); // targets parent's id
        var value = $(this).siblings(".description").val(); // targets siblling with class of description and get's its value
        localStorage.setItem(time, value); // save's both to local storage
    });

    // looks at time block and gives a BG colour based on past, present or future  
    (function pastPresentOrFuture() {
        
        var currentTime = moment().hour();

        $(".time-block").each(function(){
            var blockTime = parseInt($(this).attr("id").split("-")[1]) //parseInt looks at the number and parses it into an integer
            // compare the block time to the current time
             if (currentTime > blockTime) {
                // then set the adequate BG colour
                $(this).addClass("past")
             } else if (currentTime == blockTime) {
                $(this).addClass("present")
             } else {
                $(this).addClass("future")
             }
            
            //  console.log()
             $(this).children("textarea").val(localStorage.getItem($(this).attr("id")))


        });
    })();

    // Ensure the text stays on screen even when user refreshes
    localStorage.getItem

});


// Allow a user to enter an event when they click a timeblock.

// Save the event in local storage when the save button is clicked in that timeblock.


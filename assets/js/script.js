// When this document loads in the browser, run this function
$(document).ready(function(){
    
    // grab the related time and value on the click of any save button
    $(".saveBtn").on("click", function(){
        var time = $(this).parent().attr("id"); // targets parent's id
        var value = $(this).siblings(".description").val(); // targets siblling with class of description and get's its value
        localStorage.setItem(time, value);
    });

    // looks at time block and gives a BG colour based on past, present or future  
    (function pastOrFuture() {
        var currentTime = moment().hour();
        $(".time-block").each(function(){
            var blockTime = parseInt($(this).attr("id").split("-")[1]) //parseInt looks at the number and parses it into an integer
        });
    })();

});
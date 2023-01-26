let today = $('#today');
let saveBtn = document.querySelector(".saveBtn");
var currentTime = moment().hour();

// display the current date
$

//match date/time to past, present, future
function trackDateHour() {
    $('.timeOfDay').each(function() {
        const currentTime = parseInt(dayjs().format('HH'));
        let calenderHour = $(this).attr("id").split("time")[1];
        if (timeOfday < currentTime) {
            $(this).addClass("past");
        }
        else if (timeOfDay == currentTime) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    })
}

$(".saveBtn").on("click", function () {
    let value = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
})

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
trackDateHour();
currentDay();
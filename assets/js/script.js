//Current Date
var time = moment();
var displayMoment = document.getElementById("currentDay");
displayMoment.innerHTML = time.format("M-D-YYYY, h:mma");

//var time = getHours();




$(".col-1").each(function() {
       if (time > 12) {
       $("#row-1").addClass("bg-secondary")
}
        else {
        if (time < 1)
    $("#row-1").addClass("bg-warning")
}
    
})







//$('hour').each(function(index, value){
    // now we're in a loop!
  // You can also use jQuery to find the ID of the current element
  // You'll need the id of the current element to use in your if statement; that's how we'll decide what color the time block is!
  //});
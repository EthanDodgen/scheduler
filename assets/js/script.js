//Current Date
var time = moment();
var displayMoment = document.getElementById("currentDay");
displayMoment.innerHTML = time.format("M-D-YYYY, h:mma");

var nowTime = moment().hours()


$(".hour").each(function() {
      if (parseInt($(this).data("pineapple")) < nowTime) {
            $(this).next().addClass("bg-secondary")
      }
      if (parseInt($(this).data("pineapple")) == nowTime) {
            $(this).next().addClass("bg-success")
      }
      if (parseInt($(this).data("pineapple")) > nowTime) {
            $(this).next().addClass("bg-warning")
      }
})

$("#row-1").click (function() {
      var text = $(this)
      var textInput = $("<textarea>")
      $(this).replaceWith(textInput)
      textInput.trigger("focus")
      
     
      //.val(text)
      //.text()
      //.trim()
    })



$(".saveBtn").click (function() {
      console.log("rad")
      preventDefault()

})
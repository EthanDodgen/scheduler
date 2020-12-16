//Current Date
var time = moment();
var displayMoment = document.getElementById("currentDay");
displayMoment.innerHTML = time.format("M-D-YYYY, h:mma");
var nowTime = moment().hours()

// time/color change
$(".hour").each(function() {

      var nowTime = moment().hours()

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

//returns and saves input to local storage
$(".saveBtn").click (function() {
      $(this).siblings("textarea").val()

      var text = $(this).siblings("textarea").val()
      //console.log(text)

      localStorage.setItem("input", text)

      localStorage.getItem("input")
})







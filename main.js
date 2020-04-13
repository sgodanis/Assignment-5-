//$activate jquery function (y return)action with special sauce

$(".save-button").on("click", function () {
  var timeOfday = $(this).siblings("input").attr("id");
  var textContent = $(this).siblings("input").val().trim();
  localStorage.setItem(timeOfday, textContent);
});

$("#9am").val(localStorage.getItem("9am"));

$("#10am").val(localStorage.getItem("10am"));

$("#11am").val(localStorage.getItem("11am"));

$("#12pm").val(localStorage.getItem("12pm"));

$("#1pm").val(localStorage.getItem("1pm"));

$("#2pm").val(localStorage.getItem("2pm"));

$("#3pm").val(localStorage.getItem("3pm"));

$("#4pm").val(localStorage.getItem("4pm"));

$("#5pm").val(localStorage.getItem("5pm"));

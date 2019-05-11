
$(".toggle-light").click(function() {
  $("body").toggleClass("bsw-nights");
  $(".slider").toggleClass("checked");
  if ($("body").hasClass("bsw-nights")) {
    localStorage.setItem("nightmode", "true");
  } else {
    localStorage.setItem("nightmode", "false");
  }
});
var local_Storage = localStorage.getItem("nightmode");
if (local_Storage == "true") {
  $("body").addClass("bsw-nights");
  $(".slider").addClass("checked");
} else {
  $("body").removeClass("bsw-nights");
  $(".slider").removeClass("checked");
}
$(".toggle-list").click(function() {
  $("body").toggleClass("bsw-lists");
  $(".slideres").toggleClass("checked");
  if ($("body").hasClass("bsw-lists")) {
    localStorage.setItem("listmode", "true");
  } else {
    localStorage.setItem("listmode", "false");
  }
});
var local_Storage = localStorage.getItem("listmode");
if (local_Storage == "true") {
  $("body").addClass("bsw-lists");
  $(".slideres").addClass("checked");
} else {
  $("body").removeClass("bsw-lists");
  $(".slideres").removeClass("checked");
}

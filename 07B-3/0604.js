$(document).ready(function () {
  $(".nav > ul > li").on("mouseover", function () {
    $(".nav > ul > li > ul > li").css({ display: "block" });
  });
  $(".nav > ul > li  ").on("mouseout", function () {
    $(".nav > ul > li > ul > li").css({ display: "none" });
  });
  setInterval(function () {
    $(".slide").animate({ "margin-top": "-100%" }, function () {
      $(".sli").first().appendTo(".slide");
      $(".slide").css({ "margin-top": "0%" });
    });
  }, 3000);
  $(".popop").on("click", function () {
    $("#pop").fadeIn();
  });
  $("#closePop").on("click", function () {
    $("#pop").fadeOut();
  });
});

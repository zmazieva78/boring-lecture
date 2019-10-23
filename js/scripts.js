$(document).ready(function() {
// This function highlights and resets back to original state after each click

    $(".highlight").click(function() {
     if
     ($(this).hasClass("allOver")) {
       $(this).removeClass("allOver");
     }
      else
      {
        $(this).addClass("allOver");
      }
  });
////////////////////////////////////



  $("#addColor2").click(function() {
    // $(".highlight2").removeClass();
    $(".highlight2").addClass("allOver");

  });
  $("#addColor3").click(function() {
    // $(".highlight3").removeClass();
    $(".highlight3").addClass("allOver");

  });
  $("#addColor4").click(function() {
    // $(".highlight4").removeClass();
    $(".highlight4").addClass("allOver");

  });






})

$(document).ready(function() {
  $(".clickable").click(function() {
    $("#ferrari-hidden").slideToggle();
    $("#ferrari-showing").slideToggle();
  });


  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#invert").click(function(){
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $("button#devert").click(function(){
    $("body").removeClass();
    $("body").addClass("light-background");
  });
});

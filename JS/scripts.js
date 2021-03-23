// $(document).ready(function(){
//   $(".clickable").click(function(){
//     $("#walrus-showing").slideToggle();
//     $("#walrus-hidden").slideToggle();
//   });
// });


$(document).ready(function() {
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

  $("button#dMode").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-mode");
  });
});


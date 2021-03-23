// $(document).ready(function(){
//   $(".clickable").click(function(){
//     $("#walrus-showing").slideToggle();
//     $("#walrus-hidden").slideToggle();
//   });
// });


$(document).ready(function() {
  $("button#green").click(function() {
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").addClass("red-background");
  });
});


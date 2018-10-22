$(document).ready(function() {
  $("form#listEnter").submit(function(event) {
    var inputGroc = $("#inputGroceries").val();
    var splitGroc = inputGroc.split();

    $(".outputList").text(splitGroc);
    console.log(inputGroc);
    console.log(splitGroc);

    event.preventDefault();

  });


});

$(document).ready(function() {
  $("form#listEnter").submit(function(event) {
    function splitString(stringToSplit, separator){
      return stringToSplit.split(separator);
    }


    var inputGroc = $("#inputGroceries").val();
    var comma = ', ';

    var split = splitString(inputGroc, comma);

    console.log(split);

    


    event.preventDefault();

  });


});

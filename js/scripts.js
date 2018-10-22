$(document).ready(function() {

  $("form#friends").submit(function(event) {
    var friends = ["friend1", "friend2", "friend3"];
    friends.forEach(function(friend) {
      var userInput = $("input#" + friend).val();
      $("." + friend).text(userInput);


    });


    $(".output").show();
    event.preventDefault();

  });



});

// var Food = $("#favFood").val();
// var Music = $("#favMusic").val();
// var Day = $("#favDayOfTheWeek").val();
// var Animal = $("#favAnimal").val();
// var nba = $("#favNBA").val();
// var output = [Food, Music, Day, Animal, nba];


// console.log(output1);

// debugger
// var arrayFavs = jQuery.makeArray(".form-control");
//
// $(arrayFavs).appendTo(".output");




// console.log(output1);
// var output1 = jQuery.makeArray(output);
// console.log(output1);
// debugger

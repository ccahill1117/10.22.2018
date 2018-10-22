$(document).ready(function() {

  $("form#favThings").submit(function(event) {
    var things = ["favFood", "favMusic", "favDayOfTheWeek", "favAnimal", "favNBA"];


    things.forEach(function(thing) {
      var userInput = $("input#" + thing).val();
      $("." + thing).text(userInput);
      console.log(thing + ",  userInput=" + userInput);
      // debugger

    });
    debugger


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

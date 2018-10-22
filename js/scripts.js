$(document).ready(function() {
  $("form#listEnter").submit(function(event) {

    function splitString(stringToSplit, separator) {
        return (stringToSplit.split(separator).sort());
          // debugger
    }


    var inputGroc = $("#inputGroceries").val();
    var comma = ', ';

    var split1 = splitString(inputGroc, comma);

    console.log(split1);



// https://www.w3resource.com/javascript-exercises/javascript-function-exercise-5.php

    function uppercase(str) {
      var newarray =[];
      for(var x = 0; x < split1.length; x++) {
        newarray.push(split1[x].charAt(0).toUpperCase()+split1[x].slice(1));

      }

      return newarray;
    }

    // var split2 = split1.map(function(splitP) {
    //   return uppercase(splitP);
    // });

      var split2 = uppercase(split1);
      // var split3 = [split2];

      console.log(split2);

      split2.forEach(function(item) {
        $("#outputList").append('<li>' + item + '</li>')
      });



    // split.map(function())




    // var sortGroc = split.sort();
    //   console.log(sortGroc);


    event.preventDefault();

  });


});

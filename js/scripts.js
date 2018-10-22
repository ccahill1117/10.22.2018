$(document).ready(function() {
  $("form#listEnter").submit(function(event) {
    // function splitString(stringToSplit, separator){
    //   return stringToSplit.split(separator);
    // }
    function splitString(stringToSplit, separator) {
        return (stringToSplit.split(separator).sort());
          // debugger
    }


    var inputGroc = $("#inputGroceries").val();
    var comma = ', ';

    var split1 = splitString(inputGroc, comma);

    var split2 = split1.map(function(splitP) {
      return uppercase(splitP);
    });


    function uppercase(str) {
      var newarray =[];
      for(var x = 0; x < split1.length; x++) {
        newarray.push(split1[x].charAt(0).toUpperCase()+split1[x].slice(1));


      }

      return newarray.join(' ');
    }
      console.log(split2);








    // split.map(function())




    // var sortGroc = split.sort();
    //   console.log(sortGroc);


    event.preventDefault();

  });


});

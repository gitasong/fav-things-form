$(document).ready(function() {
  // console.log("hello");
  var favThingsArr = [];
  // console.log(favThingsArr);

  $("#fav-things").submit(function(event) {

    var item1Input = $("input#item1").val();
    // console.log(item1Input);
    var item2Input = $("input#item2").val();
    // console.log(item2Input);
    var item3Input= $("input#item3").val();
    // console.log(item3Input);
    var item4Input = $("input#item4").val();
    // console.log(item4Input);
    var item5Input = $("input#item5").val();
    // console.log(item5Input);

    favThingsArr.push(item1Input, item2Input, item3Input, item4Input, item5Input);
    newArr = [];
    newArr.push(favThingsArr[1], favThingsArr[0], favThingsArr[2]);
    // console.log(newArr);

    $("#results").show();
    $("#second").text(newArr[0]);
    $("#first").text(newArr[1]);
    $("#third").text(newArr[2]);

    event.preventDefault();
  });
});

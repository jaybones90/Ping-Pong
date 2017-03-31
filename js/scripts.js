// These are my globally defined variables
var userNumber, result


var display = function (){
  $("#displayAnswer").append("<li>" + result + "</li>");
};


// This is the back-end code that does the arithmatic
var add = function(){
  for (var index = 1; index <= userNumber; index++) {
    result = 0;
      if (index % 5 === 0 && index % 3 === 0) {
        result = ""
        result += "ping-pong"
      } else if (index % 5 === 0) {
        result = ""
        result += "pong"
      } else if (index % 3 === 0) {
        result = ""
        result += "ping"
      } else  {
        result += index;
      };
      display();
    };
};


// This is the front-end code that interacts with the user//
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();

    userNumber = parseInt($("input").val());
    if (isNaN(userNumber)){
      $(this).toggleClass("element-animation")
      $("#noNumber").text("Please Enter A Number!")
    } else {
      $("#noNumber").empty();
    }
    $("#displayAnswer").empty();
    add();
  });

    $("#startButton").click(function(){
      $("#startSection").fadeToggle(1000);
      $("#startButton").toggle();
    });

    $("#pingPongButton").click(function(){
      $("#displayAnswerSection").show();
    });

    $("#h1shake").click(function(){
      $(this).toggleClass("element-animation")
    });

});

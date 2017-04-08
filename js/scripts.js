// These are my globally defined variables
var userNumber, result

var display = function (){
  $("#displayAnswer").append("<li>" + result + "</li>");
};

// This is the back-end code that does the arithmatic
var add = function(pingPong,pong,ping){
  for (var index = 1; index <= userNumber; index++) {
    result = ""
      if (index % 5 === 0 && index % 3 === 0) {
        // result = ""
        result += pingPong
      } else if (index % 5 === 0) {
        // result = ""
        result += pong
      } else if (index % 3 === 0) {
        // result = ""
        result += ping
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
      $("#displayAnswerSection").hide();

    } else {

      $("#noNumber").empty();
      $("#displayAnswerSection").show();
    }
      $("#displayAnswer").empty();
      var pingPong = "ping-pong" + "<img src='img/pingpong1.png'>";
      var pong = "pong" + "<img src='img/pingpongbluesmall.png'>";
      var ping = "<img src='img/pingpongredsmall.png'>" + "ping";
      add(pingPong,pong,ping);
  });

    $("#startButton").click(function(){
      $("#startSection").fadeToggle(1000);
      $(this).toggleClass("bounceOutAnimation");
    });

    $("#h1shake").click(function(){
      $(this).toggleClass("red")
    });

    $(".rulesAlign").click(function(){
      $(this).toggleClass("white")
    });
});

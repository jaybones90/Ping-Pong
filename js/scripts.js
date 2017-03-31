var userNumber, result

var display = function (){
  $("#displayAnswer").append("<li>" + result + "</li>");
};

var add = function(){

  for (var index = 1; index <= userNumber; index++) {
    result = 0;

    if (index % 5 === 0) {
      result = ""
      result += "ping"

    }
    result += index;
    display();
  };
};






// This is the front-end code that interacts with the user//
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    userNumber = parseInt($("input").val());
    add();
  });
});

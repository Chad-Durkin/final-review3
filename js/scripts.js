var divideByFifteen = function(userNumber) {
  if((userNumber % 15) === 0)
  {
    return "ping-pong";
  }

  return userNumber;
};




$(function() {
  $("#user-input").submit(function(event) {
    event.preventDefault();
    var userNumber = $("#user-number").val();
    var userOutput;

    userOutput = divideByFifteen(userNumber);
    console.log(userOutput);
    
    $("#display-output").append("<li>" + userOutput + "</li>");
  })
});

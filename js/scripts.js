var divideBySpecs = function(userNumber) {
  if((userNumber % 15) === 0)
    return "ping-pong";
  else if((userNumber % 5) === 0)
    return "pong";
  else if((userNumber % 3) === 0)
    return "ping";
  return userNumber;
};


$(function() {
  $("#user-input").submit(function(event) {
    event.preventDefault();
    var userNumber = $("#user-number").val();
    var userOutput = divideBySpecs(userNumber);
    $("#display-output").append("<li>" + userOutput + "</li>");
  })
});

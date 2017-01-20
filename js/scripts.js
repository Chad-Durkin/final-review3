var divideBySpecs = function(userNumber) {
  if((userNumber % 15) === 0)
  {
    return "ping-pong";
  }
  else if((userNumber % 5) === 0)
  {
    return "pong";
  }

  return userNumber;
};


$(function() {
  $("#user-input").submit(function(event) {
    event.preventDefault();
    var userNumber = $("#user-number").val();

    var userOutput = divideBySpecs(userNumber);
    console.log(userOutput);

    $("#display-output").append("<li>" + userOutput + "</li>");
  })
});

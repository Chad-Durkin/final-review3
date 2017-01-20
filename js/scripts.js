var divideBySpecs = function(userNumber) {
  if((userNumber % 15) === 0)
    return "ping-pong";
  else if((userNumber % 5) === 0)
    return "pong";
  else if((userNumber % 3) === 0)
    return "ping";
  return userNumber;
};

var createArray = function(userNumber) {
  var numberArray = new Array(userNumber);
  var numberCounter = 1;

  for(index = 0; index < userNumber; index++)
  {
    numberArray[index] = numberCounter;
    numberCounter++;
  }

  return numberArray;
}


$(function() {
  $("#user-input").submit(function(event) {
    event.preventDefault();
    var userNumber = $("#user-number").val();
    var userOutput = createArray(userNumber);


    $("#display-output").append("<li>" + userOutput + "</li>");
  })
});

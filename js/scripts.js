var createArray = function(userNumber) {
  var numberArray = new Array(userNumber);
  var numberCounter = 1;

  for(index = 0; index < userNumber; index++)
  {
    if((numberCounter % 15) === 0)
    {
      numberArray[index] = "ping-pong";
    }
    else if((numberCounter % 5) === 0)
    {
      numberArray[index] = "pong";
    }
    else if((numberCounter % 3) === 0)
    {
      numberArray[index] = "ping";
    }
    else
    {
      numberArray[index] = numberCounter;
    }
    numberCounter++;
  }
  return numberArray;
}

var outputArray = function(newArray) {
  for(var index = 0; index < newArray.length; index++)
  {
      $("#display-output").append("<li>" + newArray[index] + "</li>");
  }
}


$(function() {
  $("#user-input").submit(function(event) {
    event.preventDefault();
    var userNumber = $("#user-number").val();
    var newArray = createArray(userNumber);
    outputArray(newArray);
  })
});

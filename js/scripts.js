//Business Logicus
var userInput;
var output;
var outputArray = [];
var pingPongs = ["ping", "pong", "ping-pong"]

var pingPonger = function(input) {
  output = 0;
  for (var i = 1; i <= input; i++) {
    if (i % 15 === 0) {
      output = pingPongs[2]
      outputArray.push("<li>" + output + "</li>");
    } else if (i % 5 === 0) {
      output = pingPongs[1]
      outputArray.push("<li>" + output + "</li>");
    } else if (i % 3 === 0) {
      output = pingPongs[0];
      outputArray.push("<li>" + output + "</li>");
    } else {
      outputArray.push("<li>" + i + "</li>");
    };
  };
  return outputArray;
};

//User Interface Logicus
$(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    userInput = parseInt($("#user-input").val());
    $("#output").append(pingPonger(userInput).join(""));
  });
});

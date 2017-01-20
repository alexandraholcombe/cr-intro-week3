//Business Logicus
var userInput;
var outputArray = [];
var pingPongs = ["ping", "pong", "ping-pong"]

var pingPonger = function(input) {
  output = 0;
  for (var i = 1; i <= input; i++) {
    if (i % 15 === 0) {
      output = output + pingPongs[2]
    } else if (i % 5 === 0) {
      output = output + pingPongs[1]
    } else if (i % 3 === 0) {
      output = output + pingPongs[0];
    } else {
      output = output + i + ", "
    };
  };
  return output;
};

//User Interface Logicus
$(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    userInput = parseInt($("#user-input").val());
    $("#output").text(pingPonger(userInput));
  });
});

//Business Logicus
var userInput;
var output;

var pingPonger = function(input) {
  output = 0;
  for (var i = 1; i <= input; i++) {
    if (i % 3 === 0) {
      output = output + "ping, ";
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

//Business Logicus
var userInput;

var pingPonger = function(input) {
  return input;
};

//User Interface Logicus
$(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    userInput = parseInt($("#user-input").val());
    $("#output").text(pingPonger(userInput));
  });
});

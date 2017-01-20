//Business Logicus
var userInput;

//User Interface Logicus
$(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    userInput = parseInt($("#user-input").val());
    $("ul#output").text(pingPonger(userInput));
  });
});

//Business Logicus
var userInput;
var output;
var outputItems = [];
var domList = $("#output")
var pingPongs = ["ping", "pong", "ping-pong"]

var pingPonger = function(input) {
  output = 0;
  for (var i = 1; i <= input; i++) {
    if (i % 15 === 0) {
      output = pingPongs[2]
      // outputArray.push("<li>" + output + "</li>");
      outputItems.push($("<li/>").text(output).html());
    } else if (i % 5 === 0) {
      output = pingPongs[1]
      outputItems.push($("<li/>").text(output).html());
    } else if (i % 3 === 0) {
      output = pingPongs[0];
      outputItems.push($("<li/>").text(output).html());
    } else {
      outputItems.push(i);
    };
  };
  $.each(outputItems, function(i, val){
    $("<li>").text(val).appendTo("#output");
    // $("#output").append("<li>" + val + "</li>");
  })
};



//User Interface Logicus
$(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    userInput = parseInt($("#user-input").val());
    $("#output").append(pingPonger(userInput).join(""));
  });
});

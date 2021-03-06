//Business Logicus
var userInput;
var outputItems = [];
var pingPongs = ["ping", "pong", "ping-pong"]

var getStarted = function(){
  $(".intro-splash").fadeOut();
  $("#play").delay(400).fadeIn();
};

var pingPonger = function(input) {
  $("#output").empty();
  outputItems = [];
  var output = 0;
  for (var i = 1; i <= input; i++) {
    if (i % 15 === 0) {
      output = pingPongs[2]
      outputItems.push(output);
    } else if (i % 5 === 0) {
      output = pingPongs[1]
      outputItems.push(output);
    } else if (i % 3 === 0) {
      output = pingPongs[0];
      outputItems.push(output);
    } else {
      outputItems.push(i);
    };
  };
  $.each(outputItems, function(i, val){
    $("<li>").text(val).appendTo("#output");
  })
  $("li:contains('ping')").addClass("ping-pong");
  $("li:contains('pong')").addClass("ping-pong");
  $("li:contains('ping-pong')").addClass("ping-pong");
};

//User Interface Logicus
$(function(){
  $("#btn-started").click(function() {
    getStarted();
  });

  $("form").submit(function(event) {
    event.preventDefault();
    userInput = parseInt($("#user-input").val());
    $("#output").text(pingPonger(userInput));
  });
});

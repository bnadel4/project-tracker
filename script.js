var heroEl = $('#hero');
var welcomeMessage = $('<h1>');
welcomeMessage.text('Welcome to this page!');
heroEl.append(welcomeMessage);
var currentTimeDate = $('<h2>');
var time = dayjs().format('hh:mm:ss a');
var date = dayjs().format('MMM DD, YYYY');
currentTimeDate.text(date + ' at ' + time);


$(function(){
  setInterval(everySecondFunction, 1000);
  });
  
  function everySecondFunction() {
  // code that runs every second
  var time = dayjs().format('hh:mm:ss a');
  var date = dayjs().format('MMM DD, YYYY');
  currentTimeDate.text(date + ' at ' + time);
  }
heroEl.append(currentTimeDate);









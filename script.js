var heroEl = $('#hero');
var welcomeMessage = $('<h1>');
welcomeMessage.text('Welcome to this page!');
heroEl.append(welcomeMessage);

dayjs().format('YYYY-MM-DD h:mm A');

import dayjs from "dayjs";

dayjs("2021-09-13 20:09:09").add(20, "minute").format();

var objToday = new Date(),
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear(),
	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
	curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
var today = curHour + ":" + curMinute + "." + curSeconds + curMeridiem + " " + dayOfWeek + " " + dayOfMonth + " of " + curMonth + ", " + curYear;

document.getElementsByTagName('h1')[0].textContent = today;











// // TODO: Add the following text to the newly created `<p>` element: "~ Carol Dweck"
// welcomeMessage.text('Carol Dweck');
// // TODO: Add the class `plain` to the author element
// welcomeMessage.addClass('plain');
// // TODO: Create a new `<h1>` element that will store an author's quote and assign it to new variable
// var authorQuote = $('<h1>');
// // TODO: Add the following quote text to the quote element, "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."
// authorQuote.append('<p>"Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."</p>');
// // TODO: Apply the class `fancy` to the quote element
// authorQuote.addClass('fancy');
// // TODO: Append the author element to the quote element
// authorQuote.append(welcomeMessage);
// // TODO: Append the quote element to the HTML element with an ID of `root` in `index.html`
// root.append(authorQuote);

(function() {
  var messages = [];
  var time = document.getElementById("time");
  var display = document.getElementById("message");
  function check() {
    showMessage(currentMessage());
    showTime();
  }
  function currentMessage() {
    var message = null;
    if (messages.length) {
      var now = toTheSecond(new Date());
      var start = toTheSecond(new Date(messages[0].start_time));
      var end = toTheSecond(new Date(start.getTime() + ( messages[0].text_duration * 1000 )));
      if (start <= now) {
        if (end <= now) {
          // done with the current message...
          messages = messages.slice(1);
          // ...but check if there's another one ready to go right now
          message = currentMessage();
        }
        else {
          message = messages[0];
        }
      }
    }
    return message;
  }
  function toTheSecond(date) {
    date.setMilliseconds(0);
    return date;
  }
  function showMessage(message) {
    if (message) {
      display.textContent = message.text_content;
    }
    else {
      display.textContent = "no messages";
    }
  }
  function showTime() {
    time.textContent = new Date().toLocaleString()
  }
  function getMessages() {
    setTimeout(function() {
      var now = new Date();
      messages.push(
        {"text_content":"aaaaa","text_duration":5,"start_time": new Date(now.getTime() + 3000).toISOString()},
        {"text_content":"aawwaaaaa","text_duration":5,"start_time": new Date(now.getTime() + 10000).toISOString()},
        {"text_content":"bbaawwaaaaa","text_duration":5,"start_time": new Date(now.getTime() + 15000).toISOString()}
      );
    }, 1000);
  }
  setInterval(check, 500);
  getMessages();
})();
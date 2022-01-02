function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var amPM = (h > 11) ? "PM" : "AM";

  if (h > 12) {
    h -= 12;
    } else if (h === 0) {
       h = 12;
    }
  // add a zero in front of numbers<10
  m = checkTime(m);
  document.getElementById('time').innerHTML = h + ":" + m + " " + amPM;
  t = setTimeout(function() {
    startTime()
  }, 500);

  var dateOptions = {
    weekday: "long",
    month: "long",
    day: "numeric"
  }

  var date = today.toLocaleDateString("en-US", dateOptions);
  document.getElementById("headerDate").innerHTML = date;
}

function greeting() {
  var h = new Date().getHours();

	if (h >= 6 && h < 12) {
		document.getElementById('greeting').innerHTML = "Good morning, Brian!";

	} else if (h >= 12 && h < 17) {
		document.getElementById('greeting').innerHTML = "Good afternoon, Brian!";

	} else if (h >= 17 && h < 22) {
		document.getElementById('greeting').innerHTML = "Good evening, Brian!";
	}

  else if (h >= 22 && h < 24) {
		document.getElementById('greeting').innerHTML = "Good night, Brian!";
	}

  else if (h >= 0 && h < 6 ) {
		document.getElementById('greeting').innerHTML = "Good night, Brian!";
	}
}


var button = document.getElementById("btnSearch");

button.onclick = function () {
var text = document.getElementById("textBoxEl").value;
window.open("http://reddit.com/r/" + text,"_self");
}

var input = document.getElementById("textBoxEl");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btnSearch").click();
    }
});


checkTime();
greeting()
startTime();

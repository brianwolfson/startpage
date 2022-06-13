function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;

    var time = h + ":" + m + " " + session;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;

    setTimeout(showTime, 1000);
}

function greeting() {
  var h = new Date().getHours();

	if (h >= 6 && h < 12) {
		document.getElementById('greeting').innerHTML = "Good morning, Brian";
    document.title = "Good morning, Brian";

	} else if (h >= 12 && h < 17) {
		document.getElementById('greeting').innerHTML = "Good afternoon, Brian";
    document.title = "Good afternoon, Brian";

	} else if (h >= 17 && h < 22) {
		document.getElementById('greeting').innerHTML = "Good evening, Brian";
    document.title = "Good evening, Brian";
	}

  else if (h >= 22 && h < 24) {
		document.getElementById('greeting').innerHTML = "Good night, Brian";
    document.title = "Good night, Brian";
	}

  else if (h >= 0 && h < 6 ) {
		document.getElementById('greeting').innerHTML = "Good night, Brian";
    document.title = "Good night, Brian";
	}
}

showTime();
greeting();

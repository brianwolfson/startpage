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
		document.getElementById('greeting').innerHTML = "good morning, brian";
    document.title = "good morning, brian";

	} else if (h >= 12 && h < 17) {
		document.getElementById('greeting').innerHTML = "good afternoon, brian";
    document.title = "good afternoon, brian";

	} else if (h >= 17 && h < 22) {
		document.getElementById('greeting').innerHTML = "good evening, brian";
    document.title = "good evening, brian";
	}

  else if (h >= 22 && h < 24) {
		document.getElementById('greeting').innerHTML = "good night, brian";
    document.title = "good night, brian";
	}

  else if (h >= 0 && h < 6 ) {
		document.getElementById('greeting').innerHTML = "good night, brian";
    document.title = "good night, brian";
	}
}

function showDate() {
  var d = new Date();
  var day = d.getDate();
  if (day <= 9)
    day = "0" + day;
  var month = d.getMonth() + 1;
  if (month <= 9)
    month = "0" + month;
  var year = d.getFullYear();
  var currentDate = month + "/" + day + "/" + year;

  document.getElementById("currentDate").innerText = currentDate;
}

var printQuote = () => {
  let api = `https://api.quotable.io/random`;

  fetch(api)
    .then(function (response) {
      let data = response.json();
      return data;
    })
    .then(function (data) {
	  quote.innerHTML = `"${ data.content }"`;
	  if (data.author != null) quoteAuthor.innerHTML = `- ${ data.author }`;
	});
};

printQuote();
showTime();
greeting();
showDate();

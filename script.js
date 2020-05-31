function countdown(dataEnd){
	var timer, days, hours, minutes, seconds;
	dataEnd = new Date(dataEnd);
	dataEnd = dataEnd.getTime();

	if (isNaN(dataEnd)){
		return;
	}

	timer = setInterval(calculate, 1000);
	function calculate(){
		var dataStart = new Date();
		var dataStart = new Date(dataStart.getUTCFullYear(),
			dataStart.getUTCMonth(),
			dataStart.getUTCDate(),
			dataStart.getUTCHours(),
			dataStart.getUTCMinutes(),
			dataStart.getUTCSeconds());
	var timeRemaining = parseInt((dataEnd - dataStart.getTime())/1000)
	
    if (timeRemaining >= 0) {
    	days = parseInt(timeRemaining / 86400);
    	timeRemaining = (timeRemaining % 86400);
    	hours = parseInt(timeRemaining / 3600);
    	timeRemaining = (timeRemaining % 3600);
    	minutes = parseInt(timeRemaining / 60);
    	timeRemaining = (timeRemaining % 60);
    	seconds = parseInt(timeRemaining);


    	document.getElementById("days").innerHTML = parseInt(days, 10);
    	document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
        document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
        document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);    	
    }else {
    	return;
    }

     function display(days, hours, minutes, seconds) {}
	}

}
countdown ('09/01/2020 02:00:00 AM');
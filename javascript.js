
var audio = new window.AudioContext();
var tempo = document.getElementById("showTempo").innerHTML;
var interval;
var started = false;
var timeSigTop = 3;
var beatPerMeasure;
var timeSigBot = 0;
var beatSound = 0;
var sound;
var beatCount;
var subdiv = 0;
var subdivide;
var speed;

function bottomTime(index) {
  	if (index == 1 || index == 2) {
  		timeSigBot = index;
  		document.getElementById("meter").innerHTML = "8th =";
    	document.getElementById("subdivision").setAttribute("disabled","disabled");
	} else {
		timeSigBot = index;
		document.getElementById("meter").innerHTML = "4th =";
    	document.getElementById("subdivision").removeAttribute("disabled");
	}
}


function createOsc4(subdivide, beatPerMeasure) {
	var gain = audio.createGain();
	var osc = audio.createOscillator();

	gain.connect(audio.destination);
    gain.gain.setValueAtTime(0, audio.currentTime);
    gain.gain.linearRampToValueAtTime(1, audio.currentTime + 1 / 1000);
    gain.gain.linearRampToValueAtTime(0, audio.currentTime + 50 / 1000);

    if (beatSound === 4) {
		if (beatCount % subdivide === 0) {
			document.getElementById("overlay").innerHTML = "1";
			osc.frequency.value = 110;
			osc.type = "sine";
		} else if (beatCount % subdivide === subdivide * (1 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "2";
			osc.frequency.value = 220;
			osc.type = "sawtooth";
		} else if (beatCount % subdivide === subdivide * (2 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "3";
			osc.frequency.value = 110;
			osc.type = "sine";
		} else if (beatCount % subdivide === subdivide * (3 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "4";
			osc.frequency.value = 220;
			osc.type = "sawtooth";
		} else if (beatCount % subdivide === subdivide * (4 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "5";
			osc.frequency.value = 110;
			osc.type = "sine";
		} else if (beatCount % subdivide === subdivide * (5 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "6";
			osc.frequency.value = 220;
			osc.type = "sawtooth";
		} else if (beatCount % subdivide === subdivide * (6 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "7";
			osc.frequency.value = 110;
			osc.type = "sine";
		} else if (beatCount % subdivide === subdivide * (7 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "8";
			osc.frequency.value = 220;
			osc.type = "sawtooth";
		} else if (beatCount % subdivide === subdivide * (8 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "9";
			osc.frequency.value = 110;
			osc.type = "sine";
		} else if (beatCount % subdivide === subdivide * (9 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "10";
			osc.frequency.value = 220;
			osc.type = "sawtooth";
		} else if (beatCount % subdivide === subdivide * (10 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "11";
			osc.frequency.value = 110;
			osc.type = "sine";
		} else if (beatCount % subdivide === subdivide * (11 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "12";
			osc.frequency.value = 220;
			osc.type = "sawtooth";
		} else if (beatCount % subdivide === subdivide * (12 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "13";
			osc.frequency.value = 110;
			osc.type = "sine";
		} else if (beatCount % subdivide === subdivide * (13 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "14";
			osc.frequency.value = 220;
			osc.type = "sawtooth";
		} else if (beatCount % subdivide === subdivide * (14 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "15";
			osc.frequency.value = 110;
			osc.type = "sine";
		} else {
			osc.frequency.value = 880;
			osc.type = "triangle";
		}
	} else {
		if (beatSound === 0) {
			sound = "triangle";
		} else if (beatSound === 1) {
			sound = "sine";
		} else if (beatSound === 2) {
			sound = "square";
		} else if (beatSound === 3) {
			sound = "sawtooth";
		}
		if (beatCount % subdivide === 0) {
			document.getElementById("overlay").innerHTML = "1";
		} else if (beatCount % subdivide === subdivide * (1 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "2";
		} else if (beatCount % subdivide === subdivide * (2 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "3";
		} else if (beatCount % subdivide === subdivide * (3 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "4";
		} else if (beatCount % subdivide === subdivide * (4 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "5";
		} else if (beatCount % subdivide === subdivide * (5 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "6";
		} else if (beatCount % subdivide === subdivide * (6 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "7";
		} else if (beatCount % subdivide === subdivide * (7 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "8";
		} else if (beatCount % subdivide === subdivide * (8 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "9";
		} else if (beatCount % subdivide === subdivide * (9 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "10";
		} else if (beatCount % subdivide === subdivide * (10 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "11";
		} else if (beatCount % subdivide === subdivide * (11 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "12";
		} else if (beatCount % subdivide === subdivide * (12 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "13";
		} else if (beatCount % subdivide === subdivide * (13 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "14";
		} else if (beatCount % subdivide === subdivide * (14 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "15";
		}

		if (beatCount % subdivide === 0) {
			osc.frequency.value = 440;
		} else {
			osc.frequency.value = 220;
		}

		osc.type = sound;
	}

	osc.connect(gain);
	osc.start(0);

	setTimeout(function() {
        osc.stop(0);
        osc.disconnect(gain);
        gain.disconnect(audio.destination);
    }, 50);
    beatCount += 1;
}

function createOsc8(beatPerMeasure, timeSigBot) {
	var gain = audio.createGain();
	var osc = audio.createOscillator();

	gain.connect(audio.destination);
    gain.gain.setValueAtTime(0, audio.currentTime);
    gain.gain.linearRampToValueAtTime(1, audio.currentTime + 1 / 1000);
    gain.gain.linearRampToValueAtTime(0, audio.currentTime + 50 / 1000);


	if (beatSound === 4 && timeSigBot === 1) {
		if (beatCount % beatPerMeasure === 0) {
			document.getElementById("overlay").innerHTML = "1";
			osc.frequency.value = 110;
			osc.type = "sine";
		} else if (beatCount % beatPerMeasure === 1) {
			document.getElementById("overlay").innerHTML = "2";
			osc.frequency.value = 220;
			osc.type = "sawtooth";
		} else if (beatCount % beatPerMeasure === 2) {
			document.getElementById("overlay").innerHTML = "3";
			osc.frequency.value = 110;
			osc.type = "sine";
		} else if (beatCount % beatPerMeasure === 3) {
			document.getElementById("overlay").innerHTML = "4";
			osc.frequency.value = 220;
			osc.type = "sawtooth";
		} else if (beatCount % beatPerMeasure === 4) {
			document.getElementById("overlay").innerHTML = "5";
			osc.frequency.value = 110;
			osc.type = "sine";
		} else if (beatCount % beatPerMeasure === 5) {
			document.getElementById("overlay").innerHTML = "6";
			osc.frequency.value = 220;
			osc.type = "sawtooth";
		} else if (beatCount % beatPerMeasure === 6) {
			document.getElementById("overlay").innerHTML = "7";
			osc.frequency.value = 110;
			osc.type = "sine";
		} else if (beatCount % beatPerMeasure === 7) {
			document.getElementById("overlay").innerHTML = "8";
			osc.frequency.value = 220;
			osc.type = "sawtooth";
		} else if (beatCount % beatPerMeasure === 8) {
			document.getElementById("overlay").innerHTML = "9";
			osc.frequency.value = 110;
			osc.type = "sine";
		} else {
			osc.frequency.value = 880;
			osc.type = "triangle";
		}
	} else {
		if (beatSound === 0) {
			sound = "triangle";
		} else if (beatSound === 1) {
			sound = "sine";
		} else if (beatSound === 2) {
			sound = "square";
		} else if (beatSound === 3) {
			sound = "sawtooth";
		}
		if (beatCount % subdivide === 0) {
			document.getElementById("overlay").innerHTML = "1";
		} else if (beatCount % beatPerMeasure === 1) {
			document.getElementById("overlay").innerHTML = "2";
		} else if (beatCount % beatPerMeasure === 2) {
			document.getElementById("overlay").innerHTML = "3";
		} else if (beatCount % beatPerMeasure === 3) {
			document.getElementById("overlay").innerHTML = "4";
		} else if (beatCount % beatPerMeasure === 4) {
			document.getElementById("overlay").innerHTML = "5";
		} else if (beatCount % beatPerMeasure === 5) {
			document.getElementById("overlay").innerHTML = "6";
		} else if (beatCount % beatPerMeasure === 6) {
			document.getElementById("overlay").innerHTML = "7";
		} else if (beatCount % beatPerMeasure === 7) {
			document.getElementById("overlay").innerHTML = "8";
		} else if (beatCount % beatPerMeasure === 8) {
			document.getElementById("overlay").innerHTML = "9";
		} else if (beatCount % beatPerMeasure === 9) {
			document.getElementById("overlay").innerHTML = "10";
		} else if (beatCount % beatPerMeasure === 10) {
			document.getElementById("overlay").innerHTML = "11";
		} else if (beatCount % beatPerMeasure === 11) {
			document.getElementById("overlay").innerHTML = "12";
		} else if (beatCount % beatPerMeasure === 12) {
			document.getElementById("overlay").innerHTML = "13";
		} else if (beatCount % beatPerMeasure === 13) {
			document.getElementById("overlay").innerHTML = "14";
		} else if (beatCount % beatPerMeasure === 14) {
			document.getElementById("overlay").innerHTML = "15";
		}

		if (beatCount % subdivide === 0) {
			osc.frequency.value = 440;
		} else {
			osc.frequency.value = 220;
		}

		osc.type = sound;
	}

	osc.connect(gain);
	osc.start(0);

	setTimeout(function() {
        osc.stop(0);
        osc.disconnect(gain);
       	gain.disconnect(audio.destination);
    }, 50);
    beatCount += 1;
}

function startMetronome() {

	if (timeSigTop === 0) {
		beatPerMeasure = 1;
	} else if (timeSigTop === 1) {
		beatPerMeasure = 2;
	} else if (timeSigTop === 2) {
		beatPerMeasure = 3;
	} else if (timeSigTop === 3) {
		beatPerMeasure = 4;
	} else if (timeSigTop === 4) {
		beatPerMeasure = 5;
	} else if (timeSigTop === 5) {
		beatPerMeasure = 6;
	} else if (timeSigTop === 6) {
		beatPerMeasure = 7;
	} else if (timeSigTop === 7) {
		beatPerMeasure = 8;
	} else if (timeSigTop === 8) {
		beatPerMeasure = 9;
	} else if (timeSigTop === 9) {
		beatPerMeasure = 10;
	} else if (timeSigTop === 10) {
		beatPerMeasure = 11;
	} else if (timeSigTop === 11) {
		beatPerMeasure = 12;
	} else if (timeSigTop === 12) {
		beatPerMeasure = 13;
	} else if (timeSigTop === 13) {
		beatPerMeasure = 14;
	} else if (timeSigTop === 14) {
		beatPerMeasure = 15;
	}

	if (timeSigBot === 0) {
		if (subdiv === 0) {
			subdivide = beatPerMeasure;
			speed = tempo;
		} else if (subdiv === 1) {
			subdivide = beatPerMeasure * 2;
			speed = tempo * 2;
		} else if (subdiv === 2) {
			subdivide = beatPerMeasure * 4;
			speed = tempo * 4;
		} else if (subdiv === 3) {
			subdivide = beatPerMeasure * 3;
			speed = tempo * 3;
		}

		beatCount = subdivide;

		interval = setInterval(createOsc4, 60000/speed, subdivide, beatPerMeasure);

	} else {
		speed = tempo;
		
		beatCount = beatPerMeasure;

		interval = setInterval(createOsc8, 60000/speed, beatPerMeasure, timeSigBot); 

	}
}

function stopMetronome() {
	document.getElementById("overlay").innerHTML = "";
	clearInterval(interval);
}

function eventSS() {
	if (started === false) {
		started = true;
		document.getElementById("overlay").style.display = "block";
		document.getElementById("eventButton").innerHTML = "Stop";
		startMetronome();
	} else {
		started = false;
		document.getElementById("overlay").style.display = "none";
		document.getElementById("eventButton").innerHTML = "Start";
		stopMetronome();
	}
}

document.getElementById("eventButton").onclick = eventSS;
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        eventSS();
    }
};



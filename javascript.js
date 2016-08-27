
var audio = new window.AudioContext();
var tempo = document.getElementById("showTempo").innerHTML;
var interval;
var started = false;
var timeSigTop = 3;
var beatPerMeasure;
var timeSigBot = 0;
var beatSound = 0;
var beatCount;
var subdiv = 0;
var subdivide;
var speed;

function onChangeSignature() {
	document.getElementById("subdivision4").style.display = "none";
	document.getElementById("subdivision85").style.display = "none";
	document.getElementById("subdivision87").style.display = "none";
	if (document.getElementById("timeSigBot").selectedIndex === 1) {
		document.getElementById("meter").innerHTML = "8th =";
		if (document.getElementById("timeSigTop").selectedIndex === 4) {
    		document.getElementById("subdivision85").style.display = "inline";
		} else if (document.getElementById("timeSigTop").selectedIndex === 6) {
    		document.getElementById("subdivision87").style.display = "inline";
		}
	} else {
		document.getElementById("meter").innerHTML = "4th =";
		document.getElementById("subdivision4").style.display = "inline";
	}
}


// function topTime(index) {
// 	if (index == 4) {
// 		document.getElementById("five1").removeAttribute("disabled");
// 		document.getElementById("five1").setAttribute("selected","selected");
// 		document.getElementById("five2").removeAttribute("disabled");
// 		document.getElementById("seven1").setAttribute("disabled", "disabled");
// 		document.getElementById("seven2").setAttribute("disabled", "disabled");
// 		document.getElementById("seven3").setAttribute("disabled", "disabled");
// 		document.getElementById("seven4").setAttribute("disabled", "disabled");
// 	} else if (index == 6) {
// 		document.getElementById("five1").setAttribute("disabled", "disabled");
// 		document.getElementById("five2").setAttribute("disabled", "disabled");
// 		document.getElementById("seven1").removeAttribute("disabled");
// 		document.getElementById("seven1").setAttribute("selected","selected");
// 		document.getElementById("seven2").removeAttribute("disabled");
// 		document.getElementById("seven3").removeAttribute("disabled");
// 		document.getElementById("seven4").removeAttribute("disabled");
// 	}
// }

// function bottomTime(index) {
//   	if (index == 1) {
//   		timeSigBot = index;
//   		document.getElementById("meter").innerHTML = "8th =";
//     	document.getElementById("subdivision4").style.display = "none";
//     	document.getElementById("subdivision8").style.display = "inline";
// 	} else {
// 		timeSigBot = index;
// 		document.getElementById("meter").innerHTML = "4th =";
//     	document.getElementById("subdivision8").style.display = "none";
//     	document.getElementById("subdivision4").style.display = "inline";
// 	}
// }




function createOsc4(subdivide, beatPerMeasure) {
	var gain = audio.createGain();
	var osc = audio.createOscillator();

	gain.connect(audio.destination);
    gain.gain.setValueAtTime(0, audio.currentTime);
    gain.gain.linearRampToValueAtTime(1, audio.currentTime + 1 / 1000);
    gain.gain.linearRampToValueAtTime(0, audio.currentTime + 50 / 1000);

    if (beatSound === 4) {
    	debugger;
		if (beatCount % beatPerMeasure === 0) {
			document.getElementById("overlay").innerHTML = "1";
			osc.frequency.value = 120;
			osc.type = "sine";
		} else if (beatCount % beatPerMeasure === subdivide * (1/ beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "2";
			osc.frequency.value = 220;
			osc.type = "sawtooth";
		} else if (beatCount % beatPerMeasure === subdivide * (2/ beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "3";
			osc.frequency.value = 120;
			osc.type = "sine";
		} else if (beatCount % beatPerMeasure === subdivide * (3/ beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "4";
			osc.frequency.value = 220;
			osc.type = "sawtooth";
		} else if (beatCount % beatPerMeasure === subdivide * (4/ beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "5";
			osc.frequency.value = 120;
			osc.type = "sine";
		} else if (beatCount % beatPerMeasure === subdivide * (5/ beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "6";
			osc.frequency.value = 220;
			osc.type = "sawtooth";
		} else if (beatCount % beatPerMeasure === subdivide * (6/ beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "7";
			osc.frequency.value = 120;
			osc.type = "sine";
		} else if (beatCount % beatPerMeasure === subdivide * (7/ beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "8";
			osc.frequency.value = 220;
			osc.type = "sawtooth";
		} else if (beatCount % beatPerMeasure === subdivide * (8/ beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "9";
			osc.frequency.value = 120;
			osc.type = "sine";
		} else if (beatCount % beatPerMeasure === subdivide * (9 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "10";
			osc.frequency.value = 220;
			osc.type = "sawtooth";
		} else if (beatCount % subdivide === subdivide * (10 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "11";
			osc.frequency.value = 120;
			osc.type = "sine";
		} else if (beatCount % subdivide === subdivide * (11 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "12";
			osc.frequency.value = 220;
			osc.type = "sawtooth";
		} else if (beatCount % subdivide === subdivide * (12 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "13";
			osc.frequency.value = 120;
			osc.type = "sine";
		} else if (beatCount % subdivide === subdivide * (13 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "14";
			osc.frequency.value = 220;
			osc.type = "sawtooth";
		} else if (beatCount % subdivide === subdivide * (14 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "15";
			osc.frequency.value = 120;
			osc.type = "sine";
		} else {
			osc.frequency.value = 880;
			osc.type = "triangle";
		}

	} else {
		debugger;
		document.getElementById("overlay").innerHTML = Math.floor(beatCount % subdivide) + 1;

		if (beatSound === 0) {
			osc.type = "triangle";
		} else if (beatSound === 1) {
			osc.type = "sine";
		} else if (beatSound === 2) {
			osc.type = "square";
		} else if (beatSound === 3) {
			osc.type = "sawtooth";
		}

		if (beatCount % subdivide === 0) {
			osc.frequency.value = 440;
		} else {
			osc.frequency.value = 220;
		}

	}

	osc.connect(gain);
	osc.start(0);

	setTimeout(function() {
        osc.stop(0);
        osc.disconnect(gain);
        gain.disconnect(audio.destination);
    }, 50);
    beatCount += 1;
} // end createOsc4()





function createOsc8(beatPerMeasure, timeSigBot) {
	var gain = audio.createGain();
	var osc = audio.createOscillator();

	gain.connect(audio.destination);
    gain.gain.setValueAtTime(0, audio.currentTime);
    gain.gain.linearRampToValueAtTime(1, audio.currentTime + 1 / 1000);
    gain.gain.linearRampToValueAtTime(0, audio.currentTime + 50 / 1000);

	document.getElementById("overlay").innerHTML = (beatCount % beatPerMeasure) + 1;

	if (beatSound === 4) {

		if (beatCount % beatPerMeasure === 0) {
			osc.frequency.value = 110;
			osc.type = "sine";
		} else if (beatCount % beatPerMeasure === 3) {
			osc.frequency.value = 220;
			osc.type = "sawtooth";
		} else {
			osc.frequency.value = 880;
			osc.type = "triangle";
		}

	} else {

		if (beatSound === 0) {
			osc.type = "triangle";
		} else if (beatSound === 1) {
			osc.type = "sine";
		} else if (beatSound === 2) {
			osc.type = "square";
		} else if (beatSound === 3) {
			osc.type = "sawtooth";
		}

		if (beatCount % beatPerMeasure === 0) {
			osc.frequency.value = 440;
		} else if (beatCount % beatPerMeasure === 3) {
			osc.frequency.value = 330;
		} else {
			osc.frequency.value = 220;
		}
		

	}

	osc.connect(gain);
	osc.start(0);

	setTimeout(function() {
        osc.stop(0);
        osc.disconnect(gain);
       	gain.disconnect(audio.destination);
    }, 50);
    beatCount += 1;
} // end createOsc8()




function startMetronome() {

	beatPerMeasure = (timeSigTop + 1);

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
} // end startMetronome()




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




var audio = new window.AudioContext(); 													// Gives the ability to make sound with the window
var interval;																			// For starting and stoping the setInterval function
var started = false;																	// For the event function to know whether to start or stop the metronome
var beatCount;																			// To keep track of the beats for the sound and count display

function onChangeSignature() {															// Switches the subdivision display based on the time signature chosen
	document.getElementById("subdivision4").style.display = "none";						// The logic checks the time signature and changes the display accordingly
	document.getElementById("subdivision85").style.display = "none";
	document.getElementById("subdivision87").style.display = "none";
	document.getElementById("subdivision88").style.display = "none";
	document.getElementById("subdivision89").style.display = "none";
	document.getElementById("subdivision810").style.display = "none";
	document.getElementById("subdivision811").style.display = "none";
	document.getElementById("subdivision813").style.display = "none";
	document.getElementById("subdivision814").style.display = "none";
	document.getElementById("subdivision815").style.display = "none";

	document.getElementById("subdivision8na").style.display = "none";

	if (document.getElementById("timeSigBot").selectedIndex === 1) {
		document.getElementById("meter").innerHTML = "8th =";

		if (document.getElementById("timeSigTop").selectedIndex === 4) {
    		document.getElementById("subdivision85").style.display = "inline";

		} else if (document.getElementById("timeSigTop").selectedIndex === 6) {
    		document.getElementById("subdivision87").style.display = "inline";

		} else if (document.getElementById("timeSigTop").selectedIndex === 7) {
			document.getElementById("subdivision88").style.display = "inline";

		} else if (document.getElementById("timeSigTop").selectedIndex === 8) {
			document.getElementById("subdivision89").style.display = "inline";
		
		} else if (document.getElementById("timeSigTop").selectedIndex === 9) {
			document.getElementById("subdivision810").style.display = "inline";
		
		} else if (document.getElementById("timeSigTop").selectedIndex === 10) {
			document.getElementById("subdivision811").style.display = "inline";
		
		} else if (document.getElementById("timeSigTop").selectedIndex === 12) {
			document.getElementById("subdivision813").style.display = "inline";
		
		} else if (document.getElementById("timeSigTop").selectedIndex === 13) {
			document.getElementById("subdivision814").style.display = "inline";
		
		} else if (document.getElementById("timeSigTop").selectedIndex === 14) {
			document.getElementById("subdivision815").style.display = "inline";
		
		} else {
			document.getElementById("subdivision8na").style.display = "inline";
		}

	} else {
		document.getElementById("meter").innerHTML = "4th =";
		document.getElementById("subdivision4").style.display = "inline";
	}
}

function createOsc4(notesPerMeasure, beatPerMeasure, beatSound) {							// This is the function to control the metronome when 4 is the meter chosen
	var gain = audio.createGain();															// Uses the audioContext to make a controller for the sound oscillator
	var osc = audio.createOscillator();														// Uses the audioContext to make the sound oscillator

	gain.connect(audio.destination);														// Sets the output
    gain.gain.setValueAtTime(0, audio.currentTime);											// Keeps track of when the sound gets started
    gain.gain.linearRampToValueAtTime(1, audio.currentTime + 1 / 1000);						// Quickly fades the sound in
    gain.gain.linearRampToValueAtTime(0, audio.currentTime + 50 / 1000);					// Fades the sound out when finished. Makes for cleaner listening

    if (beatSound === 4) { 																	// Logic is to account for the subdivisions and beatsPerMeasure and   											
		if (beatCount % notesPerMeasure === 0) {											// makes sure the correct sound is played and correct count is displayed
			document.getElementById("overlay").innerHTML = "1";
			osc.frequency.value = 120;
			osc.type = "sine";
		} else if (beatCount % notesPerMeasure === notesPerMeasure * (1/ beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "2";
			osc.frequency.value = 220;
			osc.type = "sawtooth";
		} else if (beatCount % notesPerMeasure === notesPerMeasure * (2/ beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "3";
			osc.frequency.value = 120;
			osc.type = "sine";
		} else if (beatCount % notesPerMeasure === notesPerMeasure * (3/ beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "4";
			osc.frequency.value = 220;
			osc.type = "sawtooth";
		} else if (beatCount % notesPerMeasure === notesPerMeasure * (4/ beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "5";
			osc.frequency.value = 120;
			osc.type = "sine";
		} else if (beatCount % notesPerMeasure === notesPerMeasure * (5/ beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "6";
			osc.frequency.value = 220;
			osc.type = "sawtooth";
		} else if (beatCount % notesPerMeasure === notesPerMeasure * (6/ beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "7";
			osc.frequency.value = 120;
			osc.type = "sine";
		} else if (beatCount % notesPerMeasure === notesPerMeasure * (7/ beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "8";
			osc.frequency.value = 220;
			osc.type = "sawtooth";
		} else if (beatCount % notesPerMeasure === notesPerMeasure * (8/ beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "9";
			osc.frequency.value = 120;
			osc.type = "sine";
		} else if (beatCount % notesPerMeasure === notesPerMeasure * (9 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "10";
			osc.frequency.value = 220;
			osc.type = "sawtooth";
		} else if (beatCount % notesPerMeasure === notesPerMeasure * (10 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "11";
			osc.frequency.value = 120;
			osc.type = "sine";
		} else if (beatCount % notesPerMeasure === notesPerMeasure * (11 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "12";
			osc.frequency.value = 220;
			osc.type = "sawtooth";
		} else if (beatCount % notesPerMeasure === notesPerMeasure * (12 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "13";
			osc.frequency.value = 120;
			osc.type = "sine";
		} else if (beatCount % notesPerMeasure === notesPerMeasure * (13 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "14";
			osc.frequency.value = 220;
			osc.type = "sawtooth";
		} else if (beatCount % notesPerMeasure === notesPerMeasure * (14 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "15";
			osc.frequency.value = 120;
			osc.type = "sine";
		} else {
			osc.frequency.value = 880;
			osc.type = "triangle";
		}

	} else {
		if (beatCount % notesPerMeasure === 0) {											// Logic for the count display and pitch for normal metronome sounds
			document.getElementById("overlay").innerHTML = "1";
			osc.frequency.value = 440;
		} else if (beatCount % notesPerMeasure === notesPerMeasure * (1/ beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "2";
			osc.frequency.value = 330;
		} else if (beatCount % notesPerMeasure === notesPerMeasure * (2/ beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "3";
			osc.frequency.value = 330;
		} else if (beatCount % notesPerMeasure === notesPerMeasure * (3/ beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "4";
			osc.frequency.value = 330;
		} else if (beatCount % notesPerMeasure === notesPerMeasure * (4/ beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "5";
			osc.frequency.value = 330;
		} else if (beatCount % notesPerMeasure === notesPerMeasure * (5/ beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "6";
			osc.frequency.value = 330;
		} else if (beatCount % notesPerMeasure === notesPerMeasure * (6/ beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "7";
			osc.frequency.value = 330;
		} else if (beatCount % notesPerMeasure === notesPerMeasure * (7/ beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "8";
			osc.frequency.value = 330;
		} else if (beatCount % notesPerMeasure === notesPerMeasure * (8/ beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "9";
			osc.frequency.value = 330;
		} else if (beatCount % notesPerMeasure === notesPerMeasure * (9 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "10";
			osc.frequency.value = 330;
		} else if (beatCount % notesPerMeasure === notesPerMeasure * (10 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "11";
			osc.frequency.value = 330;
		} else if (beatCount % notesPerMeasure === notesPerMeasure * (11 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "12";
			osc.frequency.value = 330;
		} else if (beatCount % notesPerMeasure === notesPerMeasure * (12 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "13";
			osc.frequency.value = 330;
		} else if (beatCount % notesPerMeasure === notesPerMeasure * (13 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "14";
			osc.frequency.value = 330;
		} else if (beatCount % notesPerMeasure === notesPerMeasure * (14 / beatPerMeasure)) {
			document.getElementById("overlay").innerHTML = "15";
			osc.frequency.value = 330;			
		} else {
			osc.frequency.value = 220;
		}

		if (beatSound === 0) {																// Checks the selected sound
			osc.type = "triangle";
		} else if (beatSound === 1) {
			osc.type = "sine";
		} else if (beatSound === 2) {
			osc.type = "square";
		} else if (beatSound === 3) {
			osc.type = "sawtooth";
		}
	}

	osc.connect(gain);																		// Connects the oscillator to the gain control
	osc.start(0);																			// Starts the sound

	setTimeout(function() {																	// Stops the sound after 0.050 seconds
        osc.stop(0);
        osc.disconnect(gain);																// Disconnect the gain and oscillator so new ones can be created
        gain.disconnect(audio.destination);
    }, 50);
    beatCount += 1;																			// Count the beats played
} // end createOsc4()

function createOsc8(beatPerMeasure, beatSound) {											// Function for standard counts in 8 meter
	var gain = audio.createGain();
	var osc = audio.createOscillator();

	gain.connect(audio.destination);
    gain.gain.setValueAtTime(0, audio.currentTime);
    gain.gain.linearRampToValueAtTime(1, audio.currentTime + 1 / 1000);
    gain.gain.linearRampToValueAtTime(0, audio.currentTime + 50 / 1000);

	document.getElementById("overlay").innerHTML = (beatCount % beatPerMeasure) + 1;		// Unlike 4 meter, we display every counted beat making the display logic much simpler
	
	if (beatCount === beatPerMeasure) {														// reset beatCount after each measure
		beatCount = 0;
	}

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
		} else if (beatCount % 3 === 0) {
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

function createOsc84(beatPerMeasure, beatSound) {											// Function for 4/8 timesignature
	var gain = audio.createGain();
	var osc = audio.createOscillator();

	gain.connect(audio.destination);
    gain.gain.setValueAtTime(0, audio.currentTime);
    gain.gain.linearRampToValueAtTime(1, audio.currentTime + 1 / 1000);
    gain.gain.linearRampToValueAtTime(0, audio.currentTime + 50 / 1000);

	document.getElementById("overlay").innerHTML = (beatCount % beatPerMeasure) + 1;		// Unlike 4 meter, we display every counted beat making the display logic much simpler

	if (beatSound === 4) {

		if (beatCount % beatPerMeasure === 0) {
			osc.frequency.value = 110;
			osc.type = "sine";
		} else if (beatCount % beatPerMeasure === 2) {
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
		} else if (beatCount % 2 === 0) {
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
} // end createOsc84()

function createOsc857(beatPerMeasure, beatSound) {											// Function for 5/8 in 2 + 3 count and 7/8 with 2 + 2 + 3 count
	var gain = audio.createGain();
	var osc = audio.createOscillator();

	gain.connect(audio.destination);
    gain.gain.setValueAtTime(0, audio.currentTime);
    gain.gain.linearRampToValueAtTime(1, audio.currentTime + 1 / 1000);
    gain.gain.linearRampToValueAtTime(0, audio.currentTime + 50 / 1000);

	document.getElementById("overlay").innerHTML = (beatCount % beatPerMeasure) + 1;		// Unlike 4 meter, we display every counted beat making the display logic much simpler
	
	if (beatCount === beatPerMeasure) {														// Reset beatCount after each measure
		beatCount = 0;
	}

	if (beatSound === 4) {
		if (beatCount % beatPerMeasure === 0) {
			osc.frequency.value = 110;
			osc.type = "sine";
		} else if (beatCount % 2 === 0 && beatCount < (beatPerMeasure - 2)) {
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
		} else if (beatCount % 2 === 0 && beatCount < (beatPerMeasure - 2)) {
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
} // end createOsc857()

function createOsc87(beatPerMeasure, beatSound) {											// Function all other 7/8 subdivisions
	var gain = audio.createGain();
	var osc = audio.createOscillator();

	gain.connect(audio.destination);
    gain.gain.setValueAtTime(0, audio.currentTime);
    gain.gain.linearRampToValueAtTime(1, audio.currentTime + 1 / 1000);
    gain.gain.linearRampToValueAtTime(0, audio.currentTime + 50 / 1000);

	document.getElementById("overlay").innerHTML = (beatCount % beatPerMeasure) + 1;		// Unlike 4 meter, we display every counted beat making the display logic much simpler
	
	if (beatCount === beatPerMeasure) {														// Reset beatCount after each measure
		beatCount = 0;
	}

	if (beatSound === 4) {																	// Logic for drum sounds

		if (document.getElementById("subdivision87").selectedIndex === 0) {					// 3 + 2 + 2

			if (beatCount % beatPerMeasure === 0) {
				osc.frequency.value = 110;
				osc.type = "sine";
			} else if (beatCount % 2 === 1 && beatCount > 2) {
				osc.frequency.value = 220;
				osc.type = "sawtooth";
			} else {
				osc.frequency.value = 880;
				osc.type = "triangle";
			}

		} else if (document.getElementById("subdivision87").selectedIndex === 2) {			// 3 + 4

			if (beatCount % beatPerMeasure === 0) {
				osc.frequency.value = 110;
				osc.type = "sine";
			} else if (beatCount === 3) {
				osc.frequency.value = 220;
				osc.type = "sawtooth";
			} else {
				osc.frequency.value = 880;
				osc.type = "triangle";
			}

		} else {

			if (beatCount % beatPerMeasure === 0) {											// 4 + 3
				osc.frequency.value = 110;
				osc.type = "sine";
			} else if (beatCount === 4) {
				osc.frequency.value = 220;
				osc.type = "sawtooth";
			} else {
				osc.frequency.value = 880;
				osc.type = "triangle";
			}
		}

	} else {																				// Metronome sounds

		if (beatSound === 0) {
			osc.type = "triangle";
		} else if (beatSound === 1) {
			osc.type = "sine";
		} else if (beatSound === 2) {
			osc.type = "square";
		} else if (beatSound === 3) {
			osc.type = "sawtooth";
		}

		if (document.getElementById("subdivision87").selectedIndex === 0) {					// 3 + 2 + 2
			
			if (beatCount % beatPerMeasure === 0) {
				osc.frequency.value = 440;
			} else if (beatCount % 2 === 1 && beatCount > 2) {
				osc.frequency.value = 330;
			} else {
				osc.frequency.value = 220;
			}

		} else if (document.getElementById("subdivision87").selectedIndex === 2){			// 3 + 4
			
			if (beatCount % beatPerMeasure === 0) {
				osc.frequency.value = 440;
			} else if (beatCount === 3) {
				osc.frequency.value = 330;
			} else {
				osc.frequency.value = 220;
			}

		} else {																			// 4 + 3

			if (beatCount % beatPerMeasure === 0) {
				osc.frequency.value = 440;
			} else if (beatCount === 4) {
				osc.frequency.value = 330;
			} else {
				osc.frequency.value = 220;
			}
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
} // end createOsc87()

function createOsc88(beatPerMeasure, beatSound) {											// Function for 8/8 with 2 + 3 + 3 count
	var gain = audio.createGain();
	var osc = audio.createOscillator();

	gain.connect(audio.destination);
    gain.gain.setValueAtTime(0, audio.currentTime);
    gain.gain.linearRampToValueAtTime(1, audio.currentTime + 1 / 1000);
    gain.gain.linearRampToValueAtTime(0, audio.currentTime + 50 / 1000);

	document.getElementById("overlay").innerHTML = (beatCount % beatPerMeasure) + 1;		// Unlike 4 meter, we display every counted beat making the display logic much simpler
	
	if (beatCount === beatPerMeasure) {														// Reset beatCount after each measure
		beatCount = 0;
	}

	if (beatSound === 4) {
		if (beatCount % beatPerMeasure === 0) {
			osc.frequency.value = 110;
			osc.type = "sine";
		} else if (beatCount === 2 || beatCount === 5) {
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
		} else if (beatCount === 2 || beatCount === 5) {
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
} // end createOsc88()

function createOsc8halfless(beatPerMeasure, beatSound) {									// Function for 9/8,11/8,13/8,15/8 with a subdivision starting with integer<half
	var gain = audio.createGain();
	var osc = audio.createOscillator();

	gain.connect(audio.destination);
    gain.gain.setValueAtTime(0, audio.currentTime);
    gain.gain.linearRampToValueAtTime(1, audio.currentTime + 1 / 1000);
    gain.gain.linearRampToValueAtTime(0, audio.currentTime + 50 / 1000);

	document.getElementById("overlay").innerHTML = (beatCount % beatPerMeasure) + 1;		// Unlike 4 meter, we display every counted beat making the display logic much simpler
	
	if (beatCount === beatPerMeasure) {														// Reset beatCount after each measure
		beatCount = 0;
	}

	if (beatSound === 4) {
		if (beatCount % beatPerMeasure === 0) {
			osc.frequency.value = 110;
			osc.type = "sine";
		} else if (beatCount === Math.floor(beatPerMeasure / 2)) {
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
		} else if (beatCount === Math.floor(beatPerMeasure / 2)) {
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
} // end createOsc8halfless()

function createOsc8halfmore(beatPerMeasure, beatSound) {									// Function for 9/8,11/8,13/8,15/8 with a subdivision starting with integer>half
	var gain = audio.createGain();
	var osc = audio.createOscillator();

	gain.connect(audio.destination);
    gain.gain.setValueAtTime(0, audio.currentTime);
    gain.gain.linearRampToValueAtTime(1, audio.currentTime + 1 / 1000);
    gain.gain.linearRampToValueAtTime(0, audio.currentTime + 50 / 1000);

	document.getElementById("overlay").innerHTML = (beatCount % beatPerMeasure) + 1;		// Unlike 4 meter, we display every counted beat making the display logic much simpler
	
	if (beatCount === beatPerMeasure) {														// Reset beatCount after each measure
		beatCount = 0;
	}

	if (beatSound === 4) {
		if (beatCount % beatPerMeasure === 0) {
			osc.frequency.value = 110;
			osc.type = "sine";
		} else if (beatCount === Math.ceil(beatPerMeasure / 2)) {
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
		} else if (beatCount === Math.ceil(beatPerMeasure / 2)) {
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
} // end createOsc8halfmore()

function createOsc810(beatPerMeasure, beatSound, accArr) {											// Function for 10/8 in all subdivisions
	var gain = audio.createGain();
	var osc = audio.createOscillator();

	gain.connect(audio.destination);
    gain.gain.setValueAtTime(0, audio.currentTime);
    gain.gain.linearRampToValueAtTime(1, audio.currentTime + 1 / 1000);
    gain.gain.linearRampToValueAtTime(0, audio.currentTime + 50 / 1000);

	document.getElementById("overlay").innerHTML = (beatCount % beatPerMeasure) + 1;		// Unlike 4 meter, we display every counted beat making the display logic much simpler
	
	if (beatCount === beatPerMeasure) {														// Reset beatCount after each measure
		beatCount = 0;
	}

	if (beatSound === 4) {
		if (beatCount % beatPerMeasure === 0) {
			osc.frequency.value = 110;
			osc.type = "sine";
		} else if (beatCount === accArr[0] || beatCount === accArr[1] || beatCount === accArr[2]) {
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
		} else if (beatCount === accArr[0] || beatCount === accArr[1] || beatCount === accArr[2]) {
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
} // end createOsc810()

function createOsc814(beatPerMeasure, beatSound, accArr) {											// Function for 14/8 in all subdivisions
	var gain = audio.createGain();
	var osc = audio.createOscillator();

	gain.connect(audio.destination);
    gain.gain.setValueAtTime(0, audio.currentTime);
    gain.gain.linearRampToValueAtTime(1, audio.currentTime + 1 / 1000);
    gain.gain.linearRampToValueAtTime(0, audio.currentTime + 50 / 1000);

	document.getElementById("overlay").innerHTML = (beatCount % beatPerMeasure) + 1;		// Unlike 4 meter, we display every counted beat making the display logic much simpler
	
	if (beatCount === beatPerMeasure) {														// Reset beatCount after each measure
		beatCount = 0;
	}

	if (beatSound === 4) {
		if (beatCount % beatPerMeasure === 0) {
			osc.frequency.value = 110;
			osc.type = "sine";
		} else if (beatCount === accArr[0] || 
					beatCount === accArr[1] || 
					beatCount === accArr[2] || 
					beatCount === accArr[3] || 
					beatCount === accArr[4] || 
					beatCount === accArr[5]) {
			
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
		} else if (beatCount === accArr[0] || 
					beatCount === accArr[1] || 
					beatCount === accArr[2] || 
					beatCount === accArr[3] || 
					beatCount === accArr[4] || 
					beatCount === accArr[5]) {
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
} // end createOsc814()

function startMetronome() {																	// Checks user inputs and starts the proper setTimeout function
	var tempo = document.getElementById("showTempo").innerHTML;
	var beatSound = document.getElementById("soundSelector").selectedIndex;
	var speed;
	var notesPerMeasure;
	var beatPerMeasure = (document.getElementById("timeSigTop").selectedIndex) + 1;
	if (document.getElementById("timeSigBot").selectedIndex === 0) {						// Logic for subdivisions for 4 meter time signatures 
		if (document.getElementById("subdivision4").selectedIndex === 0) {
			notesPerMeasure = beatPerMeasure;
			speed = tempo;
		} else if (document.getElementById("subdivision4").selectedIndex === 1) {
			notesPerMeasure = beatPerMeasure * 2;
			speed = tempo * 2;
		} else if (document.getElementById("subdivision4").selectedIndex === 2) {
			notesPerMeasure = beatPerMeasure * 4;
			speed = tempo * 4;
		} else if (document.getElementById("subdivision4").selectedIndex === 3) {
			notesPerMeasure = beatPerMeasure * 3;
			speed = tempo * 3;
		}

		beatCount = notesPerMeasure;

		interval = setInterval(createOsc4, 60000/speed, notesPerMeasure, beatPerMeasure, beatSound); // Function for 4 meter metronome passing it arguments for style

	} else {																				// Logic to determine complex 8 meter based on subdivision and beatPerMeasure
		beatCount = 0;
		var accArr;

		if (beatPerMeasure === 4) {
			interval = setInterval(createOsc84, 60000/tempo, beatPerMeasure, beatSound); 	// Function for 4/8 time signature
		} else if (beatPerMeasure === 5 && document.getElementById("subdivision85").selectedIndex === 1 ||
					beatPerMeasure === 7 && document.getElementById("subdivision87").selectedIndex === 1) {

			interval = setInterval(createOsc857, 60000/tempo, beatPerMeasure, beatSound);	// Function for 5/8 time signature with 2 + 3 count and 7/8 with 2 + 2 + 3 count
		
		} else if (beatPerMeasure === 7) {
			interval = setInterval(createOsc87, 60000/tempo, beatPerMeasure, beatSound);	// Function for all other 7/8 subdivisions
		
		} else if (beatPerMeasure === 8 && document.getElementById("subdivision88").selectedIndex === 1) {
			interval = setInterval(createOsc88, 60000/tempo, beatPerMeasure, beatSound);	// Function for 8/8 with 2 + 3 + 3 subdivision
		
		} else if (beatPerMeasure === 9 && document.getElementById("subdivision89").selectedIndex === 1 ||
					beatPerMeasure === 11 && document.getElementById("subdivision811").selectedIndex === 0 ||
					beatPerMeasure === 13 && document.getElementById("subdivision813").selectedIndex === 0 ||
					beatPerMeasure === 15 && document.getElementById("subdivision815").selectedIndex === 1) {

			interval = setInterval(createOsc8halfless, 60000/tempo, beatPerMeasure, beatSound);	// Function for 9/8,11/8,13/8,15/8 with a subdivision starting with integer<half
		
		} else if (beatPerMeasure === 9 && document.getElementById("subdivision89").selectedIndex === 2 ||
					beatPerMeasure === 11 && document.getElementById("subdivision811").selectedIndex === 1 ||
					beatPerMeasure === 13 && document.getElementById("subdivision813").selectedIndex === 1 ||
					beatPerMeasure === 15 && document.getElementById("subdivision815").selectedIndex === 2) {

			interval = setInterval(createOsc8halfmore, 60000/tempo, beatPerMeasure, beatSound);	// Function for 9/8,11/8,13/8,15/8 with a subdivision starting with integer>half
		
		} else if (beatPerMeasure === 10) {
			
			if (document.getElementById("subdivision810").selectedIndex === 0) {			// Logic to determine the accent placement
				accArr = [ 3, 6, 8 ];
			} else if (document.getElementById("subdivision810").selectedIndex === 1) {
				accArr = [ 2, 4, 7 ];
			} else if (document.getElementById("subdivision810").selectedIndex === 2) {
				accArr = [ 3, 5, 7 ];
			} else {
				accArr = [ 2, 5, 8 ];
			}

			interval = setInterval(createOsc810, 60000/tempo, beatPerMeasure, beatSound, accArr);	// Function for 10/8 in all subdivisions
		
		} else if (beatPerMeasure === 14) {
			
			if (document.getElementById("subdivision814").selectedIndex === 0) {			// Logic to determine the accent placement
				accArr = [ 3, 5, 7, 9, 11 ];
			} else {
				accArr = [ 2, 4, 7, 10, 12 ];
			}

			interval = setInterval(createOsc814, 60000/tempo, beatPerMeasure, beatSound, accArr);	// Function for 14/8 in all subdivisions
		
		} else {
			interval = setInterval(createOsc8, 60000/tempo, beatPerMeasure, beatSound); 	// Function for standard count for all other beatPerMeasure in 8 meter 
		}
	}
} // end startMetronome()

function stopMetronome() {																	// Stops any running setInterval function and clears count display
	document.getElementById("overlay").innerHTML = "";
	clearInterval(interval);
}

function eventSS() {																		// Calls the startMetronome or stopMetronome Functions and
	if (started === false) {																// displays or hides the overlay div
		started = true;
		document.getElementById("overlay").style.display = "block";
		startMetronome();
	} else {
		started = false;
		document.getElementById("overlay").style.display = "none";
		stopMetronome();
	}
}

document.getElementById("eventButton").onclick = eventSS;									// Calls eventSS when Start button is clicked or overlay div is clicked

document.body.onkeyup = function(e){														// Calls eventSS when spacebar is pressed
    if(e.keyCode == 32){
        eventSS();
    }
};



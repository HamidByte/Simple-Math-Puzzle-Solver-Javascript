
// Maximum Value Calculate
function maximumCalculate(a, b, c, d) {
	var e = a >= b ? a : b;
	var f = c >= d ? c : d;
	return e >= f ? e : f;
}

// On Click Puzzle Solver Function
function solvePuzzle() {
	// Input fields
	var rightFirstInput = document.querySelector('#rightFirstInput');
	var rightSecondInput = document.querySelector('#rightSecondInput');
	var bottomFirstInput = document.querySelector('#bottomFirstInput');
	var bottomSecondInput = document.querySelector('#bottomSecondInput');
	var rf = parseInt(rightFirstInput.value);
	var rs = parseInt(rightSecondInput.value);
	var bf = parseInt(bottomFirstInput.value);
	var bs = parseInt(bottomSecondInput.value);

	// Operators
	var topOperator = document.querySelector('#topOperator').value;
	var leftOperator = document.querySelector('#leftOperator').value;
	var rightOperator = document.querySelector('#rightOperator').value;
	var bottomOperator = document.querySelector('#bottomOperator').value;

	// Divs
	var topLeft = document.querySelector('.top-left');
	var topRight = document.querySelector('.top-right');
	var bottomLeft = document.querySelector('.bottom-left');
	var bottomRight = document.querySelector('.bottom-right');

	// Image Element
	var imageElement = document.createElement("img");
	imageElement.setAttribute("src", "images/sad_smiley.png");
	//imageElement.src = "images/sad_smiley.png";
	imageElement.setAttribute("width", "50");
	imageElement.setAttribute("height", "50");
	imageElement.setAttribute("alt", "Sad Smiley");

	// Maximum Value
	var maxValue = maximumCalculate(rf, rs, bf, bs);

	// Puzzle Calculation
	var flag = 0;
	for(var a = 0; a <= maxValue; a+=0.5) {
		for(var b = 0; b <= maxValue; b+=0.5) {
			for(var c = 0; c <= maxValue; c+=0.5) {
				for(var d = 0; d <= maxValue; d+=0.5) {
					// Constraints
					if(eval(a + topOperator + b) == rf && eval(c + bottomOperator + d) == rs && eval(a + leftOperator + c) == bf && eval(b + rightOperator + d) == bs) {
						topLeft.innerText = a.toFixed(1);
						topRight.innerText = b.toFixed(1);
						bottomLeft.innerText = c.toFixed(1);
						bottomRight.innerText = d.toFixed(1);
						flag = 0;
						// Terminate loops
						a = b = c = d = maxValue;
					}
					else {
						flag = 1;
					}
				}
			}
		}
	}

	// If results are out of reach
	if(flag == 1) {
		topLeft.innerText = "";
		topRight.innerText = "";
		bottomLeft.innerText = "";
		bottomRight.innerText = "";

		if(topLeft.innerText == "") {
			topLeft.appendChild(imageElement.cloneNode(true));
			topRight.appendChild(imageElement.cloneNode(true));
			bottomLeft.appendChild(imageElement.cloneNode(true));
			bottomRight.appendChild(imageElement.cloneNode(true));
		}
	}
}

// On Click Reset Function
function resetPuzzle() {
	// Input fields
	document.querySelector('#rightFirstInput').value = 8;
	document.querySelector('#rightSecondInput').value = 6;
	document.querySelector('#bottomFirstInput').value = 13;
	document.querySelector('#bottomSecondInput').value = 8;

	// Operators
	document.querySelector('#topOperator').value = "+";
	document.querySelector('#leftOperator').value = "+";
	document.querySelector('#rightOperator').value = "+";
	document.querySelector('#bottomOperator').value = "-";
	
	// Divs
	document.querySelector('.top-left').innerText = "?";
	document.querySelector('.top-right').innerText = "?";
	document.querySelector('.bottom-left').innerText = "?";
	document.querySelector('.bottom-right').innerText = "?";

	// Reset Preview Screenshot
	document.querySelector('#previewScreenshot').innerText = "Click download button to get the screenshot!"
}

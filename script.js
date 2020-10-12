console.log("connection confirmed");

// random notes //
// make sure to tell the player what to do from the very beginning via the h2.  i mean shit like tell them when the game loads in the browser "Click the same buttons as simon" or something, until a modal is developed to house game instructions.

// **** Check out https://www.w3schools.com/js/js_timing.asp // setInterval() repeats a function endlessly?

const player = ""; // maybe identifier value here?
const simon = ""; // maybe identifier value here?
let currentPlayer = simon; // start with simon every round, unsure if needed
let playerChoices = [];
let simonChoices = [];
let buttonArray = ['red', 'blue', 'green', 'yellow']

const guitarNeck = document.querySelector("#guitar");
const startGame = document.querySelector("#startgame");
const resetGame = document.querySelector("#resetgame");
const button = document.querySelector(".guitarbuttons");
const redButton = document.querySelector("#red");
const blueButton = document.querySelector("#blue");
const greenButton = document.querySelector("#green");
const yellowButton = document.querySelector("#yellow");
const messages = document.querySelector("#messages");
const jamButton = document.querySelector("#jam");

// document.getElementById('go').style.visibility = 'hidden'; // HIDE START BUTTON

resetGame.addEventListener("click", (event) => {
	event.preventDefault();
	console.log(event.target);
	document.getElementById("resetgame").style.visibility = "hidden";
	document.getElementById("startgame").style.visibility = "visible";
	// display game reset message
});

redButton.addEventListener("click", (event) => {
	event.preventDefault();
	console.log(event.target);
});

blueButton.addEventListener("click", (event) => {
	event.preventDefault();
	console.log(event.target);
});

greenButton.addEventListener("click", (event) => {
	event.preventDefault();
	console.log(event.target);
});

yellowButton.addEventListener("click", (event) => {
	event.preventDefault();
	console.log(event.target);
});

jamButton.addEventListener("click", (event) => {
	event.preventDefault();
	console.log(event.target);
});

startGame.addEventListener("click", (event) => {
	event.preventDefault();
	console.log(event.target);
	document.getElementById("startgame").style.visibility = "hidden";
	document.getElementById("resetgame").style.visibility = "visible";
	document.getElementById("messages").innerText = "Simon's turn!";
	if (currentPlayer != simon) {
		currentplayer = simon;
	}
	return simonPick();
});

function simonPick() {
	if (currentPlayer === simon) {
		console.log("Simon picks now");
        let pick = Math.floor(Math.random() * 4); // generates random value 0-3
        let pickString = buttonArray[pick]
		console.log(pickString);
		simonChoices.push(pickString); // push value into simChoices[] array
	}
	return simonSequence();
}

function simonSequence() {
	console.log(simonChoices);
	// loop over the simonChoices array
	for (let i = 0; i < simonChoices.length; i++) {
        // setTimeout() a second?
        let pick = simonChoices[i]
        setTimeout(5000)
		// clear the 'glow' class from the buttons
		removeGlow();
        // for each value, add 'glow' class
        document.getElementById(`${pick}`).classList.add("glow")
        // setTimeout() 2 seconds
        setTimeout(10000)
        removeGlow()
    }
    console.log('player turn now');
}

function removeGlow() {
	// causes all 4 buttons to dim
	document.getElementById("red").classList.remove("glow");
	document.getElementById("blue").classList.remove("glow");
	document.getElementById("green").classList.remove("glow");
	document.getElementById("yellow").classList.remove("glow");
}



// let span = document.getElementById("red");
// let classes = span.classList;
// classes.remove("c");
// span.textContent = classes;

// console.log(span);
// console.log(classes);

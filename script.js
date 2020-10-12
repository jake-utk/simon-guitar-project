console.log("connection confirmed");

// random notes //
// make sure to tell the player what to do from the very beginning via the h2.  i mean shit like tell them when the game loads in the browser "Click the same buttons as simon" or something, until a modal is developed to house game instructions.

// **** Check out https://www.w3schools.com/js/js_timing.asp // setInterval() repeats a function endlessly?

const player = "";
const simon = "";
let currentPlayer = simon; // start with simon every round
let playerChoices = [];
let simonChoices = [];
let buttonArray = ["red", "blue", "green", "yellow"];

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
		let pickString = buttonArray[pick];
		console.log(
			`the value being pushed to array is ${pickString}, the next log is what is currently in the simonChoices array`
		);
		simonChoices.push(pickString); // push value into simChoices[] array
	}
	return simonSequence();
}

function simonSequence() {
	console.log(simonChoices);
	// loop over the simonChoices array
	for (let i = 0; i < simonChoices.length; i++) {
		let pick = simonChoices[i];
        
		// setTimeout() a second?
        // clear the 'glow' class from the buttons
		setTimeout(() => {
            removeGlow();
        }, 1000);
        
		let lightSimonPickUp = () => {
            console.log(pick);
			console.log(document.getElementById(`${pick}`));
			document.getElementById(`${pick}`).classList.add("newGlow");
			console.log(glow);
			// console.log(document.querySelectorAll(".guitarbuttons"));
			console.log("player turn now, simons choice light shouldve come on");
		};
        
        // for each value, add 'glow' class
        // setTimeout() 2 seconds
		setTimeout(() => {
            lightSimonPickUp();
        }, 3000);
    }

		setTimeout(() => {
			removeGlow();
		}, 3000);
	
}

function removeGlow() {
	// causes all 4 buttons to dim
	document.getElementById("red").classList.remove("glow");
	document.getElementById("blue").classList.remove("glow");
	document.getElementById("green").classList.remove("glow");
	document.getElementById("yellow").classList.remove("glow");
}

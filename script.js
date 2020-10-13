// random notes //
// make sure to tell the player what to do from the very beginning via the h2.  i mean shit like tell them when the game loads in the browser "Click the same buttons as simon" or something, until a modal is developed to house game instructions.

// **** Check out https://www.w3schools.com/js/js_timing.asp // setInterval() repeats a function endlessly?

let playerChoices = [];
let simonChoices = [];
let buttonArray = ["red", "blue", "green", "yellow"];

const guitarNeck = document.querySelector("#guitar");
const startGame = document.querySelector("#startgame");
const resetGame = document.querySelector("#resetgame");
const buttons = document.querySelectorAll(".guitarbuttons");
const redButton = document.querySelector("#red");
const blueButton = document.querySelector("#blue");
const greenButton = document.querySelector("#green");
const yellowButton = document.querySelector("#yellow");
const messages = document.querySelector("#messages");
const jamButton = document.querySelector("#jam");

resetGame.addEventListener("click", (event) => {
	event.preventDefault();
	// console.log(event.target);
	document.getElementById("resetgame").style.visibility = "hidden";
	document.getElementById("startgame").style.visibility = "visible";
});

redButton.addEventListener("click", (event) => {
	event.preventDefault();
	// console.log(event.target);
});

blueButton.addEventListener("click", (event) => {
	event.preventDefault();
	// console.log(event.target);
});

greenButton.addEventListener("click", (event) => {
	event.preventDefault();
	// console.log(event.target);
});

yellowButton.addEventListener("click", (event) => {
	event.preventDefault();
	// console.log(event.target);
});

startGame.addEventListener("click", (event) => {
	event.preventDefault();
	document.getElementById("startgame").style.visibility = "hidden";
	document.getElementById("resetgame").style.visibility = "visible";
	return simonPick();
});

function simonPick() {
	document.getElementById("messages").innerText = "Simon's turn!";
	let pick = Math.floor(Math.random() * 4);
	let pickString = buttonArray[pick];
	// console.log(
	// 	`the value being pushed to simonChoices array is ${pickString}, the next log is what is currently in the simonChoices array`
	// );
	simonChoices.push(pickString);

	simonSequence();
}

function simonSequence() {
	// add invisible div to prevent clicks
	removeGlow();
	simonChoices.forEach((choice, index) => {
		setTimeout(() => {
			// console.log(choice);
			document.getElementById(`${choice}`).classList.add("glow");
		}, (index + 1) * 2000);
		setTimeout(() => {
			removeGlow();
		}, (index + 2) * 2000);
	});
}

function checkWin() {
	for (let i = 0; i < simonChoices.length; i++) {
		console.log("Player choice:", playerChoices[i]);
		console.log("simon choice:", simonChoices[i]);
		console.log(i);
		if (playerChoices[i] != simonChoices[i]) {
			document.getElementById("messages").innerText = "You lose!";
			simonChoices = [];
			playerChoices = [];
		} else if (simonChoices.length === playerChoices.length) {
			console.log("simon should pick now");
			playerChoices = [];
			simonPick();
			return;
		} else {
			console.log("players turn is still ongoing");
		}
	}
}

buttons.forEach((button) => {
	button.addEventListener("click", (event) => {
		let playerPick = event.target.getAttribute("id");
		// console.log(`player choice is ${playerPick}`);
		playerChoices.push(playerPick);
		checkWin();
	});
});

function removeGlow() {
	buttons.forEach((button) => {
		button.classList.remove("glow");
	});
}

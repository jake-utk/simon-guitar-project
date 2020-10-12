// random notes //
// make sure to tell the player what to do from the very beginning via the h2.  i mean shit like tell them when the game loads in the browser "Click the same buttons as simon" or something, until a modal is developed to house game instructions.

// **** Check out https://www.w3schools.com/js/js_timing.asp // setInterval() repeats a function endlessly?

const player = "p";
const simon = "s";
let currentPlayer = simon; // start with simon every round
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
	console.log(event.target);
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

jamButton.addEventListener("click", (event) => {
	event.preventDefault();
	// console.log(event.target);
});

startGame.addEventListener("click", (event) => {
	event.preventDefault();
	document.getElementById("startgame").style.visibility = "hidden";
	document.getElementById("resetgame").style.visibility = "visible";
	if (currentPlayer != simon) {
		currentplayer = simon;
	}
	return simonPick();
});

function simonPick() {
	if (currentPlayer === simon) {
		document.getElementById("messages").innerText = "Simon's turn!";
		let pick = Math.floor(Math.random() * 4);
		let pickString = buttonArray[pick];
		console.log(
			`the value being pushed to simonChoices array is ${pickString}, the next log is what is currently in the simonChoices array`
		);
		simonChoices.push(pickString);
	}
	return simonSequence();
}

// function playerPick() {
// 	if (currentPlayer != player) {
// 		currentPlayer = player;
// 		document.getElementById("messages").innerText = "Player's turn!";
// 	}
// 	setTimeout(() => {
// 		removeGlow();
// 	}, 1000);
// 	buttons.addEventListener("click", (event) => {
// 		console.log(event.target);
// 		// playerChoices.push(event.target.id)
// 	});
// 	// return checkWin()
// }

function simonSequence() {
	console.log(simonChoices);
	removeGlow();
	simonChoices.forEach((choice, index) => {
		setTimeout(() => {
			console.log(choice);
			document.getElementById(`${choice}`).classList.add("glow");
		}, (index + 1) * 2000);
		setTimeout(() => {
			removeGlow();
		}, (index + 2) * 2000);
		// return playerPick();
	});
}

function checkWin() {
	if (playerChoices === simonChoices) {
		return simonPick();
	} else {
		document.getElementById("messages").innerText =
			"You lose!  Hit RESET GAME to play again.";
	}
}

function removeGlow() {
	buttons.forEach((button) => {
		button.classList.remove("glow");
	});
}

// FOR LOOP FOR simonSequence()
// for (let i = 0; i < simonChoices.length; i++) {
// 	let pick = simonChoices[i];
// 	(function lightSimonPickUp() {
// 		console.log(pick);
// 		document.getElementById(`${pick}`).classList.add("newGlow");
// 		setTimeout(() => {
// 			return lightSimonPickUp();
// 		}, 2000);
// 	});
// }

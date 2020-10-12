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
		let pick = Math.floor(Math.random() * 4); 
		let pickString = buttonArray[pick];
		console.log(
			`the value being pushed to simonChoices array is ${pickString}, the next log is what is currently in the simonChoices array`
		);
		simonChoices.push(pickString);
	}
	return simonSequence();
}

function playerPick() {
    if (currentPlayer != player) {
        currentPlayer = player
    }
    addGlow()
    setTimeout(() => {
        removeGlow()
    }, 1000)

}

function simonSequence() {
	console.log(simonChoices);
	setTimeout(() => {
		removeGlow();
	}, 1000);
    interval = 2000,
    simonChoices.forEach((simonChoices, index) => {
        setTimeout(() => {
            console.log(simonChoices);
            let pick = simonChoices
            document.getElementById(`${pick}`).classList.add("newGlow");
            removeNewGlow()
        }, (index+1) * interval)
    })
    console.log('when is this produced?');
}

function removeGlow() {
	document.getElementById("red").classList.remove("glow");
	document.getElementById("blue").classList.remove("glow");
	document.getElementById("green").classList.remove("glow");
	document.getElementById("yellow").classList.remove("glow");
}

function addGlow() {
    document.getElementById("red").classList.add("glow")
    document.getElementById("blue").classList.add("glow");
    document.getElementById("green").classList.add("glow");
    document.getElementById("yellow").classList.add("glow");
}

function removeNewGlow() {
    setTimeout(() => {
        document.getElementById("red").classList.remove("newGlow");
        document.getElementById("blue").classList.remove("newGlow");
        document.getElementById("green").classList.remove("newGlow");
        document.getElementById("yellow").classList.remove("newGlow");
    }, 3000)
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
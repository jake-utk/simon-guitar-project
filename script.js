let player = 1;
let playerChoices = [];
let simonChoices = [];
let buttonArray = ["red", "blue", "green", "yellow"];

const startGame = document.querySelector("#startgame");
const resetGame = document.querySelector("#resetgame");
const buttons = document.querySelectorAll(".guitarbuttons");

resetGame.addEventListener("click", (event) => {
	playerChoices = [];
	simonChoices = [];
	document.getElementById("messages").innerText =
		"...are you ready to Rock & Roll?";
	event.preventDefault();
	document.getElementById("resetgame").style.visibility = "visible";
	document.getElementById("startgame").style.visibility = "visible";
});

startGame.addEventListener("click", (event) => {
	simonChoices = [];
	event.preventDefault();
	document.getElementById("startgame").style.visibility = "hidden";
	document.getElementById("resetgame").style.visibility = "visible";
	simonPick();
});

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
        let playerPick = event.target.getAttribute("id");
        playerChoices.push(playerPick);
        checkWin();
    });
});

function checkWin() {
    for (let i = 0; i < playerChoices.length; i++) {
        if (playerChoices[i] != simonChoices[i]) {
            document.getElementById("messages").innerText =
                "You lose! Hit RESET GAME to play again.";
        } else if (simonChoices.length === playerChoices.length) {
            simonPick();
            break;
        }
    }
}

function simonPick() {
    player = 0;
	playerChoices = [];
	document.getElementById("messages").innerText = "Simon's turn!";
	let pick = Math.floor(Math.random() * 4);
	let pickString = buttonArray[pick];
	simonChoices.push(pickString);
	simonSequence();
}

function simonSequence() {
    const messageDelay = simonChoices.length + 1;
	removeGlow();
	simonChoices.forEach((choice, index) => {
		setTimeout(() => {
			document.getElementById(`${choice}`).classList.add("glow");
		}, (index + 1) * 2000);
		setTimeout(() => {
			removeGlow();
		}, (index + 2) * 2000);
	});
	setTimeout(() => {
        document.getElementById("messages").innerText = "Player's turn!";
        player = 1;
	}, messageDelay * 2000);
}

function removeGlow() {
	buttons.forEach((button) => {
		button.classList.remove("glow");
	});
}

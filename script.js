console.log('connection confirmed');

// random notes //
// make sure to tell the player what to do from the very beginning via the h2.  i mean shit like tell them when the game loads in the browser "Click the same buttons as simon" or something, until a modal is developed to house game instructions.

// **** Check out https://www.w3schools.com/js/js_timing.asp // setInterval() repeats a function endlessly?

const player = ''; // maybe identifier value here?
const simon = ''; // maybe identifier value here?
let currentPlayer = simon; // start with simon every round, unsure if needed
let playerChoices = [];
let simonChoices = [];

const guitarNeck = document.querySelector('#guitar');
const startGame = document.querySelector('#startgame');
const resetGame = document.querySelector('#resetgame');
const button = document.querySelector('.guitarbuttons');
const redButton = document.querySelector('#red');
const blueButton = document.querySelector('#blue');
const greenButton = document.querySelector('#green');
const yellowButton = document.querySelector('#yellow');

// document.getElementById('go').style.visibility = 'hidden'; // HIDE START BUTTON

startGame.addEventListener('click', (event) => {
	console.log(event.target);
	document.getElementById('startgame').style.visibility = 'hidden';
	document.getElementById('resetgame').style.visibility = 'visible';
});

resetGame.addEventListener('click', (event) => {
	console.log(event.target);
	document.getElementById('resetgame').style.visibility = 'hidden';
	document.getElementById('startgame').style.visibility = 'visible';
});

redButton.addEventListener('click', (event) => {
    console.log(event.target);
})

blueButton.addEventListener('click', (event) => {
	console.log(event.target);
});

greenButton.addEventListener('click', (event) => {
	console.log(event.target);
});

yellowButton.addEventListener('click', (event) => {
	console.log(event.target);
});

function simonPick() {
	// checks to make sure it's Simon's turn
	// produce a
}

function beginGame() {
	// listens for "start game" button click
	// initiates simon's first move
	// potentially simonPick()? Not sure yet if I need a specific starting move for Simon
}

function hardStop() {
	// listens for "reset game" button click
	// triggers reset
	// can reference runGame() from tictactoe
}

function switchTurn() {
	// swaps turn
	// can reference switchPlayer() from tictactoe
}

function checkWin() {
	// checks if player array = computer array
}

function playerPick() {
	// listens for player selection
}

function storePlayerPick() {
	// adds the button pick of player to array playerChoices
}

function storeSimonPick() {
	// adds the button pick of simon to array simonChoices
}

function handleClick() {
	// REFERENCED FROM TICTACTOE, didn't actually use, but was in pseudocode
	// all the stuff that happens when a user clicks a button
	// determine which button was clicked
}

function gameInstructions() {
	// shows game instructions on reload
}

function updateRoundCount() {
	// updates the div="round"
}

function movesToGo() {
	// calculates (total number of elements in simonChoices array - current elements in playerChoices array) to show how many correct choices the player has to make before the round is complete.  Is this too complicated?
}

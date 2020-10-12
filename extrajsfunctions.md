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

function playerJam() {
    // submits player answers to array
    // ends turn
}
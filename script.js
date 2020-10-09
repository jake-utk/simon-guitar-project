console.log('connection confirmed');

// random notes //
// make sure to tell the player what to do from the very beginning via the h2.  i mean shit like tell them when the game loads in the browser "Click the same buttons as simon" or something, until a modal is developed to house game instructions.

const player = '' // maybe identifier value here?
const simon = '' // maybe identifier value here?
let currentPlayer = simon // start with simon every round, unsure if needed
let playerChoices = []
let simonChoices = []

const guitarNeck = document.querySelector('#guitar')
const reset = document.querySelector('#go')

document.addEventListener

function beginGame() {
    // initiates simon's first move
}

function resetGame() {
	// listens for "reset game" button click
	// triggers reset
	// can reference runGame() from tictactoe
}

function switchTurn() {
    // swaps turn
    // can reference switchPlayer() from tictactoe
}

function checkWin () {
    // checks if player array = computer array
}

function playerPick () {
    // listens for player selection
}

function simonPick() {
    // determines which button Simon picks
}

function storePlayerPick() {
    // adds the button pick of player to array playerChoices
}

function storeSimonPick() {
    // adds the button pick of simon to array simonChoices
}

function handleClick () {
    // REFERENCED FROM TICTACTOE, didn't actually use, but was in pseudocode
    // all the stuff that happens when a user clicks a button
    // determine which button was clicked
}

function gameInstructions () {
    // shows game instructions on reload
}

function updateRoundCount () {
    // updates the div="round"
}

function movesToGo () {
    // calculates (total number of elements in simonChoices array - current elements in playerChoices array) to show how many correct choices the player has to make before the round is complete.  Is this too complicated?
}

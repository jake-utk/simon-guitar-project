## Planning

- I'm using this for random ideas/notes, probably going to pseudocode here as well.

## General notes

- What elements do I need in HTML?
    - H1 for name of page, right now "Simon says... Rock out!" but that may be the begin message
    - Div for message display beneath tab but above guitar
    - 4 buttons housed in a span or container?
        - ended up going with a form to hold them for now at least
    - Beneath this I need a div that keeps track of what round you're on
    - Beneath this I need a div that keeps track of the total moves of the current round
    - ADD THE DIV FOR HIGH SCORE LAST, WHO KNOWS IF I GET THAT FAR

- Initial CSS
    - Make buttons glow on hover
    - Make a more intense glow upon click, use same glow for computer selection
    - Need to find a way to align them across the guitar neck... going to do this on an iPhone X screen to begin with, figure it out from there once I get the logic built
    - I should define my "MVP CSS" because I feel like I could get lost in figuring out the design, both because it's visually interesting but also because I'm weakest in that regard, so the research/trial and error time in vs output is going to be tremendous
    - Idea - make "begin game" button cover the other 4 buttons, once clicked it is hidden until it's time to start another game.  Potential downside is user doesn't see the actual board until the computer's first turn.
    -   


- Stretch CSS
    - Could make the layout swap to a verticle guitar neck on mobile, horizontal neck on desktop.  Default now is horizontal for both, requiring a phone user to have to turn it sideways to view (or that is the idea).  Not sure if it would be better to go the other way to begin with...
    - I wonder if I could change click events after a certain height/width of the screen is reached.  README.MD -> A++ GOAL FOR CONTEXT.  That way if the screen was the size of a mobile, the strum could listen for a click and the neck could listen for a click, for two screen taps.  One on the strum and one on the appropriate button.  If you stretch it out past what is possible on a phone, it converts to click events looking for a click on the strum and a 1/2/3/4 keystroke for the note buttons, so it's a two handed game.  But this would probably be tough when you consider tablets can be desktop-sized screens with no keyboard, and if you go too large and catch a browser when you're listening for two 'taps' that won't work.  Perhaps you can listen for two click events at the same time somehow, in an array together that's called upon.

## Javascript Pseudocode

**Game round should go something like this...**

- Listen for "Start Game" button to be clicked
    - Hide "Start Game" button
- Begin Simon's turn simonPick()
    - Change css styling of .guitarbuttons to GLOW
    - Delay a second
    - Change css styling of .guitarbuttons to NOT-GLOW
    - Generate random button value CHOICE (4 possibilities)
    - Push CHOICE into simonChoices[] array
    - Show message "Simon's turn!" in #messages h2
    - Read simonChoices[] array one value at a time.  For each value..
        - Change css styling of value's corresponding .guitarbutton #id to GLOW
        - Delay two seconds (twice as long as normal)
        - Change css styling of value's corresponding .guitarbutton #id to NOT-GLOW
        - Delay a second.
        - Proceed to next value in array.
        - After all values in array have been read, END.
    - END turn.
- Begin Player's turn playerPick()
    - Change css styling of .guitarbuttons to GLOW
    - Delay a second
    - Change css stying of .guitarbuttons to NOT-GLOW
    - Show message "Your turn!" in #messages h2
    - Make buttons interactive for the player.
    - Listen to player to click on one of the buttons, CHOICE
    - Push CHOICE into playerChoices[] array.
    - ?????????? have to still figure this out
    - Make board non-interactive to player clicks

- Check playerChoices array against simonChoices array to determine if they match 
    - If false, then the player lost
        - Show message "You lose!  Let me know if you want to play again by hitting RESET GAME!"
        - END
    - If true, then the player won
        - Show message "Nice job!  Let me know when you're ready for another riff!"
    - Clear existing values in playerChoices[] array. // MAYBE THIS SHOULD GO ELSEWHERE?
    - Initiate Simon's turn
    - End

**Other Functions**

- Listen for RESET GAME button to be clicked
    - Clear playerChoices[] array
    - Clear simonChoices[] array
    - Make currentPlayer simon
    - 

- setTimout() / you can do it for a second

## References

- For setTimeout()
    - https://www.bitdegree.org/learn/javascript-settimeout
    - https://medium.com/@axionoso/watch-out-when-using-settimeout-in-for-loop-js-75a047e27a5f
    - https://travishorn.com/delaying-foreach-iterations-2ebd4b29ad30
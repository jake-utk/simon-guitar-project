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
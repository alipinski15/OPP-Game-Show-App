# OPP Game Show App
 
This an Game built using Object Oriented JS. It consists of three different files (Game, Phrase & App).

In the Game.js file:
    A class is created with 5 phrases.
    A series of methods are used to get a random phrase, start the game, Handle the interaction from the user,Check to see if the player won the game. If an incorrect letter was chosen, a life is removed, and then check if the game is over. If won or lost, an appropriate message is displayed. 
    Then after the game is over, reset the board to start again.

In the Phrase.js file:
    A class is created for the phrase in use.
    Once a random phrase is chosen, It is then displayed on the screen with the letters hidden.
    If the correct letter is chosen, it is then  revealed to the player in the correct spot. 
    Then if the game is over the phrase is reset, and a new one is chosen. 

In the app.js file:
    A new game is started and listeners are assigned. 
    The user can use the mouse to select, or use the keyboard to start the game and select the letters. 

I made some changes to the CSS as well. 
    Changed the font type.
    Add some animation and color fades.
    Changed the color scheme of the game as well. 
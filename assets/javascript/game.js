

// I found this code on the overflow web site and modified it 

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking our wins, losses and ties. They begin at 0.
var wins = 0;
var losses = 0;
var guesses;
var yourGuesses = [];


    var computerChoice;

   

   function resetGame () {
    guesses=10;
    yourGuesses=[];
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice)
    document.getElementById("yourGuessesSoFar").innerHTML = "Your Guesses so far: "+ yourGuesses;
    document.getElementById("guesses").innerHTML = "Guesses left: " + guesses;
   }
    resetGame();

   // When the user presses a key, it will run the following function...
document.onkeypress = function(event) {
    var userGuess = event.key;
console.log(event);


    if(userGuess === computerChoice){
        
        wins++;
        alert('you won');
        resetGame();
    }
    else{
        guesses--;
    }

    if(guesses === 0){
        losses++;

        resetGame();
}

    yourGuesses.push(userGuess);


    document.getElementById("yourGuessesSoFar").innerHTML = "Your Guesses so far: "+ yourGuesses;
        

    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "losses: " + losses;
    document.getElementById("guesses").innerHTML = "Guesses left: " + guesses;
}
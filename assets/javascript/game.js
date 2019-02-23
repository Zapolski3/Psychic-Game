

// I found this code on the overflow web site and modified it 

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking our wins, losses and ties. They begin at 0.
var wins = 0;
var losses = 0;
var guesses = 10;
var yourGuesses = [];


    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(computerChoice)

    
    

   // When the user presses a key, it will run the following function...
document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === computerChoice){
        wins++;
    }
    else{
        guesses--;
    }

    if(guesses === 0){
        losses++
    }

    yourGuesses.push(userGuess);


    document.getElementById("yourGuessesSoFar").innerHTML = "Your Guesses so far: "+ userGuess;
        

    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "losses: " + losses;
    document.getElementById("guesses").innerHTML = "Guesses left: " + guesses;
}
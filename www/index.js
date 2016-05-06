// JavaScript Document

var image;
var lives = 10;
var word; //will be used to keep the word in play
var currentGuess = "";
var letterFound = false; //used to determinate if a letter was found after a guess, so no lives are taken away
var usedGuesses = [];
var used = false;
var hiddenWord = [];

//The words list is declared full only because i can't get difficulty selection working.
var wordsList = ["LAMP", "ROAD", "SOFA", "LADY", "SNOW", "SPACE", "NOISE", "DOGGY", "HOUSE", "STEEL", "STEREO", "PILLOW", "CEREAL", "BUTTON", "CIRCLE", "BALLOON", "STATION", "DRAWING", "BICYCLE", "FLOWERS"];

var endGame;
var wordToGuess = [];



//TODO difficulty selection not working
//set the words list according to the difficulty selected
/*function easy() {
    wordsList = ["LAMP", "ROAD", "SOFA", "LADY", "SNOW", "SPACE", "NOISE", "DOGGY", "HOUSE", "STEEL", "STEREO", "PILLOW", "CEREAL", "BUTTON", "CIRCLE", "BALLOON", "STATION", "DRAWING", "BICYCLE", "FLOWERS"];
}

function medium() {
    wordsList = ["PAINTING", "MONEYBAG", "SAPPHIRE", "AROMATIC", "CAPTIONS", "TELEPHONE", "GODFATHER", "OFFENSIVE", "EFFICIENT", "TELESCOPE", "BOTTOMLESS", "WHIRLWINDS", "SPECIALITY", "PROGRAMING", "TELEVISION", "UNBREAKABLE", "APPLICATION", "BODYBUILDER", "ELECTRICITY", "MASTERPIECE"]
 }

function hard() {
    wordsList = ["ASTRONOMICAL", "VOCABULARIES", "THANKSGIVING", "STOCKHOLDERS", "RUSTPROOFING", "EXTENDABILITY", "INCORPORATION2", "NONFUNCTIONAL", "PERPENDICULAR", "RECOMMENDABLE", "MISCALCULATING", "AMBASSADORSHIP", "DECONSTRUCTIVE", "IMPRACTICALITY", "ILLEGITIMATELY", "BIOLUMINESCENCE", "WRONGHEADEDNESS", "TROUBLESHOOTING", "SURVIVABILITIES", "PROCRASTINATION"]
 }*/

//First, pick a word from the array
function newWord()
{
    var ranNum = 100;

//Loop until number that fits the array
    while(ranNum > wordsList.length && ranNum > 0)
    {
        ranNum = Math.random()*100;
    }
    word = wordsList[ranNum.toFixed(0)]; //Rounds up the random number and picks a word from the array
    return word.split(""); //Split the word into single letters

}

//This function allows to reset the game after finishing
function newGame() {
    lives = 10;
    usedGuesses = [];
    hiddenWord = [];
    wordToGuess = newWord();

    while (hiddenWord.length < wordToGuess.length) {
        hiddenWord.push("-");
    }
   return hiddenWord;
}

function guessCheck() {

    //1. Check if the player already used this letter, if so skip guessCheck.
    for (var i = 0; i < usedGuesses.length + 1; i++) {
        if (usedGuesses[i] == currentGuess) {
            used = true;
            break;
        }
    }
    //if letter not used before: 
    // 2. check if guess is correct, if so display it in the correct position, if not deduct a life
    // 3. check if the player guessed all the letters, if so end game, if not continue
    // 4. check if the player still has lives, if not end game.
    // 5. mark the letter as used
    // 6. hide the button to indicate it's been used
    // 7. prepare game for next guess
    if (used == false) {
        for (i = 0; i < wordToGuess.length + 1; i++) { //A loop to check each letter one at a time
            if (wordToGuess[i] == currentGuess){
                hiddenWord.splice(i, 1, currentGuess);//if guess was right reveal the letter in the hidden word
                letterFound = true;
                document.getElementById("display").innerHTML = hiddenWord.join("");
            }

            //if guess was wrong, deduct a life
            else if (i == wordToGuess.length && letterFound == false) {
                lives--;

            }

        }

        //update the visuals
        livesImage = document.getElementById("hangmanImage");
        livesImage.src = "Images/hangmanLives"+lives+".jpg";

        //if player guessed all the letters, end game
        if (hiddenWord.join("") == word) {
            endGame = confirm("You Won! Go back to menu?");
            if (endGame == true) {
                window.location.href = "index.html";
            }
        }

        //if player lost all their lives, end game
        else if(lives == 0){
            endGame = confirm("You Lost! The word was: '"+wordToGuess.join("")+"'. Go back to menu?");
            if (endGame == true) {
                window.location.href = "index.html";
            }
        }

        //mark the letter as used, hide the button and reset letterFound status to prepare for next guess
        usedGuesses.push(currentGuess);
        image = document.getElementById(currentGuess);
        image.src = "Images/btnUsed.jpg";
        letterFound = false
    }
    //if letter was used and guessCheck was skipped, reset used status for next guess
    used = false;
}

/*
 //this is only a debugging feature, allows to add a special button that resets used letters array
 //to check guessCheck works properly
function resetLetters() {
    for (index = 0; index < usedGuesses.length; index++) {
        queuedLetter = usedGuesses[index];
        image = document.getElementById(queuedLetter);
        image.src = "Images/btn" + queuedLetter + ".jpg";
    }
    usedGuesses = [];
    document.getElementById("display").innerHTML = usedGuesses;
}
*/

//These are the functions for each button, i tried to find a more efficient way to do this but couldn't because of HTML
function aClick() {
    currentGuess = "A";
    guessCheck();
}
function bClick() {
    currentGuess = "B";
    guessCheck();
}
function cClick() {
    currentGuess = "C";
    guessCheck();
}
function dClick() {
    currentGuess = "D";
    guessCheck();
}
function eClick() {
    currentGuess = "E";
    guessCheck();
}
function fClick() {
    currentGuess = "F";
    guessCheck();
}
function gClick() {
    currentGuess = "G";
    guessCheck();
}
function hClick() {
    currentGuess = "H";
    guessCheck();
}
function iClick() {
    currentGuess = "I";
    guessCheck();
}
function jClick() {
    currentGuess = "J";
    guessCheck();
}
function kClick() {
    currentGuess = "K";
    guessCheck();
}
function lClick() {
    currentGuess = "L";
    guessCheck();
}
function mClick() {
    currentGuess = "M";
    guessCheck();
}
function nClick() {
    currentGuess = "N";
    guessCheck();
}
function oClick() {
    currentGuess = "O";
    guessCheck();
}
function pClick() {
    currentGuess = "P";
    guessCheck();
}
function qClick() {
    currentGuess = "Q";
    guessCheck();
}
function rClick() {
    currentGuess = "R";
    guessCheck();
}
function sClick() {
    currentGuess = "S";
    guessCheck();
}
function tClick() {
    currentGuess = "T";
    guessCheck();
}
function uClick() {
    currentGuess = "U";
    guessCheck();
}
function vClick() {
    currentGuess = "V";
    guessCheck();
}
function wClick() {
    currentGuess = "W";
    guessCheck();
}
function xClick() {
    currentGuess = "X";
    guessCheck();
}
function yClick() {
    currentGuess = "Y";
    guessCheck();
}
function zClick() {
    currentGuess = "Z";
    guessCheck();
}

function testButton() {
    lives--
    //update the visuals
    livesImage = document.getElementById("hangmanImage");
    livesImage.src = "Images/hangmanLives"+lives+".jpg";
}
// JavaScript Document

var usedLetters = [];
var index;
var queuedLetter;
var image;
var lives = 6; //amount of lives
var word; //will be used to keep the word in play


function easy() {
    var wordsList = [lamp, road, sofa, lady, snow, space, noise, doggy, house, steel, stereo, pillow, cereal, button, circle, balloon, station, drawing, bicycle, flowers]
}

function medium() {
    var wordsList = [painting, moneybag, sapphire, aromatic, captions, telephone, godfather, offensive, efficient, telescope, bottomless, whirlwinds, speciality, programing, television, unbreakable, application, bodybuilder, electricity, masterpiece]
}

function hard() {
    var wordsList = [astronomical, vocabularies, thanksgiving, stockholders, rustproofing, extendability, incorporation, nonfunctional, perpendicular, recommendable, miscalculating, ambassadorship, deconstructive, impracticality, illegitimately, bioluminescence, wrongheadedness, troubleshooting, survivabilities, procrastination/'']
}

function hideLetter() {
    for (index = 0; index < usedLetters.length; index++) {
        queuedLetter = usedLetters[index];
        image = document.getElementById(queuedLetter);
        image.src = "Images/btnUsed.jpg";
    }
    document.getElementById("display").innerHTML = usedLetters.join("");
}

function resetLetters() {
    for (index = 0; index < usedLetters.length; index++) {
        queuedLetter = usedLetters[index];
        image = document.getElementById(queuedLetter);
        image.src = "Images/btn" + queuedLetter + ".jpg";
    }
    usedLetters = [];
    document.getElementById("display").innerHTML = usedLetters;
}

function newWord()
{
    var ranNum = 100;

//Math.random * 100 gives numbers between 0 and 100
//So i made the loop until i got a number that fits the array
    while(ranNum > wordsList.length && ranNum > 1)
    {
        ranNum = Math.random()*100;
    }
    word = wordsList[ranNum.toFixed(0)]; //Rounds up the random number and picks a word from the array
    return word.split(""); //Split the word into single letters

}

var wordToGuess = [];
wordToGuess = newWord();



function aClick() {
    usedLetters.push("A");
    hideLetter();
}
function bClick() {
    usedLetters.push("B");
    hideLetter();
}
function cClick() {
    usedLetters.push("C");
    hideLetter();
}
function dClick() {
    usedLetters.push("D");
    hideLetter();
}
function eClick() {
    usedLetters.push("E");
    hideLetter();
}
function fClick() {
    usedLetters.push("F");
    hideLetter();
}
function gClick() {
    usedLetters.push("G");
    hideLetter();
}
function hClick() {
    usedLetters.push("H");
    hideLetter();
}
function iClick() {
    usedLetters.push("I");
    hideLetter();
}
function jClick() {
    usedLetters.push("J");
    hideLetter();
}
function kClick() {
    usedLetters.push("K");
    hideLetter();
}
function lClick() {
    usedLetters.push("L");
    hideLetter();
}
function mClick() {
    usedLetters.push("M");
    hideLetter();
}
function nClick() {
    usedLetters.push("N");
    hideLetter();
}
function oClick() {
    usedLetters.push("O");
    hideLetter();
}
function pClick() {
    usedLetters.push("P");
    hideLetter();
}
function qClick() {
    usedLetters.push("Q");
    hideLetter();
}
function rClick() {
    usedLetters.push("R");
    hideLetter();
}
function sClick() {
    usedLetters.push("S");
    hideLetter();
}
function tClick() {
    usedLetters.push("T");
    hideLetter();
}
function uClick() {
    usedLetters.push("U");
    hideLetter();
}
function vClick() {
    usedLetters.push("V");
    hideLetter();
}
function wClick() {
    usedLetters.push("W");
    hideLetter();
}
function xClick() {
    usedLetters.push("X");
    hideLetter();
}
function yClick() {
    usedLetters.push("Y");
    hideLetter();
}
function zClick() {
    usedLetters.push("Z");
    hideLetter();
}

/*
var gameOn = true;
var hiddenWord = [];
var playAgain;

//We don't want the player to see the word, so i created an array what will show dashes instead of the word
//As the player guesses the word, the dashes will become letters from wordToGuess array
while (hiddenWord.length < wordToGuess.length)
{
    hiddenWord.push("-");
}

//Introduction and game start
var currentGuess;
var letterFound = false; //used to determinate if a letter was found after a guess, so no lives are taken away
var usedGuesses = [];
var used = false;

while (gameOn) //Keep the game going while the player haven't guessed the word and still has lives
{
    //Notify the player of how many lives he has left, and let the player guess again
    io.output("\nYou have " + lives + " lives\n" + hiddenWord);
    currentGuess = io.input("\n>");


    //Check if the player already used this letter.
    for (var i = 0; i < usedGuesses.length + 1; i++)
    {
        if (usedGuesses[i] == currentGuess)
        {
            io.output("You have already used that");
            used = true;
            break;
        }
    }



    //If the letter was NOT used, search for a match with the word in play
    if (used == false)
    {
        //Check if the player guesses the entire word, if yes ask if the player wants to play again, else end the game
        if (wordToGuess.join("") == currentGuess)
        {
            io.output("Congratulations, you guessed the word!");
            playAgain = io.input("\nWould you like to play again?\n\n> "); playAgain = playAgain.toLowerCase(); //just in case the player used capitals
            if (playAgain == "yes")
            {
                restartGame();
            }
            else
            {
                gameOn = false;
            }
        }

        //Check if the guessed letter is anywhere in the word
        else
        {
            for (i = 0; i < wordToGuess.length + 1; i++) //A loop to check each letter one at a time
            {
                if (wordToGuess[i] == currentGuess)
                {
                    hiddenWord.splice(i, 1, currentGuess);
                    letterFound = true
                }

                //If the search for the letter is complete, and none matched, take a life away
                else if (i == wordToGuess.length && letterFound == false)
                {
                    lives--;
                }

            }
        }


        //After a match was made or not, add the guessed letter or word to an array
        //then reset letterFound and check if the player got all the letters and still has lives to continue the game
        usedGuesses.push(currentGuess); //Stores the used letter or word so the player doesn't loose a life when using it again
        letterFound = false; //Setting letterFound back to false to "restart" the round

        //Checking if the player guessed the word and won the game, if yes ask if the player wants to play again
        if (hiddenWord.join("") == wordToGuess.join(""))
        {
            io.output("\nYou have " + lives + " lives\n" + wordToGuess + "\n\nCongratulations, you guessed the word!");
            playAgain = io.input("\nWould you like to play again?\n\n> "); playAgain = playAgain.toLowerCase(); //just in case the player used capitals
            if (playAgain == "yes")
            {
                restartGame();
            }
            else
            {
                gameOn = false;
            }
        }

        //Checking if the player has run out of lives, if yes ask if the player wants to play again
        if (lives == 0)
        {
            io.output("You're out of lives\nThe word was '" + wordToGuess.join("") + "'\n\nGAME OVER");
            playAgain = io.input("\nWould you like to play again?\n\n> "); playAgain = playAgain.toLowerCase(); //just in case the player used capitals
            if (playAgain == "yes")
            {
                restartGame();
            }
            else
            {
                gameOn = false;
            }

        }
    }
    //If the player used a letter that he used before, it skips the entire block of code and then
    //gets set back to false in order to "reset" the round
    used = false;
}

//////////////////////////////////
 Restarting the game if the player wants to play again
 //////////////////////////////////

 This function is used to:
 * Restart lives
 * Clear usedGuesses
 * Clear wordToGuess
 * Clear hiddenWord
 * Pick a new word
function restartGame()
{
    lives = 6;
    usedGuesses = [];
    wordToGuess = [];
    hiddenWord = [];
    wordToGuess = newWord();

    while (hiddenWord.length < wordToGuess.length)
    {
        hiddenWord.push("-");
    }
} */
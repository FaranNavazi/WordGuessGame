// list of movies
var selectableWords = [
  "titanic",
  "thedeparted",
  "dancewithwolves",
  "schindlerslist",
  "rainman",
  "thesilenceofthelamps",
  "moonlight",
  "braveheart",
  "forrestgump",
  "gladiator",
  "unforgiven",
  "thesting",
  "amadeus",
  "benhur",
  "anniehall",
  "westsidestory",
  "argo",
  "spotlight",
  "crash",
  "drivingmissdaisy"
];

// many times to miss letters -->
const maxTries = 10;
// user guessed letters -->
var guessedLetters = [];
//index number for current word -->
var currentWordIndex;
// currect guesses -->
var guessingWord = [];
// how many tries left -->
var remainingGuesses = 0;
// when the game starts -->
var gameStarted = false;
// tell user to press any key to start again -->
var hasFinished = false;
// wins counter -->
var wins = 0;

// this function will reset the game by clearing all
// the and selecting a new word also showing you won or lost -->
function resetGame() {
  remainingGuesses = maxTries;
  gameStarted = false;

  currentWordIndex = Math.floor(Math.random() * selectableWords.length);

  guessedLetters = [];
  guessingWord = [];

  for (let i = 0; i < selectableWords[currentWordIndex].length; i++) {
    guessingWord.push("_");
  }

  document.getElementById("pressKeyTryAgain").style.cssText = "display: none";
  document.getElementById("gameover-image").style.cssText = "display: none";
  document.getElementById("youwin-image").style.cssText = "display: none";

  hasFinished = false;
  updateDisplay();
}

// this section (function) is for the in put and updating the html
function updateDisplay() {
  document.getElementById("totalWins").innerText = wins;
  document.getElementById("currentWord").innerText = "";

  for (let i = 0; i < guessingWord.length; i++) {
    document.getElementById("currentWord").innerText += guessingWord[i];
  }
  document.getElementById("remainingGuesses").innerText = remainingGuesses;
  document.getElementById("guessedLetters").innerText = guessedLetters;
  if (remainingGuesses <= 0) {
    document.getElementById("gameover-image").style.cssText = "display: block";
    document.getElementById("pressKeyTryAgain").style.cssText =
      "display: block";
    hasFinished = true;
  }
}

// this is for keypress action. key select from a-z
// also checks to see if we are done with the word as well for reseting
document.onkeydown = function(event) {
  if (hasFinished) {
    resetGame();
    
  } else {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      makeGuess(event.key.toLowerCase());
    }
  }
};

// for compairing the key press with the word we have
function makeGuess(letter) {
  if (remainingGuesses > 0) {
    if (!gameStarted) {
      gameStarted = true;
    }

    if (guessedLetters.indexOf(letter) === -1) {
      guessedLetters.push(letter);
      evaluateGuess(letter);
    }
  }
  updateDisplay();
  checkWin();
}

// this function is for storing guess letter in srings
function evaluateGuess(letter) {
  var positions = [];

  for (let i = 0; i < selectableWords[currentWordIndex].length; i++) {
    if (selectableWords[currentWordIndex][i] === letter) {
      positions.push(i);
    }
  }
  if (positions.length <= 0) {
    remainingGuesses--;
  } else {
    for (let i = 0; i < positions.length; i++) {
      guessingWord[positions[i]] = letter;
    }
  }
}

// this function checks for wins
function checkWin() {
  if (guessingWord.indexOf("_") === -1) {
    document.getElementById("youwin-image").style.cssText = "display: block";
    document.getElementById("pressKeyTryAgain").style.cssText =
      "display: block";
    wins++;
    hasFinished = true;
  }
}

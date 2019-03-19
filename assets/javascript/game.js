var movieNames = [
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

var randomGuess = movieNames[Math.floor(Math.random() * movieNames.length)]

document.onkeyup = function(event) {
    var letters = event.key;
}

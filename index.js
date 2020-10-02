"use strict";
//Global VAR
var FLAG = "🚩";
var isOn = false;

// STARTING THE GAME WHEN THE USER PRESS THE BUTTON AND CHANGE THE TEXT TO PLAY AGAIN!
function startGame(elBtn){
        isOn = true;
        play();
    elBtn.textContent = 'Play Again'
}

//TAKE 2 RANDOM NUMBER 1-6,CHANGE THE IMAGES FOR EACH PLAYER AND CHECK VICTORY OR DREW AND CHANGE THE H1 TITLE!
function play() {
  var randomNumber1 = getRandomIntInclusive(1, 6);
  var randomNumber2 = getRandomIntInclusive(1, 6);
//   ALL THE VAR OF THE DOM: //
  var elImg1 = document.querySelector(".img1");
  var elImg2 = document.querySelector(".img2");
  var elTitle = document.querySelector("h1");
//   UPDATE THE IMAGES OF THE PLAYERS //
  elImg1.setAttribute("src", `images/dice${randomNumber1}.png`);
  elImg2.setAttribute("src", `images/dice${randomNumber2}.png`);
//   CHECK ALL THE POSSIBLE OPTIONS GAME //
  if (randomNumber1 === randomNumber2) {
    elTitle.textContent = "Draw!";
  } else if (randomNumber2 > randomNumber1) {
    elTitle.textContent = "Player 2 Is The Winner! " + FLAG;
  } else {
    elTitle.textContent = FLAG + " Player 1 Is The Winner!";
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

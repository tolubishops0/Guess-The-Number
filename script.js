'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayColorWidth = function (color, width) {
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.number').style.width = width;
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start Guessing......');
  displayNumber('?');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = "";

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!');
  } 
  
  else if (guess === secretNumber) {
    displayNumber();
    displayMessage('🎉 Correct Number!');
    displayColorWidth('red', '30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } 
  
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Number Too High!!' : 'Number Too Low!!');
      score--;
      document.querySelector('.score').textContent = score;
    }
    
    else {
      displayMessage('Sorry, You Lost The Game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

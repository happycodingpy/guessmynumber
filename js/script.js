'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // verificamos si hay un valor o no
  // !guess siempre sera falso
  // por lo que si no hay un number damos un mensaje
  if (!guess) {
    document.querySelector('.message').textContent = '🙈 No number!';
  } else if (guess === secretNumber) {
    // si el num secreto es igual a guess entonces mostramos el mensaje Number Correct!
    document.querySelector('.message').textContent = '🐵 Number correct!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🙊 Very high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🐒 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🙊 Very high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🐒 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

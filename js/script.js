'use strict';

// let porque se reutilizara los valores
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // verificamos si hay un valor o no
  // !guess siempre sera falso
  // por lo que si no hay un number damos un mensaje
  if (!guess) {
    document.querySelector('.message').textContent = '🙈 No number!';

    // cuando el jugador gana
  } else if (guess === secretNumber) {
    // si el num secreto es igual a guess entonces mostramos el mensaje Number Correct!
    document.querySelector('.message').textContent = '🐵 Number correct!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#A202BE';
    document.querySelector('.number').style.color = '#25273d';
    document.querySelector('.number').style.width = '480px';
    // cuando el numero a encontrar es muy alto
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🙊 Very high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🐒 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // cuando el numero a encontrar es muy bajo
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🙊 Very low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🐒 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Coding Challenge #1

// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:

// 1. Select the element with the 'again' class and attach a click event handler

// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables

// 3. Restore the initial conditions of the message, number, score and guess input
// fields

// 4. Also restore the original background color (#222) and number width (15rem)

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#25273d';
  document.querySelector('.number').style.width = '240px';
});

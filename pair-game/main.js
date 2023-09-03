let numArray = [];
let gameField = document.querySelector('.game-field');
let popup = document.querySelector('.popup');
let cardsQuantity = 16;
let matchCounter = 0;
let attemptsCounter = document.querySelector('.attempts-counter');
let timeCounter = document.querySelector('.time-counter');
let timerValue = 200;
let gameMenuHeading = document.querySelector('.popup-heading');
let fieldSize = document.querySelectorAll('.start-game__size');
let startGameBtn = document.querySelector('.start-game__button');
let startGameMenu = document.querySelector('.start-game');
let newGameBtn = document.querySelector('.new-game__button');
let win = false;

// add event listener to start btn
startGameBtn.addEventListener('click', function () {
  startGameMenu.classList.remove('show');
  startGame();
});

// field size choise
fieldSize.forEach(card => {
  card.addEventListener('click', function (e) {
    let target = e.target;
    cardsQuantity = target.value;
    if (target.value === '4') {
      gameField.classList.add('field-4');
      gameField.classList.remove('field-16');
      gameField.classList.remove('field-36');
    }
    if (target.value === '16') {
      gameField.classList.add('field-16');
      gameField.classList.remove('field-4');
      gameField.classList.remove('field-36');
    }
    if (target.value === '36') {
      gameField.classList.add('field-36');
      gameField.classList.remove('field-16');
      gameField.classList.remove('field-4');
    }
  })
});

// game level choise (sets timer value)
let gameLevel = document.querySelectorAll('.start-game__level');

gameLevel.forEach(card => {
  card.addEventListener('click', function (e) {
    let target = e.target;
    timerValue = target.value;
  })
});

// timer function
let timeCountdown = function (value) {
  let i = value;
  let id = setInterval(function () {
    i--;
    if (i === -1) {
      clearInterval(id);
      gameMenuHeading.textContent = 'Не повезло (((';
      popup.classList.add('show');
    } else {
      timeCounter.value = i;
      timeCounter.textContent = timeCounter.value;
      if (win) {
        clearInterval(id);
      }
    }
  }, 1000);
};

//create numbers array
let createArray = function () {
  numArray = [];
  for (i = 0; i < cardsQuantity / 2; i++) {
    numArray.push(i + 1, i + 1);
  }
};

//card shuffle function
let shuffle = function (array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  numArray = array
};

//cards creating
let createCards = function (quantity, array, list) {
  for (i = 0; i < quantity; i++) {
    let card = document.createElement('li');
    let cardNum = document.createElement('p');
    cardNum.textContent = array[i];
    card.classList.add('card');
    cardNum.classList.add('card-num');
    card.append(cardNum);
    list.append(card);
  }
};

// game main function
let startGame = function () {
  createArray();
  shuffle(numArray);
  createCards(cardsQuantity, numArray, gameField);
  timeCountdown(timerValue);

  let cards = document.querySelectorAll('.card');
  let hasFlippedCard = false;
  let firstCard, secondCard;
  attemptsCounter.value = 0;

  // attempts counter function
  let attemptsCount = () => {
    attemptsCounter.value += 1;
    attemptsCounter.textContent = attemptsCounter.value;
  };

  // flipcard function
  const flipCard = e => {
    const target = e.target;
    target.classList.add('show');

    if (!hasFlippedCard) {
      //click on first card
      hasFlippedCard = true;
      firstCard = target;
    } else {
      //click on second card
      hasFlippedCard = false;
      secondCard = target;
      cards.forEach(card => {
        card.classList.add('block-field');
        setTimeout(() => {
          card.classList.remove('block-field');
        }, 800)
      });

      // match cards check
      matchCheck();
      attemptsCount();
    }
  };

  //add event listener to every card
  cards.forEach(card => {
    card.addEventListener('click', flipCard);
  });

  //check if cards numbers identical
  const matchCheck = () => {
    if (firstCard.innerHTML === secondCard.innerHTML) {
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
      matchCounter++;
    } else {
      setTimeout(() => {

        firstCard.classList.remove('show');
        secondCard.classList.remove('show');
      }, 800);
    };
    if (matchCounter * 2 === cards.length) {
      gameMenuHeading.textContent = 'ПОБЕДА!';
      popup.classList.add('show');
      win = true;
      return win;
    };
  };
};

//game restart button
newGameBtn.addEventListener('click', function () {
  gameField.innerHTML = '';
  attemptsCounter.textContent = '0';
  matchCounter = 0;
  timeCounter.value = 0;
  win = false;
  startGameMenu.classList.add('show');
  popup.classList.remove('show');
});

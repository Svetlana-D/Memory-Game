// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex].children[0].className;
        array[currentIndex].children[0].className = array[randomIndex].children[0].className;
        array[randomIndex].children[0].className = temporaryValue;
    }

    return;
}


// Variables for Shuffle function and call it
const cards = document.querySelectorAll('.card');
shuffle(cards);


// Reset button
const resetButton = document.querySelector('.fa-repeat');
resetButton.addEventListener('click', function restart() {
    window.location.reload()
});


// Open card function
function openCard(card) {
    event.target.classList.add('open', 'show', 'disabled');
}


// Check how many cards open function
function checkOpenClasses () {
    for (i = 0; i < cards.length; i++) {
        if (cards[i].classList.contains('open')) {
            numberClasses += 1;
        }
    };
    return numberClasses;
}


// Variables for timer
const watch = new stopWatch(timer);
const timerId = document.querySelector("#timer");


// Variables for open, close, match cards
var numberClasses = 0;
var firstCard;
var secondCard;
var firstCardValue;
var secondCardValue;


// Variables for stars, count correct and incorrect guesses
const movesCount = document.querySelector('.moves');
var numberMoves = 0;
var numberMistakes = 0;
var numberCorrectMoves = 0;
var numberStars = 3;
var starWord = "Stars";


/*
* Main function that: start timer with watch.start(), open cards with openCard(), check if there are the same then match them,
* if it not match close card, count mistakes, remove stars, stop timer watch.stop() and  call modal
*/
// Swall from https://sweetalert.js.org/guides/
function respondToTheClick()
{
    if (watch.isOn === false) {
        watch.start();
    }
    var stars = document.querySelector('.stars');
    checkOpenClasses();
    if(numberClasses === 0 ){
        openCard();
        firstCard = event.target;
        firstCardValue = firstCard.querySelector('.fa');
        //firstCardValue = event.target.querySelector('.fa');
    }
    if(numberClasses === 1 ){
        openCard();
        secondCard = event.target;
        secondCardValue = secondCard.querySelector('.fa');
        numberMoves += 1;
        movesCount.textContent = numberMoves;
        if(firstCardValue.classList.value === secondCardValue.classList.value) {
            firstCard.classList.remove('open', 'show');
            firstCard.classList.add('match');
            secondCard.classList.remove('open', 'show');
            secondCard.classList.add('match');
            numberClasses = 0;
            numberCorrectMoves += 1;
            if(numberCorrectMoves === 8) {
                watch.stop();
                swal({
                  title: "Congratulations! You Won!",
                  text: "With " + numberMoves + " Moves and " + numberStars + " " + starWord + "\n Your Game Time is " + timerId.innerText + "!",
                  icon: "success",
                  button:
                  {
                    text: "Play again!",
                    value: "catch",
                  },
                })
                .then((value) => {
                  switch (value) {
                    case "catch":
                      window.location.reload();
                  }
                });
            }
        }
        if(firstCardValue.classList.value != secondCardValue.classList.value) {
            setTimeout(closeC, 500);
            function closeC(){
            firstCard.classList.remove('open', 'show', 'disabled');
            secondCard.classList.remove('open', 'show', 'disabled');
            numberClasses = 0;
            numberMistakes += 1;
            if(numberMistakes === 3) {
                stars.children[2].children[0].style.color = '#ffffff';
                numberStars -= 1;
            }
            if(numberMistakes === 6) {
                stars.children[1].children[0].style.color = '#ffffff';
                numberStars -= 1;
                starWord = "Star";
            }
            return;
            }
        }
    }
    return;

}


// Add main function to all cards
for (let i = 0; i < cards.length; i++){
    cards[i].addEventListener('click', respondToTheClick);
};
/* Things to do:
1) Programmatically build initial gameboard with 2 open pieces, like example. Start from there, or close all after giving instructions.

2) set time out for open and unmatched pieces

3) modal window for winner

*/
const list = [
    "fa-diamond",
    "fa-paper-plane-o",
    "fa-anchor",
    "fa-bolt",
    "fa-cube",
    "fa-anchor",
    "fa-leaf",
    "fa-bicycle",
    "fa-diamond",
    "fa-bomb",
    "fa-leaf",
    "fa-bomb",
    "fa-bolt",
    "fa-bicycle",
    "fa-paper-plane-o",
    "fa-cube"
];

let openCard = [];

let itemMatch = [];

// Initial Number of Moves, Counter
let counter = 0;

let moves = document.querySelector(".moves");

let restartTheGame = document.querySelector('.restart');

let stars = document.querySelector('.stars'); //------ ul.stars

restartTheGame.addEventListener('click', function() {
    gameBoard();
    counter = 0;
    moves.innerHTML = 0;
    stars.innerHTML = '';
});

intializeTheGame();

function gameBoard() {

    const newList = shuffle(list);

    let deck = document.querySelector(".deck");
    deck.innerHTML = '';

    for (var i = 0; i < list.length; i++) {
        let li = document.createElement("li");
        li.setAttribute("class", "card");
        li.innerHTML = `<i class='fa ${newList[i]}'></i>`;
        deck.appendChild(li);
        li.addEventListener("click", gameRules);
    }
}


function intializeTheGame() {
    gameBoard(); // create game board;
    startTimerFunc();
}



function startTimerFunc() {
    // start timer from 0 and add a second
}

function stopTimerFunc() {
    // start timer from 0 and add a second
}


function gameRules(el) {
    // debugger;

    if (openCard.length < 2) {
        open(el);

        // write another function
        show(el);

        pushTheCardIntoTheOpenCardArray(el);

        if (openCard.length == 2) {
            setTimeout(match, 1000);
        }
        count();
    }
}


function show(e) {
    e.currentTarget.classList.toggle("show");
}

function open(e) {
    e.currentTarget.classList.toggle("open");
}

function pushTheCardIntoTheOpenCardArray(e) {
    openCard.push(e.target);
}

function match(event) {
    if (openCard[0].children[0].className === openCard[1].children[0].className) {
        itemMatch.push(openCard[0]);
        itemMatch.push(openCard[1]);
        openCard[0].classList.add("match");
        openCard[1].classList.add("match");
    } else {
        openCard[0].classList.remove("open", "show");
        openCard[1].classList.remove("open", "show");
    }
    openCard = [];
    console.log(event.target.classList);
}

// This function increments moves
function count() {
    // consider MAX number of moves
    // if counter < 16, 3 stars ?

    moves.innerHTML = ++counter;

    if (counter === 5 || counter === 10 || counter === 15) {

        givePlayerShinyStar();

        console.log("Number of moves: " + counter);
    }

    // ifTheGameIsOver
    ifTheGameIsOver();

}

function ifTheGameIsOver() {
    if (itemMatch.length === 16) {


        showThePlayerTheWinnerModal();
    }
}

// showThePlayerTheWinnerModal();

function showThePlayerTheWinnerModal() {
    stopTimerFunc();
    // get value of timer and place in a variable timer
    let timer = '';

    const playerMessage = document.querySelector('.message');

    const playerMessageContent = document.querySelector('.message').children[0].children[1];

    playerMessageContent.innerHTML += "Moves played: " + counter + ".";
    playerMessageContent.innerHTML += "Time it took to win the game is: " + timer;
    // debugger;
    // console.log(playerMessage);
    playerMessage.style.display = 'block';
}


function givePlayerShinyStar() {

    stars.innerHTML += '<li><i class="fa fa-star"></i></li>';

}







/* FUNCTIONS */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
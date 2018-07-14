/* Things to do:
1) Programmatically build initial gameboard with 2 open pieces, like example. Start from there, or close all after giving instructions.

2) set time out for open and unmatched pieces

3) modal window for winner

*/
const list = [
    'fa-diamond',
    'fa-paper-plane-o',
    'fa-anchor',
    'fa-bolt',
    'fa-cube',
    'fa-anchor',
    'fa-leaf',
    'fa-bicycle',
    'fa-diamond',
    'fa-bomb',
    'fa-leaf',
    'fa-bomb',
    'fa-bolt',
    'fa-bicycle',
    'fa-paper-plane-o',
    'fa-cube'
];

let itemMatch = [];

// Initial Number of Moves, Counter
let counter = 0;

// Collect all the card



function gameBoard() {
    const deck = document.querySelector('.deck');

    for (var i = 0; i < list.length; i++) {
        let li = document.createElement('li');
        li.setAttribute('class', 'card');
        li.innerHTML = `<i class='fa ${shuffle(list)[i]}'></i>`;
        deck.appendChild(li);
        li.addEventListener('click', gameRules, false);
    }

}

gameBoard(); // create game board;
let cards = document.getElementsByTagName('li');

function gameRules(el) {
    if (itemMatch.length < 2) {
        this.el = this;
        open.apply(this.el, arguments);

        // write another function
        show.apply(this.el, arguments);

        matchItems.apply(this.el, arguments);

        count();
    } else {
        setTimeout(function() {
            // global: all cards
            console.log("here is where the timer function does something");

        }, 5000);
    }
}



function show(e) {
    e.currentTarget.classList.toggle('show');
}

function open(e) {
    e.currentTarget.classList.toggle('open');
}


function matchItems(e) {
    if (itemMatch.length < 2) {
        if (itemMatch.length == 0) {
            itemMatch.push(e.currentTarget.innerHTML);
            console.log(itemMatch);
        } else if (itemMatch.length == 1) {
            itemMatch.push(e.currentTarget.innerHTML);

            console.log(itemMatch);
        }
    } else {
        // do something like a timer
    }
}




// This function increments moves
function count() {

    // consider MAX number of moves
    // if counter < 16, 3 stars ?

    if (counter < 16) {
        document.querySelector('.moves').textContent = ++counter;
        console.log('Number of moves: ' + counter);
    }
}



/* FUNCTIONS */




// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
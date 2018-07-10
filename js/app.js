/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


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


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)

 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)

 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */


var matched = false; // not sure why I need this switch, but ??

var deck = document.body.querySelector('.deck');

var list = [
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




var makeDeck = function(array) {
    var listItem = '';


    // For info, see: Array.prototype.values() in MDN web docs
    let iterator = array.values();

    for (let value of iterator) {
        listItem = document.createElement('li');
        listItem.setAttribute('class', 'card');
        listItem.innerHTML = `<i class='fa ${value}'></i>`;
        deck.appendChild(listItem);
    }
};



// Shuffle Array list and make list of cards
makeDeck(shuffle(list));





var cards = Array.from(deck.children);
var bouncer = [];


cards.forEach(function(card) {
    // bouncer[bouncer.length] = card; // adds all cards to bouncer Array

    card.addEventListener('click', showCard);
});



/**********************************************************************/
/* Functions go here */
/**********************************************************************/

/* VERSION TWO IS MORE ELEGANT, KEEP FOR NOW */

/********************************************************************/
/*******************************************************************/
/******************************************************************/
/*****************************************************************/
/****************************************************************/





/********************* VERSION 1, DO NOT REMOVE *********************/
// function showCard() {

//     // var card = document.querySelector('li');
//     card = this;

//     var classes = card.classList;

//     // For info, see: CSSStyleDeclaration.setProperty() in MDN web docs
//     card.style.setProperty('font-size', '12px');

//     var result = classes.toggle('c');

//     if (result) {
//         card.textContent = "'c' added. classList is now'" + classes + "'.";
//     } else {
//         card.textContent = "'c' removed. classList is now'" + classes + "'.";
//     }
//     // this.classList.toggle('open');
//     // this.classList.toggle('show');
// }

/********************* VERSION TWO, DO NOT REMOVE *********************/
function showCard() {

    // var card = document.querySelector('li');
    card = this;

    var classes = card.classList;

    // For info, see: CSSStyleDeclaration.setProperty() in MDN web docs
    // card.style.setProperty('font-size', '12px');


    // add or remove multiple classes
    var cls = ['show', 'open'];

    var result = classes;

    if (!result.contains('show', 'open')) {
        classes.add(...cls);
    }

    if (result.contains('open', 'show')) {
        card.onclick = function(e) {
            classes.remove(...cls);
        };
    }
}
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

var deck = document.body.querySelector('.deck');


var makeDeck = function(input) {
    console.dir(input);


    var itemCount = input.length - 1;
    var html = '';

    for (var item = 0; item <= itemCount; item++) {

        html = document.createElement('li');
        html.setAttribute('class', 'card');
        html.innerHTML = `<i class='fa ${input[item]}'></i>`;
        deck.appendChild(html);
    }
};



// Shuffle Array list and make list of cards
makeDeck(shuffle(list));
console.log(shuffle(list));


// var showCard = function(item) {
//     // this.classList.add('show', 'open');
//     console.log('show card')

// };

// list.forEach(function(item) {
//     item.addEventListener('click', function(e) {

//         item.showCard;

//     });
// });

var cards = Array.from(deck.children);
var bouncer = [];


cards.forEach(function(item) {
    item.addEventListener('click', function(e) {
        item.classList.toggle('open');
        item.classList.toggle('show');
    });
});
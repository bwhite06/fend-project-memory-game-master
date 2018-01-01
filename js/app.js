/*
 * Create a list that holds all of your cards
 */
var array = $(".card").toArray();
var moves = document.getElementById("numberMoves").innerText = 0;

 function reset (){
    $(".card").removeClass("match").removeClass("open").removeClass("show");

 }

 function diamond(){
 var arr = $(".fa.fa-diamond").parents('.card').toArray()

 $ (arr[0]).click(function(){$(arr[0]).addClass("open").addClass("show")
var moves = document.getElementById("numberMoves").innerText++;
});

 $ (arr[1]).click(function(){$(arr[1]).addClass("open").addClass("show")
var moves = document.getElementById("numberMoves").innerText++;
});

if ($(arr[1]).hasClass("open") && $(arr[0]).hasClass("open")){
  $(".fa.fa-diamond").parents('.card').addClass("match");
}
else if (!$(".fa.fa-diamond").parents('.card').hasClass("open")){
  return reset();
}
}

function bolt(){
var arr1 = $(".fa.fa-bolt").parents('.card').toArray()

$ (arr1[0]).click(function(){$(arr1[0]).addClass("open").addClass("show")
var moves = document.getElementById("numberMoves").innerText++;
});

(arr1[1]).click(function(){$(arr1[1]).addClass("open").addClass("show")
var moves = document.getElementById("numberMoves").innerText++;
});

if ($(arr1[1]).hasClass("open") && $(arr1[0]).hasClass("open")){
 $("..fa.fa-bolt").parents('.card').addClass("match");
}
else if (!$(".fa.fa-bolt").parents('.card').hasClass("open")){
 return reset();
}
  }

diamond();
bolt();
 $(".restart").click(function(){reset()});

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */






// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

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

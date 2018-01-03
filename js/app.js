/*
 * Create a list that holds all of your cards
 */
var listCards = ["fa fa-diamond","fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle", "fa fa-diamond", "fa fa-bomb", "fa fa-leaf", "fa fa-bomb", "fa fa-bolt", "fa fa-bicycle", "fa fa-paper-plane-o", "fa fa-cube" ];

var moves = document.getElementById("numberMoves").innerText = 0;
var holder = $(".fa.fa-star");
window.onload = function() {
    listCards = shuffle(listCards);
    shuffle_cards(listCards);

  }
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

function shuffle_cards(array)
{
    var list = $(".deck li");
    for(var i = 0; i < list.length; i++)
        {
            var curr = list[i];
            curr = curr.getElementsByTagName("i")[0].setAttribute("class", array[i]);
            console.log(curr);
        }
}




 var card1, card2;
 var openList = [];
 var matchList = [];


 function ismatch()
{
    let class1 = $(openList[0]).children('i').attr('class');
    let class2 = $(openList[1]).children('i').attr('class');
    console.log("class1:",class1);
    console.log("class2:",class2);
    if(class1 === class2)
    {
        console.log("match card");
        $(openList[0]).addClass("match");
        $(openList[1]).addClass("match");
        matchList.push(openList[0]);
        matchList.push(openList[1]);
    }
    else {
        console.log("mismatch card");
        $(openList[0]).removeClass("open show");
        $(openList[1]).removeClass("open show");
    }
    openList.length = 0;
    return;
}

function moves1(){
  if (document.getElementById("numberMoves").innerText ==16){
      $(holder[2]).removeClass("fa fa-star") ;
  }
  else if (document.getElementById("numberMoves").innerText ==32) {
    $(holder[1]).removeClass("fa fa-star");
  }
  else if (document.getElementById("numberMoves").innerText==364) {
    $(holder[0]).removeClass("fa fa-star");
  }


}



$(document).ready(function() {





$(".restart").click(function() {
reset();
$(holder).addClass("fa fa-star");
});

$("ul.deck li").click(function() {

moves1();

        openList.push(this);
        $(this).addClass("show open");
        console.log(openList);

        if(openList.length === 2)
        {
            setTimeout(ismatch,1000);
        }

        var arr = $(".match").toArray();
        if (arr.length === 16){alert("You Win")}
            console.log(matchList);
            var moves = document.getElementById("numberMoves").innerText++;


    });



});


function reset (){
   $(".card").removeClass("match").removeClass("open").removeClass("show");
var moves = document.getElementById("numberMoves").innerText = 0;
console.log("reset");
$(holder).addClass("fa fa-star");
}






/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */







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

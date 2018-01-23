/*
 * Create a list that holds all of your cards
 */
var listCards = ["fa fa-diamond","fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt", "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle", "fa fa-diamond", "fa fa-bomb", "fa fa-leaf", "fa fa-bomb", "fa fa-bolt", "fa fa-bicycle", "fa fa-paper-plane-o", "fa fa-cube" ];

var moves = document.getElementById("numberMoves").innerText = 0;
var holder = $(".fa.fa-star");
let card1, card2;
let openList = [];
let matchList = [];
let clicked=false;
var countDown;
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
        }
}
//finds a match
 function ismatch()
{
    let class1 = $(openList[0]).children('i').attr('class');
    let class2 = $(openList[1]).children('i').attr('class');
    if(class1 === class2)
    {
        $(openList[0]).addClass("match");
        $(openList[1]).addClass("match")
        $(openList[0]).removeClass("open show");
        $(openList[1]).removeClass("open show");
        matchList.push(openList[0]);
        matchList.push(openList[1]);
    }

    else {
        $(openList[0]).removeClass("open show");
        $(openList[1]).removeClass("open show");
    }
    openList.length = 0;
    return;

}
//counts performance
function moves1(){
  if (document.getElementById("numberMoves").innerText ==16){
      $(holder[2]).removeClass("fa fa-star") ;
  }
  else if (document.getElementById("numberMoves").innerText ==32) {
    $(holder[1]).removeClass("fa fa-star");
  }


}


function reset (){
    $(".card").removeClass("match").removeClass("open").removeClass("show");
    var moves = document.getElementById("numberMoves").innerText = 0;
    $(holder).addClass("fa fa-star");
    listCards = shuffle(listCards);
    shuffle_cards(listCards);
    matchList = [];
    document.getElementById("minutes").innerHTML='00';
    document.getElementById("seconds").innerHTML='00';
    clicked = false;
    clearInterval(countDown);
}

function flip() {
  $('.card').removeClass('open').removeClass('show').removeClass('match');

}

function win(){
  if (matchList.length === 16){
    clearInterval(timer);
    alert("You Win in " + document.getElementById("numberMoves").innerText + " moves. With a star rating of " + $(".fa.fa-star").length + " in " + document.getElementById("minutes").innerText + " minutes and "+  document.getElementById("seconds").innerText + " seconds")
    reset();

   ;}
}

function timer(){
    var sec = 0;
    function pad ( val ) { return val > 9 ? val : "0" + val; }
        countDown = setInterval( function(){
        document.getElementById("seconds").innerHTML=pad(++sec%60);
        document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
        if (matchList.length === 16){
               clearInterval(countDown);
         }
       }, 1000);
}

$(document).ready(function() {
//main
   
$(".restart").click(function() {
clicked = false;
reset();
$(holder).addClass("fa fa-star");
});

$( "ul.deck li" ).one( "click", function() {
  
});
    
$("ul.deck li").click(function() {
    if (!clicked){
    timer();
  }
    moves1();
    clicked=true;
    document.getElementById("numberMoves").innerText++;
    openList.push(this);
    $(this).addClass("show open");
    if(openList.length === 2)
    {
      setTimeout(ismatch,502);
      setTimeout(win,700);
    }
});
});

//onload
window.onload = function () {
  listCards = shuffle(listCards);
  shuffle_cards(listCards);
  $(".card").removeClass("match").removeClass("open").removeClass("show");

};
let numberOfCards = prompt("Com quantas cartas quer jogar?");

const lsOfCards = [
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot",
    "metalparrot",
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot"
];
let lsOfSelectedCards;

while((numberOfCards < 4) || (numberOfCards > 14) || (numberOfCards%2 !== 0)){
    numberOfCards = prompt("Número de cartas inválido. Escolha um número par de cartas, entre 4 e 14:");
}

lsOfSelectedCards = lsOfCards.slice(0,(numberOfCards/2));
lsOfSelectedCards = lsOfSelectedCards.concat(lsOfSelectedCards);
lsOfSelectedCards.sort(comparator);

const deckElm = document.querySelector(".deck");

for(let i=0; i < lsOfSelectedCards.length; i++){
    deckElm.innerHTML = deckElm.innerHTML +
    `<div class="card" onclick="selectCard(this)">
        <div class="face front-face"><img src="img/front.png"></div>
        <div class="face back-face"><img src="img/${lsOfSelectedCards[i]}.gif"></div>
     </div>`;

}

let numOfMoves = 0;
let pairForComparison = [];
const lsOfCardElements = document.querySelectorAll(".card");


function comparator() { 
	return Math.random() - 0.5; 
}

function selectCard(element){
    if(!element.classList.contains("selected")){
        if(pairForComparison.length<2){
            element.classList.add("selected");
            numOfMoves++
            const iCard = Array.from(lsOfCardElements).indexOf(element);
            pairForComparison.push(iCard);
            console.log(pairForComparison)
        }
        if(pairForComparison.length == 2){
            verifyMatchingCards(pairForComparison)
        }
    }
    setTimeout('verifyWin()', 700);
}

function verifyMatchingCards(pair){
    const card1 = lsOfSelectedCards[pair[0]];
    const card2 = lsOfSelectedCards[pair[1]];
    
    if(card1 !== card2){
        setTimeout(function(){
                lsOfCardElements[pair[0]].classList.remove("selected");
                lsOfCardElements[pair[1]].classList.remove("selected");
            }, 1000);
    }
    
    pairForComparison = [];

}

function verifyWin(){
    
    const matchedCards = document.querySelectorAll(".selected");
    
    if(matchedCards.length == numberOfCards){
        alert(`Você ganhou em ${numOfMoves} jogadas!`)
    }
}
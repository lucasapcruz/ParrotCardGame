let numberOfcards = prompt("Com quantas cartas quer jogar?");

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

while((numberOfcards < 4) || (numberOfcards%2 !== 0)){
    numberOfcards = prompt("Número de cartas inválido. Com quantas cartas quer jogar?");
}

lsOfSelectedCards = lsOfCards.slice(0,(numberOfcards/2));
lsOfSelectedCards = lsOfSelectedCards.concat(lsOfSelectedCards);
lsOfSelectedCards.sort(comparator);

const deckElm = document.querySelector(".deck");

for(let i=0; i < lsOfSelectedCards.length; i++){
    deckElm.innerHTML = deckElm.innerHTML + `<div class="card face-down"><img src="img/front.png"></div>`;
}

function comparator() { 
	return Math.random() - 0.5; 
}
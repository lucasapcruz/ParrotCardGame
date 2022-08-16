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
    numberOfcards = prompt("Número de cartas inválido. Com quantas cartas quer jogar?")
}

lsOfSelectedCards = lsOfCards.slice(0,(numberOfcards/2)-1)
lsOfSelectedCards = lsOfSelectedCards.concat(lsOfSelectedCards)
lsOfSelectedCards.sort(comparator)

function comparator() { 
	return Math.random() - 0.5; 
}
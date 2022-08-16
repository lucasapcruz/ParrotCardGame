let numberOfcards = prompt("Com quantas cartas quer jogar?");

while((numberOfcards < 4) || (numberOfcards%2 !== 0)){
    numberOfcards = prompt("Número de cartas inválido. Com quantas cartas quer jogar?")
}




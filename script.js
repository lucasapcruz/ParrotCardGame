let numOfMoves;
let numberOfCards;
let timeCounter;
let interval;

startNewGame();

function promptUserForNmCards(){
    
    userResponse = prompt("Com quantas cartas quer jogar?");

    while ((userResponse < 4) || (userResponse > 14) || (userResponse % 2 !== 0)) {
        userResponse = prompt("Número de cartas inválido. Escolha um número par de cartas, entre 4 e 14:");
    }

    return userResponse;
}


function startNewGame() {

    const deckElm = document.querySelector(".deck");

    deckElm.innerHTML = "";

    timeCounter = 0;

    interval = setInterval(timer,1000);

    numberOfCards = promptUserForNmCards();
    
    numOfMoves = 0;
    
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

    lsOfSelectedCards = lsOfCards.slice(0, (numberOfCards / 2));
    lsOfSelectedCards = lsOfSelectedCards.concat(lsOfSelectedCards);
    lsOfSelectedCards.sort(comparator);

    for (let i = 0; i < lsOfSelectedCards.length; i++) {
        deckElm.innerHTML = deckElm.innerHTML +
            `<div class="card" onclick="selectCard(this)">
        <div class="face front-face"><img src="img/front.png"></div>
        <div class="face back-face"><img src="img/${lsOfSelectedCards[i]}.gif"></div>
     </div>`;

    }
}

function comparator() {
    return Math.random() - 0.5;
}


function selectCard(element) {
    let selectedCards = document.querySelectorAll(".comparing");
    console.log(selectedCards);

    if (selectedCards.length < 2) {
        element.classList.toggle("comparing");
        numOfMoves++
        selectedCards = document.querySelectorAll(".comparing");
        if (selectedCards.length == 2) {
            verifyMatchingCards(selectedCards);
        }
    }
}

function verifyMatchingCards(selectedCards) {
    const card1 = selectedCards[0].querySelector(".back-face img").getAttribute("src");
    const card2 = selectedCards[1].querySelector(".back-face img").getAttribute("src");

    if (card1 !== card2) {
        setTimeout(function () {
            selectedCards[0].classList.toggle("comparing");
            selectedCards[1].classList.toggle("comparing");
        }, 1000)
    } else {
        selectedCards[0].classList.add("selected");
        selectedCards[0].classList.remove("comparing");
        selectedCards[1].classList.add("selected");
        selectedCards[1].classList.remove("comparing");
        setTimeout(verifyWin, 550);
    }
}


function verifyWin() {
    const matchedCards = document.querySelectorAll(".selected");

    if (matchedCards.length == numberOfCards) {
        alert(`Você ganhou em ${numOfMoves} jogadas! \n Tempo total de jogo: ${timeCounter} segundos.`)
        let newGame = prompt("Deseja jogar novamente?");
        while(newGame !== "sim" && newGame !== "não"){
            newGame = prompt("Desculpe, não entendi. Deseja jogar novamente? Digite 'sim' ou 'não'.")
        }
        if(newGame == "sim"){
            startNewGame();
        }else{
            clearInterval(interval);
        }
    }
}

function timer(){
    timeCounter++
    document.querySelector(".timer p").innerHTML = `${timeCounter} s`
}
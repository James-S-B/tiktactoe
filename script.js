`strict`

const gameBoard = document.getElementById(`container`);
let currentGameBoard = [];
let turn = "X";
const xIndicator = document.getElementById(`x-indicator`);
const oIndicator = document.getElementById(`o-indicator`);

const Player = (name) => {
    const getName = () => name;
    return { getName };
};

player1 = Player(prompt("what do you want player 1's name to be?"));
player2 = Player(prompt("what do you want player 2's name to be?"))

function applyIndicator(e) {
    if (e.target.children.length == 0) {
        let currentindicator = document.createElement('h3');
        let textnode = document.createTextNode(`${turn}`);
        currentindicator.appendChild(textnode);
        currentindicator.classList.add("indicators");
        currentindicator.classList.add("temp");
        e.target.appendChild(currentindicator);
    }
}

function removeIndicator(e) {
    console.log(e.target.children[0].classList.contains("temp"));
    if (e.target.children[0].classList.contains("temp")) {
        e.target.children[0].remove();
    }
}

function play(e) {
    let currentindicator = document.createElement('h3');
    currentindicator.id = `${e.target.id}`
    currentindicator.class = "indicators"
    let textnode = document.createTextNode(`${turn}`);
    currentindicator.appendChild(textnode);
    currentindicator.classList.add("indicators");
    e.target.appendChild(currentindicator);
}

const squares = () => {
    for (i = 1; i <= 9; i++) {
        currentGameBoard.push('')
        let square = document.createElement('div');
        square.className = 'box';
        square.id = i;
        gameBoard.append(square);
        square.addEventListener('click', play);
        square.addEventListener('mouseover', applyIndicator);
        square.addEventListener('mouseleave', removeIndicator);
    }
}



squares()


const _winningCom = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
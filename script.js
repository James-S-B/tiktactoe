`strict`

const gameBoard = document.getElementById(`container`);
let currentGameBoard = [];
let turn = "X";
const reset = document.getElementById(`reset`);
let textbox = document.getElementById(`whats-happening`);
const xIndicator = document.getElementById(`x-indicator`);
const oIndicator = document.getElementById(`o-indicator`);

const Player = (name) => {
    const getName = () => name;
    return { getName };
};

const squaresfunc = () => {
    for (i = 1; i <= 9; i++) {
        currentGameBoard = [];
        currentGameBoard.push('')
        let square = document.createElement('div');
        square.className = 'box';
        square.id = i;
        gameBoard.append(square);
        square.addEventListener('click', play);
    }
}

// player1 = Player(prompt("what do you want player 1's name to be?"));
// player2 = Player(prompt("what do you want player 2's name to be?"))

function Check4Win(letter) {
    var idxs = [];
    for (var i = currentGameBoard.length - 1; i >= 0; i--) {
        if (currentGameBoard[i] === letter) {
            idxs.unshift(i);
        }
    }
    console.log(idxs)
    for (let i = 0; i <= _winningCom.length; i++) {
        if (JSON.stringify(_winningCom[i]) === JSON.stringify(idxs)) {
            win(turn)
        }
    }
}

function win(who) {
    textbox.textContent = (`${who} wins!`);
    gameBoard.classList.add(`fade`);
    reset.classList.remove(`hidden`)
}

reset.onclick = function(e) {
    for (i = 0; i < 9; i++) {
        const squares = document.getElementById(`${i}`);
        // squares.removeEventListener('click', play);

    };
    removeSquares();
    squaresfunc();
    reset.classList.remove(`fade`);
    textbox.textContent = e.target.id
}

const removeSquares = () => {
    for (i = 0; i < 9; i++) {
        const square = document.getElementById(`${i}`);
        gameBoard.remove(square);
    }
};

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

function play(e) {
    if (e.target.nodeName != "H3") {
        let currentindicator = document.createElement('h3');
        currentindicator.class = "indicators"
        let textnode = document.createTextNode(`${turn}`);
        currentindicator.appendChild(textnode);
        currentindicator.classList.add("indicators");
        e.target.appendChild(currentindicator);
        currentGameBoard[e.target.id - 1] = turn;
        Check4Win(turn);
        if (turn == "X") {
            turn = "O";
        } else {
            turn = "X";
        }
    }
}






squaresfunc();
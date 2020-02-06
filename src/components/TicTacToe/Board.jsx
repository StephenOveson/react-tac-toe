import React, { useState } from 'react'
import './Board.css'

const TicTacToe = () => {
    const [board, setBoard] = useState(Array.from(Array(9).keys()))
    const [gameEnded, setGameEnded] = useState(false)

    const human = 'X'
    const ai = 'O'
    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
    ]
    const cells = document.getElementsByClassName('square')

    const turnClick = (square) => {
        if(gameEnded) return
        if (typeof board[square.target.id] == 'number') {
            turn(square.target.id, human)
            if (!checkTie()) {
                setTimeout(function () {
                    turn(bestSpot(), ai)
                }, 500)
            }
        }
    }

    const turn = (square, player) => {
        board[square] = player;
        document.getElementById(square).innerText = player;
        let gameWon = checkWin(board, player)
        if (gameWon) gameOver(gameWon)
    }

    const checkWin = (board, player) => {
        let plays = board.reduce((a, e, i) =>
            (e === player) ? a.concat(i) : a, [])
        let gameWon = null;
        for (let [index, win] of winCombos.entries()) {
            if (win.every(elem => plays.indexOf(elem) > -1)) {
                gameWon = { index: index, player: player }
            }
        }

        return gameWon;
    }

    const gameOver = (gameWon) => {
        for (let index of winCombos[gameWon.index]) {
            document.getElementById(index).style.backgroundColor =
                gameWon.player === human ? "blue" : "red";
        }
        setGameEnded(true)
        declareWinner(gameWon.player === human ? "You Win" : "You Lose")
    }

    const declareWinner = (who) => {
        document.querySelector('.endgame .text').style.display = 'block';
        document.querySelector('.endgame .text').innerText = who;
    }

    const emptySquares = () => {
        return board.filter(square => typeof square == 'number')
    }

    const bestSpot = () => {
        return miniMax(board, ai).index;
    }

    const checkTie = () => {
        if (emptySquares().length === 0) {
            for (let i = 0; i < cells.length; i++) {
                cells[i].style.backgroundColor = 'green';
            }
            setGameEnded(true)
            declareWinner('Tie Game!')
            return true;
        }
        return false;
    }

    const miniMax = (newBoard, player) => {
        let availableSpots = emptySquares(newBoard)

        if (checkWin(newBoard, human)) {
            return { score: -10 };
        } else if (checkWin(newBoard, ai)) {
            return { score: 20 };
        } else if (availableSpots.length === 0) {
            return { score: 0 };
        }
        let moves = [];
        for (let i = 0; i < availableSpots.length; i++) {
            let move = {};
            move.index = newBoard[availableSpots[i]];
            newBoard[availableSpots[i]] = player;

            if (player === ai) {
                let result = miniMax(newBoard, human)
                move.score = result.score;
            } else {
                let result = miniMax(newBoard, ai)
                move.score = result.score;
            }

            newBoard[availableSpots[i]] = move.index;

            moves.push(move);
        }

        let bestMove;
        if (player === ai) {
            let bestScore = -10000;
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].score > bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i
                }
            }
        } else {
            let bestScore = 10000;
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].score < bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i
                }
            }
        }

        return moves[bestMove];
    }

    const replay = () => {
        setBoard(Array.from(Array(9).keys()))
        setGameEnded(false)
        for (let i = 0; i < cells.length; i++) {
            cells[i].innerText = '';
            cells[i].style.removeProperty('background-color');
        }
        document.querySelector('.endgame .text').style.display = 'none';
        document.querySelector('.endgame .text').innerText = '';
    }

    return (
        <div id="game">
            <div id="board" onClick={(e) => turnClick(e)}>
                <div className="square" id="0"></div>
                <div className="square" id="1"></div>
                <div className="square" id="2"></div>
                <div className="square" id="3"></div>
                <div className="square" id="4"></div>
                <div className="square" id="5"></div>
                <div className="square" id="6"></div>
                <div className="square" id="7"></div>
                <div className="square" id="8"></div>
            </div>
            <div className="endgame">
                <div className="text"></div>
                <button type="button" onClick={replay} className="theButton">Replay</button>
            </div>
        </div>
    )
}

export default TicTacToe;
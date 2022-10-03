import React from "react";
import { calculateWinner } from "../calculateWinner";
import { Board } from "./Board";

export class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null), //задаем начальное состояние для для сохранения истории
            }],
            xIsNext: true,
            stepNumber: 0,
        }
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length,
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        let status;
        if (winner) {
            status = 'Победитель: ' + winner;
        } else {
            status = 'Следующий ход: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        const move = history.map((_step, move) => {
            const desc = move ?
                'Перейти к ходу №' + move :
                'К началу игры';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{move}</ol>
                </div>
            </div>
        );
    }
}
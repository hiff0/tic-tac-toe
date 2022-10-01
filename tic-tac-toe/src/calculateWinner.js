export function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (const [index1, index2, index3] of lines) {
        if (squares[index1] && squares[index1] === squares[index2] && squares[index1] === squares[index3]) {
            return squares[index1];
        }
    }
    return null;
}

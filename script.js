let currentPlayer = 'X';
const board = ['', '', '', '', '', '', '', '', ''];

function marcarCasilla(index) {
    if (board[index] === '') {
        board[index] = currentPlayer;
        document.getElementById(index).innerText = currentPlayer;
        if (verificarGanador()) {
            alert(`${currentPlayer} gana!`);
            reiniciarJuego();
        } else if (verificarEmpate()) {
            alert('¡Es un empate!');
            reiniciarJuego();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function verificarGanador() {
    const combinacionesGanadoras = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
        [0, 4, 8], [2, 4, 6] // diagonal
    ];
    return combinacionesGanadoras.some(combinacion => {
        return board[combinacion[0]] !== '' && board[combinacion[0]] === board[combinacion[1]] && board[combinacion[1]] === board[combinacion[2]];
    });
}

function verificarEmpate() {
    return board.every(casilla => casilla !== '');
}

function reiniciarJuego() {
    board.fill('');
    document.querySelectorAll('.columnas').forEach(casilla => casilla.innerText = '');
    currentPlayer = 'X';
}

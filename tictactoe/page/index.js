const cellNodes = document.querySelectorAll('.cell')
const cells = Array.from(cellNodes)
const resetButton = document.querySelector('button#reset')

let currentPlayer = 'O'

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (cell.textContent !== '') {
            return;
        }

        cell.textContent = currentPlayer;
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        cell.style.backgroundColor = 'lightgreen';

    })
})

resetButton.addEventListener('click', () => {
    cells.forEach(cell => {
        cell.textContent = '';
    })
    currentPlayer = 'O';
})

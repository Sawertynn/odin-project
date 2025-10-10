/*plan 
 array of chars, printed 3 in row
 given index in numpad style: 1-9
*/

const prompts = require('prompt-sync');

type Board = Array<string>


const o = 'o';
const x = 'x';
const n = ' ';


function printBoard(board: Board): void {
    for (let row = 0; row < 3; row++) {
        let line = '|';
        for (let col = 0; col < 3; col++) {
            line += board[row * 3 + col] + '|';
        }
        console.log(line);
    }
}

function gameFinished(board: Board): boolean {
    if (!board.includes(n)) {
        return true;
    }
    return false;
}

function getUserChoise(board: Board): number {
    return -1;
}

function getComputerChoise(board: Board): number {
    return -1;
}

function winner(board: Board): string {
    
    return n;
}

function makeMove(board: Board, position: number, player: string) {
    if (board[position] !== n) {
        return undefined;
    }
    board[position] = player;
    return board;
}

let board = new Array<string>(9).fill(n);
let player = o;
let move = -1;

printBoard(board);
while(!gameFinished(board)) {
    let val = prompts(`${player}: move: `);
    move = parseInt(val);
    let ret = makeMove(board, move, player);
    printBoard(board);
    if (ret !== undefined) {
        player = (player === o) ? x : o;
    }
    
}

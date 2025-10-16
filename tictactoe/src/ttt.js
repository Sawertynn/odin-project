/*plan
 array of chars, printed 3 in row
 given index in numpad style: 1-9
*/
var prompts = require('prompt-sync');
var o = 'o';
var x = 'x';
var n = ' ';
function printBoard(board) {
    for (var row = 0; row < 3; row++) {
        var line = '|';
        for (var col = 0; col < 3; col++) {
            line += board[row * 3 + col] + '|';
        }
        console.log(line);
    }
}
function gameFinished(board) {
    if (!board.includes(n)) {
        return true;
    }
    return false;
}
function getUserChoise(board) {
    return -1;
}
function getComputerChoise(board) {
    return -1;
}
function winner(board) {
    return n;
}
function makeMove(board, position, player) {
    if (board[position] !== n) {
        return undefined;
    }
    board[position] = player;
    return board;
}
var board = new Array(9).fill(n);
var player = o;
var move = -1;
printBoard(board);
while (!gameFinished(board)) {
    var val = prompts("".concat(player, ": move: "));
    move = parseInt(val);
    var ret = makeMove(board, move, player);
    printBoard(board);
    if (ret !== undefined) {
        player = (player === o) ? x : o;
    }
}

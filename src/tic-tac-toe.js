class TicTacToe {
    constructor() {
        this.field = [[null,null,null],[null,null,null],[null,null,null]];
        this.step = 0;
    }

    getCurrentPlayerSymbol() {
        if(this.step % 2 === 0){
            return 'x';
        }
        else return 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.field[rowIndex][columnIndex]===null){
            this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.step++;
        }
    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {
        if(this.step>=9){
            return true;
        }
        else{
            return false;
        }
    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;

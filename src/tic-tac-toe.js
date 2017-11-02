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
        if(this.getWinner() || this.isDraw()){
            return true;
        }
        return false;
    }

    getWinner() {
        let counters = [0,0,0,0];
        for(let i = 0; i < 3; i++){
            counters.fill(0);
            for(let j = 0; j < 2; j++ ){
                if(this.field[i][j] === this.field[i][j + 1]){
                    counters[0]++;
                    if(counters[0] === 2){
                        return this.field[i][j];
                    }
                }
                if(this.field[j][i] === this.field[j + 1][i]){
                    counters[1]++;
                    if(counters[1] === 2){
                        return this.field[j][i];
                    }
                }
                if(this.field[j][j] === this.field[j + 1][j + 1]){
                    counters[2]++;
                    if(counters[2] === 2){
                        return this.field[j][j];
                    }
                }
                if(this.field[j][2 - j] === this.field[j + 1][1 - j]){
                    counters[3]++;
                    if(counters[3] === 2){
                        return this.field[j][2-j];
                    }
                }
            }
        }
        return null;
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
        if(this.getWinner() === null && this.noMoreTurns() ){
            return true;
        }
            return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;

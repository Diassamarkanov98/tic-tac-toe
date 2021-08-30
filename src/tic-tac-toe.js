class TicTacToe {
    currentPlayerSymbol = 'x';
    player = 1;
    moveCounter = 0;
    winner = null;
    rows = [0, 0, 0];
    columns = [0, 0, 0];
    diagonal = 0;
    antiDiagonal = 0;
    ticTacToeField = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    constructor() {}

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.ticTacToeField[rowIndex][columnIndex]) {
            return;
        } 
        this.ticTacToeField[rowIndex][columnIndex] = this.currentPlayerSymbol;
        this.currentPlayerSymbol = this.currentPlayerSymbol == 'x' ? 'o' : 'x';
        
        this.rows[rowIndex] += this.player;
        this.columns[columnIndex] += this.player;
        
        if (rowIndex == columnIndex) {
          this.diagonal += this.player;
        }
        if (rowIndex + columnIndex == 2) {
          this.antiDiagonal += this.player;
        }
        
        if (Math.abs(this.rows[rowIndex]) == 3 || Math.abs(this.columns[columnIndex]) == 3 
          || Math.abs(this.diagonal) == 3 || Math.abs(this.antiDiagonal) == 3) {
          this.winner = this.player == 1 ? "x" : "o";
        }
        
        this.player *= -1;
        this.moveCounter++;
      
    }

    isFinished() {
      return this.isDraw() || this.getWinner() != null ? true : false;
    }

    getWinner() {
      return this.winner;
    }

    noMoreTurns() {
      return this.moveCounter == 9 ? true : false;  
    }

    isDraw() {
      return this.moveCounter == 9 && this.getWinner() == null ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
        if ((rowIndex > 2 || rowIndex < 0) || (colIndex > 2 || colIndex < 0)) {
            return null;
        }
        return this.ticTacToeField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;

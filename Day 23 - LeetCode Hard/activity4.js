// ! N-Queens

function solveNQueens(n) {
    const solutions = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
  
    function backtrack(row) {
      if (row === n) {
        solutions.push(board.map(r => r.join('')));
        return;
      }
      
      for (let col = 0; col < n; col++) {
        if (isSafe(row, col)) {
          board[row][col] = 'Q';
          backtrack(row + 1);
          board[row][col] = '.';
        }
      }
    }
  
    function isSafe(row, col) {
      //* Check column
      for (let i = 0; i < row; i++) {
        if (board[i][col] === 'Q') return false;
      }
  
      //* Check upper-left diagonal
      for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] === 'Q') return false;
      }
  
      //* Check upper-right diagonal
      for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
        if (board[i][j] === 'Q') return false;
      }
  
      return true;
    }
  
    backtrack(0);
    return solutions;
  }
  

  const n = 4;
  const result = solveNQueens(n);
  console.log(result);
  
//* Output:

//? [
//?     [".Q..", "...Q", "Q...", "..Q."],
//?     ["..Q.", "Q...", "...Q", ".Q.."]
//?   ]
  


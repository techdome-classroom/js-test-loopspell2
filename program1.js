const getTotalIsles = function (grid) {

  // if (!grid || grid.length === 0) {
  //   return 0;
  // }

  const rows = grid.length;
  const cols = grid[0].length;
  let islands = 0;

  const island = (i, j) => {
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] !== 'L') {
      return;
    }

    grid[i][j] = '#';

    island(i + 1, j);
    island(i - 1, j);
    island(i, j + 1);
    island(i, j - 1);
  };


  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 'L') {
        island(i, j);
        islands++;
      }
    }
  }

  return islands;

};



module.exports = getTotalIsles;

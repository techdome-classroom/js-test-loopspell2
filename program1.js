const getTotalIsles = function (grid) {

  if (!grid || grid.length === 0) {
    return 0;
}

const rows = grid.length;
const cols = grid[0].length;
let islands = 0;



for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        if (grid[i][j] === 'L') {
            dfs(i, j);
            islands++;
        }
    }
}

return islands;

};

module.exports = getTotalIsles;

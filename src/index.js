
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (Array.isArray(matrix) && matrix.length > 0) {
    return matrix.reduce((result, row, index) => {
      if (index % 2 === 0) {
        result.push(...row);
      } else {
        result.push(...row.reverse());
      }
      return result;
    }, []);
  }
  return [];
}

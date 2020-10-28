const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let kittyCounter = 0;
  for (let i of matrix) {
    for (let k of i) {
      if (k === '^^') {
        kittyCounter++;
      }
    }
  }
  return kittyCounter;
};

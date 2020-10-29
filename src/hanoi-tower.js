const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let moves = 2 ** disksNumber - 1;
  let secs = Math.floor(moves / (turnsSpeed / 3600));
  
  return {turns: moves, seconds: secs};
};

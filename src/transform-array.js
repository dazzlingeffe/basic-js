const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Error');
  } else if (arr.length === 0) {
    return arr;
  }
  let trans = [];
  
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        trans.push('rmn');
        i++;
        break;
      case '--discard-prev':
        trans.pop();
        trans.push('rmp');
        break;
      case '--double-next':
        trans.push(arr[i + 1]);
        break;
      case '--double-prev':
        trans.push(trans[i - 1]);
        break;
      default:
        trans.push(arr[i]);
        break;
    }
  }
  for (let i = 0; i < trans.length; i++) {
    if (trans[i] === 'rmn' || trans[i] === 'rmp') {
      trans.splice(i, 1);
    }
  }
  return trans;
};

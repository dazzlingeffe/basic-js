const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let teamName = [];
  if(!Array.isArray(members)) {
    return false;
  }
  for (let s of members) {
    if (typeof(s) === 'string') {      
        for (let i = 0; i < s.length; i++) {
        if ((/[a-zA-Z]/).test(s[i]) && (i === 0 || s[i - 1] === ' ')) {
          teamName.push(s[i].toUpperCase());
          break;
        }
      }
    }
  }
  return teamName.sort().join('');
};

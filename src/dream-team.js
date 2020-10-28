const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let teamName = [];
  if(!Array.isArray(members)) {
    return false;
  }
  for (let s of members) {
    teamName.push(s[0]);
  }
  return teamName.sort().join('');
};

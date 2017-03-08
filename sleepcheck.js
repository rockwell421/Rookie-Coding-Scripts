var sleepCheck = function(numHours) {
  if (numHours >= 8) {
  return "You're getting plenty of sleep! Maybe even too much!";
  }
  else {
   return "Get some more shut eye!";
  }
};

console.log(sleepCheck(6));

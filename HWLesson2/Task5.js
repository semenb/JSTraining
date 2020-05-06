const checkForSpam = function(message) {
   if (message.toLowerCase().includes('spam')) {
     return true;
   }
  
  // dafault value
  return false;
}
  let check = false;
  if (message.toLowerCase().includes('spam')) {
    check = true;
  }
  if (message.toLowerCase().includes('sale')) {
    check = true;
  }
  return check;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

function firstWord(s) {
  
let word = '';
  let insideWord = false;
  
  for (let char of s) {
    if (char === ' ' && insideWord) {
      break; 
    } else if (char !== ' ') {
      insideWord = true; 
      word += char; 
    }
  }
  
  return word;
}
const s = prompt("Enter String:");
alert(firstWord(s));

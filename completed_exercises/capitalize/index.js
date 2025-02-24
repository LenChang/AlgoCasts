// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

module.exports = capitalize;

/*-- Pesudo Code --
    1. Split string to array with substring by space ' '
    2. Do for-loop
        2-a. Get the first word (FirstW) and the rest of each substring
        2-b. Change the FirstW to the upper case
        2-c. Append the updated FirstW on the head of the rest
    3. Join the array by space ' '
*/
//function capitalize(str) {
//    return str.split(' ').map(x=>{
//        const firstW = x[0].toUpperCase();
//        const rest = x.slice(1);
//        return firstW + rest;
//    }).join(' ')
//}

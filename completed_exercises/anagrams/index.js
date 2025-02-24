// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

module.exports = anagrams;

/*-- Solution 2 --
function anagrams(stringA, stringB) {
    const mapA = stringA.replace(/\W/,'').split('').reduce((acc,curr)=>{
        acc[curr] = acc[curr] ? acc[curr] + 1: 0;
        return acc
    },{})
    
    const mapB = stringB.replace(/\W/,'').split('').reduce((acc,curr)=>{
        acc[curr] = acc[curr] ? acc[curr] + 1: 0;
        return acc
    },{})
    
    
    if (Object.keys(mapA).length !== Object.keys(mapB).length) return false;
    
    for(const key in mapA){
        if(mapA[key] !== mapB[key]) return false
    }
    
    return true;
}
*/


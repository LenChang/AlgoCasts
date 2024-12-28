// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/**
 * Pesudo
 * 1. convert str to arr
 * 2. create a hash map which record {[char:string]: count}
 * 3. return the biggest value of key
 */
function maxChar(str) {
  const map = str.split("").reduce((acc, curr) => {
    acc[curr] = acc[curr] + 1 || 1;
    return acc;
  }, {});

  // for..in
  //   let maxChar = "";
  //   let max = 0;
  //   for (let idx in map) {
  //     if (map[idx] > max) {
  //       max = map[idx];
  //       maxChar = idx;
  //     }
  //   }
  //   return maxChar;

  return Object.keys(map).reduce((acc, curr) =>
    map[curr] > map[acc] ? curr : acc
  );
}

module.exports = maxChar;

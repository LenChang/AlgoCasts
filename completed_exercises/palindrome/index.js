// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/**
 * O(n/2), Split, Exchange and then compare
 * @param {*} str
 * @returns
 */
const reverse = (str) => {
  const arrEle = str.split("");
  for (let i = 0; i < arrEle.length / 2; i++) {
    let tmp = arrEle[i];
    arrEle[i] = arrEle[arrEle.length - 1 - i];
    arrEle[arrEle.length - 1 - i] = tmp;
  }
  return arrEle.join("");
};
const palindrome = (str) => str === reverse(str);

/**
 * O(n), Every and then compare
 * @param {*} str
 * @returns
 */
// function palindrome(str) {
//   return str.split("").every((char, i) => {
//     return char === str[str.length - i - 1];
//   });
// }

/**
 * O(n), Reverse and then compare
 * @param {*} str
 * @returns
 */
// const palindrome = (str) => str === str.split("").reverse().join("");

module.exports = palindrome;

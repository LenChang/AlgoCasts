// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/**
 * Pesudo Code
 * @param {*} str
 * @returns
 * 1. Split the string to elements
 * 2. (JS Func) Do reverse func
 * 3. Combine elements into a string
 */
const reverse = (str) => str.split("").reverse().join("");

module.exports = reverse;

/**
 * Pesudo Code
 * @param {*} str
 * 1. Split the string into elements by character
 * 2. Loop the elements (array) and excahnge the value between index 0 and index n-1, then do index 0+y and index n-1-y from y =0,1,2,...
 * 3. End the loop until index y = index n-y
 * 4. Combine elements into a string
 */
// const reverse = (str) => {
//   const arrEle = str.split("");
//   for (let i = 0; i + 1 <= arrEle.length / 2; i++) {
//     let tmp = arrEle[i];
//     arrEle[i] = arrEle[arrEle.length - 1 - i];
//     arrEle[arrEle.length - 1 - i] = tmp;
//   }
//   return arrEle.join("");
// };

/**
 * Pesudo Code
 * @param {*} str
 * @returns
 * 1. Split the string to elements
 * 2. (JS Func) Create a tmp variable and push the element which is popped from the last looply
 * 3. Combine elements into a string
 */
// const reverse = (str) => str.split("").reduce((acc, curr) => curr + acc, "");

/**
 * Pesudo Code
 * @param {*} str
 * @returns
 * 1. Split the string to elements
 * 2. Create a tmp variable and push the element which is popped from the last looply
 * 3. Combine elements into a string
 */
// const reverse = (str) => {
//   let reversed = "";
//   for (let ele of str) {
//     reversed = ele + reversed;
//   }

//   return reversed;
// };

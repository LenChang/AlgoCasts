// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/** Peudo Code
* 1-a. Create a flag, the initial value is 0
* 1-b. Create a array named finalResult for final result
* 1-c. Create a array named tmpChunk for array chunk
* 2. loop the array from index 0, pop the element to tmpChunk and make the flag = flag +1
* 3. when flag === size, inject tmpChunk into the final result and reset flag and tmpChunk
* 4. when  index === array.length -1, inject tmpChunk into the final result
* 5. return final result
* */
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

/* --- Original One ---
function chunk(array, size) {
     let flag = 0;
     let finalResult = [];
     let tmpChunk = [];
     
     array.forEach((x,idx)=>{
         tmpChunk.push(x);
         flag++;
         
         if(flag === size || idx === array.length - 1){
             finalResult.push(tmpChunk);
             tmpChunk = [];
             flag = 0;
         }
     })
     
     return finalResult;
}
*/

module.exports = chunk;

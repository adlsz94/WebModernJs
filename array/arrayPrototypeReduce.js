/**
 * TODO: See the links:
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 * 
 ** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 * 
 ** https://www.w3schools.com/jsref/jsref_reduce.asp
 * 
 *? Array.prototype.reduce()
 * 
 * The reduce() method of Array instances executes a user-supplied "reducer" callback function 
 * on each element of the array, in order, passing in the return value from the calculation 
 * on the preceding element. The final result of running the reducer across all elements 
 * of the array is a single value.
 * 
 * The first time that the callback is run there is no "return value of the previous calculation". 
 * If supplied, an initial value may be used in its place.
 * Otherwise the array element at index 0 is used as the initial value and iteration starts from 
 * the next element (index 1 instead of index 0).
 * 
 *? Try it
 * 
 */
// TODO See the link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

 const array1 = [1, 2, 3, 4]
 
 // 0 + 1 + 2 + 3 + 4
const initialValue = 0
const sumWithInitialValue = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue,)

console.log(sumWithInitialValue) // Expected output 10

/**
 *? Syntax
 * 
 ** reduce(callbackFn)
 ** reduce(callbackFn, initialValue)
 * 
 *? Parameters
 * 
 ** callbackFn
 * 
 * A function to execute for each element in the array. 
 * Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn. 
 * For the last invocation, the return value becomes the return value of reduce(). 
 * The function is called with the following arguments:
 * 
 ** accumulator
 * 
 * The value resulting from the previous call to callbackFn. 
 * On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].
 * 
 ** currentValue
 * 
 * The value of the current element. On the first call, its value is array[0] if initialValue is specified; 
 * otherwise its value is array[1].
 * 
 ** currentIndex
 * 
 * The index position of currentValue in the array. On the first call, 
 * its value is 0 if initialValue is specified, otherwise 1.
 * 
 ** array
 * 
 * The array reduce() was called upon.
 * 
 ** initialValue (Optional)
 * 
 * A value to which accumulator is initialized the first time the callback is called. 
 * If initialValue is specified, callbackFn starts executing with the first value in the array as currentValue. 
 * If initialValue is not specified, accumulator is initialized to the first value in the array, 
 * and callbackFn starts executing with the second value in the array as currentValue. In this case, 
 * if the array is empty (so that there's no first value to return as accumulator), an error is thrown.
 * 
 ** Return value
 * 
 * The value that results from running the "reducer" callback function to completion over the entire array.
 * 
 ** Exceptions
 * 
 ** TypeError
 * 
 * Thrown if the array contains no elements and initialValue is not provided.
 */
/**
 * Fast way using JavaScript to remove the duplicated elements
 * @type {number[]}
 */

var numbers = [1,2,3,3,3,4,5,6,7,7,8,8,9,9,9,9];
var numbersWithoutDuplicated = numbers.filter( (elem, i, array) => array.indexOf(elem) === i ); // should output => [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numbers);
console.log(numbersWithoutDuplicated);

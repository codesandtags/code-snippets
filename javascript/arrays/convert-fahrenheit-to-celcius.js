/**
 * Use the map function in ES6 to convert the fahrenheit values to celcius
 * @type {number[]}
 */
var fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
var celcius = fahrenheit.map(elem => Math.round((elem - 32) * 5 / 9));

console.log(fahrenheit);
console.log(celcius);

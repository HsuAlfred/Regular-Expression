/*
javascript will not match strings between lower and upper letters.
Using toLowerCase() or toUpperCase() to change the original string.
*/
var h = "Hello";

console.log( h.search("E") );
console.log( h.toUpperCase().search("E") );
console.log( h.search(/^h/) );
console.log( h.toLowerCase().search(/^h/) );

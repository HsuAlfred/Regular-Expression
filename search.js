/*
this is more like indexOf(), return the first location of letter,
but raguler expression is active here.
*/
var h = "Hello";

console.log( h.search("l") );// 2
console.log( h.search("a") );// -1
console.log( h.search("") );// 0
console.log( h.search(/^H/) );// 0

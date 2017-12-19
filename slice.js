/*
The slice( START, END ) is start at the given start argument, and end at, but not include.
It can also slice array.

 H e l l o
 0 1 2 3 4
*/
var h = "Hello";
var arr = [ 'A', 'B', 'C', 'D', 'E'];

console.log( h.slice(2,4) );//this will return ll
console.log( arr.slice(2,4) );//this will return [ 'C', 'D' ]

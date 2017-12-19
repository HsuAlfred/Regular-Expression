/*
This will return the location of last letter( Begining from 0).
If not macth, it will return -1

H e l l o
0 1 2 3 4
*/
var h = "Hello";
console.log( h.lastIndexOf("ll") );
console.log( h.lastIndexOf("a") );
console.log( h.lastIndexOf(/^H/) );// you can't use raguler here.

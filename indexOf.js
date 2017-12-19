/*
This will return the location of first letter( Begining from 0).
If not macth, it will return -1

Note: the empty "" will return 0.

H e l l o
0 1 2 3 4
*/
var h = "Hello";
console.log( h.indexOf("l") );
console.log( h.indexOf("") );
console.log( h.indexOf("a") );
console.log( h.indexOf(/^H/) );// you can't use raguler here.

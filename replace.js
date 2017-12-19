/*
This will replace the specify letter.
replace( Target String, Replacement )

return:
Ello
or if not detect
Hello
*/
var h = "Hello";
console.log( h.replace( "He", "E" ) );
console.log( h.replace( /^H/, "E" ) );//here we can use raguler too.

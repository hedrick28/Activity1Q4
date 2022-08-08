"use strict";
//function moving all zeros to end
function pushZerosToEnd(moveZeros, n) {
    var count = 0; // to set count for the new index of the non-zeros
    for (let i = 0; i < n; i++) {
        if (moveZeros[i].toString() != "0") {
            // Moving non-zeros to front of the array
            moveZeros[count++] = moveZeros[i];
        }
    }
    while (count < n) {
        // Moving zeros to the end of the array
        moveZeros[count++] = 0;
    }
}
// Running of Scripts
var moveZeros = new Array();
moveZeros = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
var n = moveZeros.length;
pushZerosToEnd(moveZeros, n);
for (let i = 0; i < n; i++)
    console.log(moveZeros[i] + " ");

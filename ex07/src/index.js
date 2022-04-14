// Only change code below this line
let numberArray = [9, 5, 4, 11, 5, 12, 13 ,15, 4, 2, 5]
numberArray.sort((a,b) => a-b);

let uniqueArray = new Set();
for(var i=0; i<numberArray.length; i++) {
    uniqueArray.add(numberArray[i]);
}


console.log(uniqueArray);
// Only change code above this line
module.exports = { numberArray, uniqueArray};
let myArr = [];
// Only change code below this line
function* multiplication(x) {
    var temp = x;
    for(var i=0; i<x; i++) {
        temp = temp*2;
        yield temp;
        myArr.push(temp);
    }
}

var num = multiplication(3);

console.log(num.next().value);
console.log(num.next().value);
console.log(num.next().value);

for(let number of num) {
    console.log(number);
}
// Only change code above this line
module.exports = multiplication;
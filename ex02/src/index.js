// Only change code below this line
function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}

function* insideGenerator1() {
    let x;
    for(var i=1; i<=5; i++) {
        x = yield i;
    }
}

function* insideGenerator2() {
    let x;
    for(var i=10; i<=15; i++) {
        x = yield i;
    }
}

function* insideGenerator3() {
    let x;
    for(var i=6; i<=9; i++) {
        x = yield i;
    }
}

iterator = myGenerator();
var fifteenArray = [];

for(var i=0; i<15; i++) {
    fifteenArray.push(iterator.next().value + "#");
    if(i === 14) fifteenArray.push(iterator.next().value + "#");
}

for(var j=0; j<fifteenArray.length; j++) {
    console.log(fifteenArray[j]);
}

/*for(var iter of iterator) {
    console.log(iter + "#");
}
console.log(iterator.next().value + "#");*/

// Only change code above this line
module.exports = { fifteenArray, myGenerator };
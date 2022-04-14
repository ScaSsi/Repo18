// Only change code below this line
function* myGenerator() {
    yield* [1,2,3,4,5];
    yield* "Arena";
    yield* arguments;
}

var iterator = myGenerator(6,7,8);
var generatorArray = [];
for(var iter of iterator) {
    generatorArray.push(iter);
}

for(var i=0; i<generatorArray.length; i++) {
    console.log(generatorArray[i]);
}
// Only change code above this line
module.exports = { generatorArray, myGenerator };
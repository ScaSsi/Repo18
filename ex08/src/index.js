// Only change code below this line
let one = new Set([1,2,3,4,5]);
let two = new Set([6,4,3,2]);

let unionSet = new Set([...one, ...two]);
//one.forEach(elem => unionSet.add(elem));
//two.forEach(elem => unionSet.add(elem));

console.log(unionSet);

let intersectionSet = new Set([...one].filter(elem => two.has(elem)));

console.log(intersectionSet);

let differenceSet = new Set([...one].filter(elem => !two.has(elem)));

console.log(differenceSet)

// Only change code above this line
module.exports = { unionSet, intersectionSet, differenceSet };
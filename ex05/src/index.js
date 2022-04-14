// Only change code below this line
var shoppingList = new Map([
    [3, 'Banana'],
    [5, 'Pineapple'],
    [2, 'Pear'],
    [10, 'Carrot'],
    [1.5, 'Apple'],
]);

var arrKey = [], arrValue = [];

arrKey.push(...shoppingList.keys());
arrValue.push(...shoppingList.values());

for(let i = 0; i<arrValue.length; i++) console.log("groceries:  " + arrValue[i]);
for(let i = 0; i<arrKey.length; i++) console.log("amount:  " + arrKey[i]);

Object.keys(shoppingList).forEach(function (key) {
    console.log(shoppingList[key], key)
});

"use strict"
for(const [key,value] of shoppingList.entries()) console.log("[ " + "'" + value + "'" + ", " + key + " ]");
// Only change code above this line
module.exports = { shoppingList, arrKey, arrValue };
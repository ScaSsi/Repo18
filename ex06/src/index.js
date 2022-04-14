// Only change code below this line
let rockStar = new Map();
rockStar.set("author", "The Rolling Stones");
rockStar.set("song", "Angie");
rockStar.set("album", "Goats Head Soup");
rockStar.set("singer", "Mick Jagger");

let newRock = new Map();

//console.log(rockStar.keys());

for(const [key,value] of rockStar.entries()) {
    if(key.charAt(0) !== "a") newRock.set(key, value);
}

console.log(newRock);


// Only change code above this line
module.exports = { rockStar, newRock };
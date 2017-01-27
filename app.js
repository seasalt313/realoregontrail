// Practice using objects and object notation to group similar types of data together.
//
// Create two different types of objects: a traveler and a wagon.
//
// A traveler has a few properties: an amount of food (number), a name (string), and an isHealthy (boolean).
//
// A wagon has a few properties as well: a passengers list (array) and a capacity (number).
//
// let traveler = {
//   food: 2,
//   name: "bob",
//   isHealthy: true
// };


//
// Create a new traveler object with the specified name, a random amount of food, and isHealthy = true. This should be very similar to makeCar from today's notes.
function makeTraveler(travelerName) {
    return {
        name: travelerName,
        amountFood: Math.round( 20*Math.random() ),
        isHealthy: true,
    }
}


// Create a new wagon with an empty passenger list and the specified capacity. This should be very similar to makeLot from today's notes.
function makeWagon(wagonCapacity) {
    return {
        passengers: [],
        capacity: wagonCapacity,
    }
}


function eat(traveler){
  if (traveler.amountFood < 20) {
  return traveler.isHealthy = false;
  } else {
    return traveler.amountFood = traveler.amountFood - 20;
  }
}

function join(wagon, traveler){
  if (wagon.passengers.length < wagon.capacity) {
    wagon.passengers.push(traveler);
  }
}

function quarantine(wagon){
  let people = wagon.passengers;
  let healthOfPeeps = people.filter(function(p){
    if (p.isHealthy === false) {
      return p;
    } else {
      return false;
    }
  })
  return healthOfPeeps;
}

function food(wagon){
  let people = wagon.passengers;
  let foodAmount =  people.map(function(p){
      return p.amountFood
    })
      // (p) => p.food; //es6 .map

    return foodAmount.reduce(function(a, b){
      return a + b;
    }, 0);
}

function hunt(traveler){
  let coinflip = Math.random();
  console.log(coinflip + " is coinflip");
  if (coinflip < .5) {
    return traveler.amountFood = traveler.amountFood + 100;
  } else {
    return traveler.amountFood;
  }
}


let wagon = makeWagon(5);
console.log(wagon);
let traveler = makeTraveler('Henrietta');
console.log(traveler);
let traveler2 = makeTraveler('Juan');
console.log(traveler2);

console.log(hunt(traveler)); // maybe get more food
console.log(eat(traveler2));
eat(traveler2); // juan is hungry
join(wagon, traveler);
join(wagon, traveler2);

console.log(quarantine(wagon)); // print true if someone is sick, false otherwise
console.log(food(wagon)); // print juan's food + henrietta's food

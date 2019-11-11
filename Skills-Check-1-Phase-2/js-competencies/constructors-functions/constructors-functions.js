
//////////////////PROBLEM 1////////////////////

// Get the following constructor function to pass the tests.

//BROKEN ON PURPOSE 

function EgyptianGoddesses(name, oversees, strength, weakness) {
  name = name;
  oversees = oversees;
  strength = strength;
  weakness = weakness;

  return function() {
    name,
    oversees,
    strength,
    weakness
  }
  
}

// Use the variable maatCharacteristics below to create a new Egyptian Goddess - save it to 
// the variable maat.

var maatCharacteristics = ['Maat', 'Truth and Justice', 'Balancing and Just', 'Exacting in her standards']

var maat = EgyptianGoddesses(maatCharacteristics);


//////////////////PROBLEM 2////////////////////

// Get the following constructor function to pass the tests.

//BROKEN ON PURPOSE 

function TestScores() {
  this.name;
  this.percent;

  return this.name + this.percent
}


//Now create a new TestScore with the above constructor function, and save it in a variable called suzy. Suzy got a 98 on the test.


var suzy = TestScores('Suzy', 98);


//////////////////PROBLEM 3////////////////////

// Write a constructor function Caveman that takes in a name, age, and weapon as its three parameters.

// Each caveman should have a property called health that is equal to 100 and a property called energy 
// that is equal to 100.

let Caveman = (name, age, weapon) => {
  this.name;
  this.age;
  this.weapon;
}

Caveman.health = 100;
Caveman.energy = 100;

// Now create a new Caveman with the constructor function you made called 'larry'. 
// Larry is 25 and has a 'rock' for a weapon.
// Save the result to a variable called larry.

let larry = Caveman('Larry', 25, 'rock');




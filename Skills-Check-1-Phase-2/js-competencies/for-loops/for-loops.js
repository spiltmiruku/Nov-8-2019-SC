//+++++++++ Start Here! All problems are below. +++++++++//

//////////////////PROBLEM 1////////////////////

//Finish the function addNumbers so that it pushes numbers starting at
//0 and up to (but not including) the value passed in, into the array
//myNumbers. Make sure to return the array myNumbers at the end.
//ex: passed 5 --> return [0, 1, 2, 3, 4]

function addNumbers(value) {
  var myNumbers = [];
  for (let i = 0; i < value; i++) {
    myNumbers.push(i);
  }
  return myNumbers;
}

//////////////////PROBLEM 2////////////////////

//Finish the function backwardsGreeting. backwardsGreeting should loop
//through the array parameter from end to start, concatinating "Hello, "
// with each element, and pushing the resulting string into the greetings
//array. Then return the greetings array.

// function backwardsGreeting(arr) {
//   let greetings = [];
//   for(let i = arr.length - 1; i > 0; i--){
//    greetings.push(arr[i] + "Hello, ");
//   }
// return greetings;
// }

//////////////////PROBLEM 3////////////////////

//Finish the function leapFrog. leapFrog should loop through every
//odd element of the array parameter. For every iteration, concatenate
//the string ' frog' onto the element. Then return the array. NOTE: use
//the variable i for your for loop

function leapFrog(arr) {
  var odds = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr(arr[i]) % 2 === 1) {
      odds.push(arr[i]);
      odds += " frog";
    }
  }
  return arr;
}

"use strict";

// Start functions with a verb
function createRandomNumber(number) {
  return Math.ceil(Math.random() * number);
}

// Set variables
const heading = document.getElementById("js-log");
const role = document.getElementById("role");
let message = "Make a selection";
let testArray = [
  {
    name: "Jesse",
    age: 37,
    status: "Married",
  },
  {
    age: 38,
    name: "Monica",
    status: "Married",
  },
  {
    age: createRandomNumber(9),
    name: "Aurora",
    status: "What's my age again?",
  },
];


heading.textContent = message;

// Use a select list to change role
role.addEventListener("change", setRole);
function setRole() {
  let choice = role.value;

  //* Here's one way using turnery. Hard to read.
  // choice ? heading.textContent = `Your role is ${choice}` : heading.textContent = `Your role not set`;

  //* If statement easier to read.
  if (choice) {
    heading.textContent = `Your role is ${choice}`;
  } else {
    heading.textContent = "Role not set";
  }
}

// This function...
function minA(a, b) {
  return a < b ? a : b;
}
// is the same as this function
let minB = (a, b) => a < b ? a : b;

// Pick the last N characters
function lastN(str, n) {
  let length = str.length;
  let part = str.substr(length - n);
  if (length > n) {
    return part;
  } else {
    return `Pick a number smaller than ${length}`;
  }
}


//= Console Log helpful stuff
// View DOM elements
console.log(heading); // Prints the HTML
console.dir(heading); // All available properties and methods
console.table(testArray); // Prints a table of an array
console.warn("Set an alert");
console.error(`You done messed up, ${testArray[0].name}!`);
console.clear();

//* Use consistent vocabulary
 // Good
// function getPlayerScore();
// function getPlayerName();
// function getPlayerTag();

// Bad
// function getUserScore();
// function fetchPlayerName();
// function retrievePlayer1Tag();

//= Arrays
let fruits = ["Banana", "Orange", "Apple", "Mango"];

//* Length
let numberOfFruits = fruits.length;

//* toString()
// The JavaScript method toString() converts an array to a string of (comma separated) array values.
fruits.toString(); // Banana,Orange,Apple,Mango

//* join()
// Similar to toString(), but you can specify separator
fruits.join(" - "); // Banana - Orange - Apple - Mango

//* pop()
// Prints then removes the last element, or "pops" it out.
fruits.pop(); // "Mango"; fruits = ["Banana", "Orange", "Apple"]

//* push()
// add an element to the end.
fruits.push("Kiwi"); //fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

//* shift()
// removes the last element and "shifts" the rest to a lower index.
fruits.shift(); // "Banana"; fruits = ["Orange", "Apple", "Mango"];

//* unshift();
// Adds an element to the beginning and "unshifts" older elements.
// This retungs the new array length.
fruits.unshift("Lemon"); // 4; fruits = ["Lemon", "Banana", "Orange", "Apple", "Mango"];

//* Change element
fruits[0] = "Kiwi"; // fruits = ["Kiwi", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi"; // Easy append, just like push()

//* delete
//! This leaves undefined holes in the array.
delete fruits[0]; // fruits = [undefined, "Orange", "Apple", "Mango"];

//* concat()
// Merges arrays
let veggies = ["Lettuce", "Onion"];
let meats = ["Steak", "Bacon"];

let food = fruits.concat(veggies, meats);
// can also take values, e.g. array.concat("last item");


//= DOM Manipulation
const container = document.querySelector('#container');
// selects the #container div (don't worry about the syntax, we'll get there)

console.dir(container.firstElementChild);                      
// selects the first child of #container => .display

const controls = document.querySelector('.controls');   
// selects the .controls div

console.dir(controls.previousElementSibling);                  
// selects the prior sibling => .display
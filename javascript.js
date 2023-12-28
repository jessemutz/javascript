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
const div = document.createElement('div');
div.style.cssText = 'color:blue;font-size:.75rem;"';
div.textContent = "Hello!";
heading.appendChild(div);
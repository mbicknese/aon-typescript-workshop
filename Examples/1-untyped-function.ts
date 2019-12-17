// Types
//
const five: number = 5;
const name: string = "Simon";
const validated: boolean = false;
const nothing: undefined = undefined;
const unusable: void = nothing;
const justSimon: "Simon" = "Simon";

// Don't do this, more on objects later
const foo: object = {};

//
// We expect numbers to calculate the sum of given numbers
//
function sum(a, b) {
  return a + b;
}

const c = sum(5, 5);

// Booleans
//
function isObject(subject) {
  if (subject == null) {
    return false;
  }
  if (Array.isArray(subject)) {
    return false;
  }
  if (typeof subject === "object") {
    return true;
  }
}

const isItAnObject: boolean = isObject("bar");

// ignore
export {};

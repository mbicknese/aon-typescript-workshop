function getNumberOrString(input) {
  // Type guard
  if (typeof input == "number") {
    return 1337;
  }

  return "Hello World";
}

const mySuperString = getNumberOrString("foo");
const mySuperNumber = getNumberOrString(2);
const mySuperArray = getNumberOrString([]);

// ignore
export {};

// Enums
//
enum Laptop {
  MacBook = "macbook",
  ZBook = "zbook",
  ZenBook = "zenbook",
  Yoga = "yoga"
}

const myLaptop: Laptop = "zbook";

// Arrays
//
const myStuff: Array<Laptop> = [Laptop.Yoga, Laptop.ZBook];

// Tuples
//
type writeStatus = [boolean, string];
function writeIt(): writeStatus {
  // do stuff
  return [false, "could not connect"];
}

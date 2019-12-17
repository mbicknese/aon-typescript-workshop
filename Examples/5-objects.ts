const anyObject: object = {};
anyObject.bar = "no bar here";

// Using a type (type)
//
type developer = {
  name: string;
  phone: "android" | "iphone";
  getsPaid?: boolean;
  dance: () => void;
};

const robbert: developer = {
  name: "Robbert",
  phone: "android",
  dance: () => null
};

// Using an interface (type)
//
interface KnowsLanguages {
  languages: Array<string>;

  learn(language: string): void;
}

const maarten: KnowsLanguages = {
  languages: [],
  learn: (language: string) => null
};

// Using a class (value)
//
class TypescriptDeveloper implements KnowsLanguages, developer {
  knowsTypescript: boolean = true;
}

const you = new TypescriptDeveloper();
you.knowsTypescript;

const alsoYou: TypescriptDeveloper = {
  knowsTypescript: false
};

/**
 * Fun time!
 *
 * Build the full implementation for the TypescriptDeveloper class.
 * Make it so the `knowsTypescript` is still readable but derives its value from the languages array.
 *
 * Bonus points for using an enum
 *
 * Here are two simple test cases
 */
const youBeforeWorkshop = new TypescriptDeveloper();
console.log("Should be false: ", youBeforeWorkshop.knowsTypescript);

const youAfterWorkshop = new TypescriptDeveloper();
youAfterWorkshop.learn("typescript");
console.log("Should be true: ", youBeforeWorkshop.knowsTypescript);

// ignore
export {};

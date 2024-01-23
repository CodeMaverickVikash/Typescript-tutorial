/*
 * TypeScript is a superset of JavaScript that introduces static typing. With TypeScript, you can define types for variables, function parameters, and return values, which allows you to catch type-related errors during development.
 * Compile-Time Checking: Type checking is done at compile time rather than runtime. This can lead to more robust code and better tooling support.
 * Type Annotations: TypeScript allows you to add type annotations to your code using features such as interfaces, enums, and custom types, providing additional information to developers and tools.
 * TypeScript includes all the features of ES6 and beyond, as it is a superset of JavaScript. This means you can use the latest JavaScript features while also taking advantage of TypeScript-specific features.
 */

// ----------------------------------------- Variable and dataType (type) --------------------------------
/*
 * Types in typescript - type means datatype in other language
 * 1. primitives types - boolean, number & string.
 * 2. Special types - any, unknown, never, undefined & null, this type does not refer to any specific type of data.
 * In ts we can assign types in two way : Explict and implicit
 * 1. Explicit type assignment are easier to read and more intentional.
 * 2. Implicit type assignment/type inference will guess the type, based on the assigned value.
 */

let firstName: string = "Dylan"; // Explicit
let lastName = "Dylan"; // Implicit

// Note: TypeScript will throw an error if data types do not match.
let fname: string = "Dylan";
// fname = 33; // attempts to re-assign the value to a different type: THROW ERROR

// -------------------------------------------- Array ------------------------------------------------------
const names: string[] = [];
names.push("vikash");

var arr: readonly number[] = [1, 2, 3, 4]; // readonly mode arr created
// arr.push(4); // ERROR: 'push' does not exist on type 'readonly'
console.log({ names, arr });

// ------------------------------------------------- Function ---------------------------------------------
// multiply() accepts two para of number and return type is also number
function multiply(a: number, b: number): number {
  return a * b;
}

// we can mark some para as optional by using "?" operator
function add(a: number, b: number, c?: number) {
  return a + b + (c || 1);
}

// we can mark some para as default by assigning default value
function pow(value: number, exponent: number = 10) {
  return value ** exponent;
}

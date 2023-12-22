// ----------------------------------------------- Static Typing ----------------------------------------
const namevar: string = "vikash2";

// -------------------------------- Interfaces - custom data structures/data type -------------------------
interface Employee {
  id: number;
  name: string;
  address: string;
  phoneNumber: number;
  email?: string;
}

// usage example
const obj: Employee = {
  id: 123,
  name: "vikash",
  address: "mt-12 mp",
  phoneNumber: 983821291,
};

// ------------------------------------------- Enums - to make constant -----------------------------------------
enum AppConstant {
  // urls
  HOME_ROUTE_URL = "home/",
  // apis
  GET_EMPLOYEE_BY_ID = "getEmployeeById?id=",
}

enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

// Usage example
const selectedColor: Color = Color.Green;
console.log("Selected color:", selectedColor);

// ------------------------------------------------ Generics -----------------------------------------------
// Generic function that swaps the values of two variables
function swap<T>(a: T, b: T): [T, T] {
  return [b, a];
}

// Usage example
const result = swap<number>(1, 2);
console.log("Swapped values:", result);

// ----------------------------------------------- Union and Intersection Types -------------------------------
// Union type - A union type allows a variable to have multiple types. It is expressed using the | (pipe) symbol.
let result2: number | string;

result2 = 10; // Valid
result2 = "hello"; // Valid
// result = true;  // Error: Type 'boolean' is not assignable to type 'number | string'.

// Intersection type - An intersection type combines multiple types into a single type. It is expressed using the & (ampersand) symbol.
interface Car {
  brand: string;
  model: string;
}

interface Electric {
  batteryType: string;
}

type ElectricCar = Car & Electric;

const myCar: ElectricCar = {
  brand: "Tesla",
  model: "Model S",
  batteryType: "Lithium-ion",
};

// -------------------------------------------- Type Assertion -------------------------------------------
/*
 * There are two ways to perform type assertion in TypeScript:
 * 1. Angle Bracket Syntax
 * 2. As Keyword:
 */

let variable: any = "This is a string";
let strLength: number = (<string>variable).length;

console.log(strLength); // Prints the length of the string

let variable2: any = "This is a string";
let strLength2: number = (variable as string).length;

console.log(strLength); // Prints the length of the string
// Both methods essentially tell the TypeScript compiler to treat the variable as a string for the purpose of the specific operation (in this case, getting the length). This can be useful when working with dynamic types or when the type inference system is not able to deduce the type correctly.
let variable3: any = 10;
let strLength3: number = (variable as string).length; // This will not cause a compile-time error, but it will result in a runtime error

// ------------------------------------------------ Tuples -------------------------------------------------
// Declare a tuple type
let person: [string, number, boolean];

// Initialize a tuple
person = ["John Doe", 30, true];

// Access elements by index
const name2: string = person[0];
const age: number = person[1];
const isActive: boolean = person[2];

console.log(`Name: ${name2}, Age: ${age}, IsActive: ${isActive}`);

// ----------------------------------------------- String Literal Types -------------------------------------
// Define a type with string literal values
type Direction = "North" | "South" | "East" | "West";

// Function using string literal types
function move(direction: Direction): void {
  console.log(`Moving ${direction}`);
}

// Usage examples
move("North"); // Valid
move("South"); // Valid
// move("InvalidDirection"); // Error: Argument of type 'InvalidDirection' is not assignable to parameter of type 'Direction'.

// Datatypes are divided into two parts 1. Primitive datatype 2. Reference(Non-primitive datatype)
// Primitive datatypes are 1. Number 2. String 3. Boolean 4. Null 5. Undefined 6. Symbol 7. BigInt
// Reference datatypes are 1. Object 2. Array 3. Function

// Primitive datatypes are immutable, which means their values cannot be changed once they are created. 
// Reference datatypes are mutable, which means their values can be changed after they are created.

// Primitive datatypes are stored in the stack memory, while reference datatypes are stored in the heap memory.

// Primitive datatypes are compared by value, while reference datatypes are compared by reference.

// Primitive datatypes have a fixed size, while reference datatypes can grow in size as needed.

// Primitive datatypes are passed by value, while reference datatypes are passed by reference.

// Primitive datatypes can be directly assigned to variables, 
// while reference datatypes require the use of constructors or literals to create instances.

// Primitive datatypes are more efficient in terms of memory and performance, 
// while reference datatypes provide more flexibility and functionality for complex data structures.

//Examples of primitive datatypes
let num = 42; // Number
let str = "Hello, World!"; // String
let bool = true; // Boolean
let nul = null; // Null
let undef = undefined; // Undefined
let sym = Symbol("unique"); // Symbol
let bigInt = 9007199254740991n; // BigInt

//Examples of reference datatypes
let obj = { name: "Alice", age: 30 }; // Object
let arr = [1, 2, 3, 4, 5]; // Array
function greet() { // Function
    console.log("Hello!");
}   

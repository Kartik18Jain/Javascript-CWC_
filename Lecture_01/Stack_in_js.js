// There are generally two types of stack :- 1. Stack memory (primitive(call by value)) 
// 2. Heap memory (reference(called by reference))

// Stack memory is used to store primitive datatypes, which are immutable and have a fixed size.
// Heap memory is used to store reference datatypes, which are mutable and can grow in size as needed.

// In stack memory, variables are stored directly with their values,
//  while in heap memory, variables store references (or pointers) to the actual data.

// When a variable is assigned a primitive value, it is stored directly in the stack memory.

// When a variable is assigned a reference value, 
// it stores a reference to the location in heap memory where the actual data is stored.

// When a variable is passed as an argument to a function, 
// if it's a primitive value, a copy of the value is passed (call by value).
// If it's a reference value, a copy of the reference is passed, allowing the function to modify the original data (call by reference).

// Primitive datatypes include Number, String, Boolean, Null, Undefined, Symbol, and BigInt.
// Reference datatypes include Object, Array, and Function.

// Understanding the difference between stack and heap memory is crucial for efficient
//  memory management and performance optimization in JavaScript.


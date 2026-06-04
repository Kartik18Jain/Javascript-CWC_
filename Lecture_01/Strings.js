const name = "Kartik";
const greeting = "Hello, " + name + "!";
console.log(greeting); // Output: Hello, Kartik!

// Using template literals
const templateGreeting = `Hello, ${name}!`;
console.log(templateGreeting); // Output: Hello, Kartik!

// String methods
console.log(name.length); // Output: 6
console.log(name.toUpperCase()); // Output: KARTIK
console.log(name.toLowerCase()); // Output: kartik
console.log(name.includes("art")); // Output: true
console.log(name.startsWith("Ka")); // Output: true
console.log(name.endsWith("ik")); // Output: true
console.log(name.indexOf("t")); // Output: 2
console.log(name.slice(1, 4)); // Output: art
console.log(name.replace("K", "M")); // Output: Martik


// String concatenation with numbers
const num1 = 5;
const num2 = 10;
const combined = name + num1 + num2; // "Kartik510"
console.log(combined); // Output: Kartik510

// String concatenation with other strings
const str1 = "Hello";
const str2 = "World";
const combinedStr = str1 + " " + str2; // "Hello World"
console.log(combinedStr); // Output: Hello World

// String concatenation with template literals
const combinedTemplate = `${str1} ${str2}`; // "Hello World"
console.log(combinedTemplate); // Output: Hello World

// String concatenation with mixed types
const mixedCombined = `${name} is ${num1} years old.`; // "Kartik is 5 years old."
console.log(mixedCombined); // Output: Kartik is 5 years old.

const url = "https://www.example%20.com";
const fullUrl = `${url}/path/to/resource`;
console.log(fullUrl); // Output: https://www.example.com/path/to/resource

const website = "https://kartikjain%20.com";
console.log(website.replace("%20", "")); // Output: https://kartikjain.com
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

// String concatenation with numbers and template literals
const age = 25;
const message = `I am ${age} years old.`;
console.log(message); // Output: I am 25 years old.

const price = 19.99;
const productMessage = `The price of the product is $${price}.`;
console.log(productMessage); // Output: The price of the product is $19.99.

const quantity = 3;
const totalMessage = `Total cost: $${price * quantity}.`;
console.log(totalMessage); // Output: Total cost: $59.97.

const name1 = "Alice";
const name2 = "Bob";
const greetingMessage = `Hello, ${name1} and ${name2}!`;
console.log(greetingMessage); // Output: Hello, Alice and Bob!

const firstName = "John";
const lastName = "Doe";
const fullName = `${firstName} ${lastName}`;
console.log(fullName); // Output: John Doe

const city = "New York";
const country = "USA";
const locationMessage = `I live in ${city}, ${country}.`;
console.log(locationMessage); // Output: I live in New York, USA.

const item = "book";
const pricePerItem = 9.99;
const quantityPurchased = 2;
const totalCostMessage = `The total cost for ${quantityPurchased} ${item}s is $${pricePerItem * quantityPurchased}.`;
console.log(totalCostMessage); // Output: The total cost for 2 books is $19.98.

const userName = "Charlie";
const welcomeMessage = `Welcome, ${userName}!`;
console.log(welcomeMessage); // Output: Welcome, Charlie!

const language = "JavaScript";
const learningMessage = `I am learning ${language}.`;
console.log(learningMessage); // Output: I am learning JavaScript.
//Define variables
let apple = "apple";
let uppercaseapple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];

//Testing equality and inequality with strings
console.log("Is apple is equal to apple?");
console.log(apple == apple);

console.log("Is apple is not equal to apple?");
console.log(apple != apple);

//Test using lowercase function
console.log("Is APPLE is equal to apple after converted it into lowercase");
console.log(uppercaseapple.toLowerCase() == "apple");

console.log("Is APPLE is not equal to apple after converted it into lowercase");
console.log(uppercaseapple.toLowerCase() != "apple");

//Numerical test
//Equal to
console.log("Is ten is equal to twenty");
console.log( ten == twenty);

//Not Equal to
console.log("Is ten is not equal to twenty");
console.log( ten != twenty);

//Greater then
console.log("Is ten is greater then zero");
console.log( 10 > 0);

//Smaller then
console.log("Is twenty is smaller then ten");
console.log( 20 < 10);

//Greater then or Equal to
console.log("Is ten is greater then or equal to 5");
console.log( 10 >= 5);

//Smaller then or Equal to
console.log("twenty is smaller then or equal to 10");
console.log( 20 <= 10);

//Test using "and" & "or" operator
//&& AND operator
console.log("twenty is not equal to ten and twenty is greater then 10");
console.log( twenty != 10 && 20 >10);

console.log("twenty is not equal to ten and twenty is greater then 30");
console.log( twenty != 10 && 20 > 30);

// || OR operator
console.log("twenty is greater then 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("twenty is greater then 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);

//Test weather an item is include in Array
console.log("Is orange include in my fruits Array ");
console.log(fruits.includes("orange"));

//Not include
console.log("Is orange not include in my fruits Array ");
console.log(!fruits.includes("orange"));
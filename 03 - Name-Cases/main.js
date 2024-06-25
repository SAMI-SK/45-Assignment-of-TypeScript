// Name Cases: Store a person’s name in a variable, 
// And then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "sami mehmood";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.split(" ").map(function (item) { return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase(); }).join(" "));

// Define the function to show magicians name
function show_magicians(magcians) {
    magcians.forEach(function (name) { return console.log(name); });
}
// Function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magician names
var magician_names = ["Sami", "Hammad", "Naveed"];
// Making a copy of Orignal array through .Slice() function
var copy_magician_names = magician_names.slice();
// Modify the copied array to include "The Great" with their names
var copy_great_magicians = make_great(copy_magician_names);
// Show both arrays Orignal and Copied
// Orignal
console.log("Orignal Array\n");
show_magicians(magician_names);
// Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);

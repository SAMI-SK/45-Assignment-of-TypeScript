// Define the function to show magicians name
function show_magicians(magcians) {
    magcians.forEach(function (name) { return console.log(name); });
}
function make_great(magcians) {
    return magcians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magician names
var magcian_names = ["Sami", "Hammad", "Naveed"];
var great_magicians = make_great(magcian_names);
show_magicians(great_magicians);

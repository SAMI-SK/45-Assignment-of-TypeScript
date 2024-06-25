// Define a function to print each magician name from an array
function show_magicians(show_magicians) {
    show_magicians.forEach(function (name) { return console.log(name); });
}
//Define an array containing magicians name
var magicians_names = ["Sami", "Hammad", "Naveed"];
// Call the function to print each magician name
show_magicians(magicians_names);

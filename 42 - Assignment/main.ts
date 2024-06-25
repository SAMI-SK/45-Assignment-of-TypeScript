// Define the function to show magicians name
function show_magicians(magcians: string[]){
    magcians.forEach(name => console.log(name));
}

// Function to make magicians great through .map() it will modify array
function make_great(magcians: string[]){
    return magcians.map(name => `The Great ${name}`);
}

// Define an array of magician names
let magcian_names = ["Sami", "Hammad", "Naveed"];

// Call make_great function to modify magicians names
let great_magicians = make_great(magcian_names);

// Call show_magicians that show modified list of magicians
show_magicians(great_magicians)
// Define a function to print each magician name from an array

function show_magicians(show_magicians: string[]){
    show_magicians.forEach(name => console.log(name));
}

//Define an array containing magicians name
let magicians_names = ["Sami", "Hammad","Naveed"]

// Call the function to print each magician name
show_magicians(magicians_names);
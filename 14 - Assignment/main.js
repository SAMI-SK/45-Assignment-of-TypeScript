// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.
var GuestList = ["Sami", "Shahbaz", "Naveed", "Hammad"];
GuestList.forEach(function (OneGuest) { return console.log("Salam ".concat(OneGuest, ",\n would you like to dinner with me?")); });
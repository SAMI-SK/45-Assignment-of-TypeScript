// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. 
// Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
var GuestList = ["Sami", "Hammad", "Shahbaz", "Naveed"];
var DonotCome = GuestList[0];
console.log(DonotCome, "is not coming for Dinner.");
// 1 is SAMI, 0 is SAMMAD, array start with 0 number, splice remove SAMI from first and add SAMMAD to first number. 
GuestList.splice(0, 1, "Sammad");
console.log("Good news! i have found a bigger table for Dinner.");
// Unshift method use to place any name at the top of the list.
GuestList.unshift("Owais");
// Push method use to place any name at the end of the list.
GuestList.push("Azeem");
// Middleindex method use to place any name in the middle of the list.
var middleindex = Math.floor(GuestList.length / 2);
GuestList.splice(middleindex, 0, "Osama");
console.log("updated list of our Guest");
GuestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me")); });

//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
//and you have space for only two guests.
//• Start with your program from Exercise 16. 
//Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. 
//Each time you pop a name from your list, 
//print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. 
//Print your list to make sure you actually have an empty list at the end of your program.
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
// Inform guest that i can only invite two guest for Dinner.
console.log("Unfortunately, the new dinner table won't arrive on time, So i can only invite two guest to dinner with me.");
// Using While-loop method to remove Guest until two name remain.
while (GuestList.length > 2) {
    var removedguest = GuestList.pop();
    console.log("Sorry, ".concat(removedguest, " i can invite you to Dinner"));
}
console.log("Invitation to the last 2 Guest");
GuestList.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ", You are still invited to Dinner")); });
//Using pop method to remove last two Guest from the list.
GuestList.pop();
GuestList.pop();
console.log("Emptylist:", GuestList);

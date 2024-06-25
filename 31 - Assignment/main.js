var userNames = ["Sami", "Shahbaz", "Naveed", "Admin", "Hammad"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your Array is Empty, We need to find some users!");
}
else {
    userNames.forEach(function (oneuser) {
        if (oneuser === "ADMIN") {
            console.log("Hello ".concat(oneuser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneuser, ", Thank you for logging in again."));
        }
    });
}

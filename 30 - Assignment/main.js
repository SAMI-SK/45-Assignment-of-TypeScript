//Creating a Array
var userNames = ["SAMI", "HAMMAD", "SHAHBAZ", "NAVEED", "ADMIN"];
//Using forEach loop on Array
userNames.forEach(function (oneuser) {
    if (oneuser === "ADMIN") {
        console.log("Hello ".concat(oneuser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneuser, ", Thank you for logging in again."));
    }
});

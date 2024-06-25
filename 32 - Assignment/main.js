// Array of current users
var current_users = ["Hammad", "Shahbaz", "Naveed", "Sami", "Ali"];
// Array of new users
var new_users = ["Saim", "Khan", "hammad", "Awan", "Naveed"];
// Loop through new users to check for usernames avaibility
new_users.forEach(function (new_one_user) {
    // Making a condition for new username already exit and save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print different messages using IF_Else statement
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});

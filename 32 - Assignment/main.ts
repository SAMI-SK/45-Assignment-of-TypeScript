// Array of current users
let current_users = ["Hammad", "Shahbaz", "Naveed", "Sami", "Ali"]

// Array of new users
let new_users = ["Saim", "Khan", "hammad", "Awan", "Naveed"]

// Loop through new users to check for usernames avaibility
new_users.forEach(new_one_user => {

// Making a condition for new username already exit and save in our_condition variable
let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

// Print different messages using IF_Else statement
if(our_condition){
    console.log(`Sorry ${new_one_user} is already taken`)

}else{
    console.log(`This username ${new_one_user} is available`);
    
}
})
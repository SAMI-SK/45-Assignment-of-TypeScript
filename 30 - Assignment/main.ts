//Creating a Array
let userNames = ["SAMI","HAMMAD","SHAHBAZ","NAVEED","ADMIN"];

//Using forEach loop on Array
userNames.forEach(oneuser =>{
    if(oneuser === "ADMIN"){
console.log(`Hello ${oneuser}, would you like to see a status report?`);

}else{
console.log(`Hello ${oneuser}, Thank you for logging in again.`)
}
})
let userNames = ["Sami", "Shahbaz", "Naveed", "Admin", "Hammad"]

userNames = []
if(userNames.length === 0){
console.log("Your Array is Empty, We need to find some users!");

}else{
    userNames.forEach(oneuser =>{
        if(oneuser === "ADMIN"){
    console.log(`Hello ${oneuser}, would you like to see a status report?`);
    
    }else{
    console.log(`Hello ${oneuser}, Thank you for logging in again.`)
    }
    })
}
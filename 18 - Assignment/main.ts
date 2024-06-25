//Making a Array of Counties and Print it in Original Order.
let Countriestovisit : string[] = ["Denmark","China","Brazil","America"];
console.log("Original Order:", Countriestovisit);

//Print the Array in Alphabetical Order without Modifying the Actual Array List.
console.log("Alphabetical Order:", [...Countriestovisit].sort());

//Show that the Array is still in Original Order.
console.log("Still in Original Order:", Countriestovisit);

//Print the Array in Reversed Order without Modifying the Actual Array List.
console.log("Reverse Order:", [...Countriestovisit].reverse());

//Show that the Array is still in Original Order.
console.log("Still in Original Order:", Countriestovisit);

//We have changed in the Original Array Order Now.
console.log("Orignal Array Reverse:", Countriestovisit.reverse());

//Print the Array to show that it's back to Original order.
console.log("Back to Original Order:", Countriestovisit.reverse());

// Print the Array to show that it's Order has been Changed in Alphabetical Order now.
console.log("Sorted in Alphabetical Order:", Countriestovisit.sort());

//We have again changed in the Original Array Order now in reversed order again.
console.log("Orignal Array Reverse Again:", Countriestovisit.reverse());



 
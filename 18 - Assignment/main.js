var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Making a Array of Counties and Print it in Original Order.
var Countriestovisit = ["Denmark", "China", "Brazil", "America"];
console.log("Original Order:", Countriestovisit);
//Print the Array in Alphabetical Order without Modifying the Actual Array List.
console.log("Alphabetical Order:", __spreadArray([], Countriestovisit, true).sort());
//Show that the Array is still in Original Order.
console.log("Still in Original Order:", Countriestovisit);
//Print the Array in Reversed Order without Modifying the Actual Array List.
console.log("Reverse Order:", __spreadArray([], Countriestovisit, true).reverse());
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

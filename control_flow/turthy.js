// truthy values
// "0", "false", any values written in string is considered as truthy values, " ", [], {}, function(){}


// falsy values
// false, 0, -0, BigInt -> 0, " ", null, undefined, NaN

// how to check if object is empty or not 

const emptyobj = {}

if (Object.keys(emptyobj).length === 0)
{
    console.log("false");
}


// Nullish coalescing operator(??): null, undefined
// if there is any value for that the variable can retrun then it retuns that value is returned else null or undefined is returned and the falsy values like "0" or "false" is preserved


let val = null ?? 10
console.log(val);

// ternary operator
// condition ?  true : false

let val2 = 110
val2 >= 80? console.log("yes") : console.log(no);


// const myarr = [1,2,3,4,5,6]
// const myarr2 = new Array(1,2,3,4,5)

// array methods

// myarr.push(6)
// myarr.push(7)
// myarr.pop()
// myarr.unshift(8)
// myarr.shift()


// console.log(myarr.includes(7))
// console.log(myarr.indexOf(2))

// const newarr = myarr.join()
// console.log(myarr)
// console.log(newarr)



// slice
// const myn1 = myarr.slice(1,4)
// console.log(myn1)
// console.log("a", myarr)

// splice
// const myn2 = myarr.splice(1,4)
// console.log(myn2)
// console.log("b", myarr)


const myarr = [1,2,3,4,5,6]
const myarr2 = ["a","b","c","d","e"]

// myarr.push(myarr2)
// console.log(myarr[6][4])

// const myarr3 = myarr.concat(myarr2)
// console.log(myarr3)

// const myarr4 = [... myarr, ... myarr2]
// console.log(myarr4)

// const myarr5 = [1,2,3,[4,5,6],7,[8,9,[3,2,1]]]
// const myarr6 = myarr5.flat(Infinity) depth of the array
// console.log(myarr6)


console.log(Array.isArray(myarr)) // to check if it is a array or not
console.log(Array.from("jenin"))

console.log(Array.from({name:"hecules"})) // returns empty set as the object does not have the length property. so it will produce an empty array.

console.log(Object.values({name: "hecules"})); // with the help of object.values we can insert the value in the array.

console.log(Array.of(var1, var2, var3)) // with the help of array.of we can make an array of multiple variables.



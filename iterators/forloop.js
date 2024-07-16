
const array = [10,45,6,5,8]
// for (let index = 0; index < array.length; index++) {
//     console.log(array[index])
// }


// for of loop 


// const greetings = "hello world"
// for (const val of greetings) {
//     console.log("val is "+val);
// }

// maps

// const map = new Map()
// map.set('in', "india")
// map.set('uk', "united kingdom")

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, value);
// }


// for objects forof is not used forin is used
// Why for...of Doesn't Work Directly on Objects
// Plain objects are not iterable because they do not have the Symbol.iterator method implemented. The for...of loop requires the object being iterated to have this method, which returns an iterator.


// forin loop
const obj ={
    username: "jenin",
    age: 20,
    gender: "male"
}

// printing val of object 
// for (const key in obj) {
//     console.log(obj[key]);
// }

// printing val of array
// for (const key in array) {
//     console.log(array[key]);
// }


// foreach loop
// array.forEach(element => {
//     console.log(element);
// });

// array.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

// array of objects

const arrobj = [
    {
        user: "jenin",
        age: 20
    },
    {
        user: "aman",
        age: 22
    },
    {
        user: "pragya",
        age: 21
    }
]

arrobj.forEach( (item) =>{
    console.log(item.user);
} )

// singleton object when we declare it like literal that time it is not created

// object.create > creating object with the help of constructor method


//object literals

// const sym = Symbol("k1")

// const juser = {
//     name: "john",
//     [sym]: 'k1',
//     age: 20,
//     email: "john@gmail.com",
//     address: "kolkata",
//     workingday: ["mon","tue"]
// }

// console.log(juser);
// Object.freeze(juser) // to freeze the object so that no changes can be made in the object
// juser.age = 21
// console.log(juser)

// console.log(Object.values(juser)) // to access the values only

// juser.greet = function(){
//     console.log(`hello ${this.name}, ${this.age}, ${this.email}`);
// }

// console.log(juser.greet())


//singleton objects

// const tinderuser = new Object()

// tinderuser.id = 123
// tinderuser.name = "jay"

// console.log(tinderuser)

// nested objects

// const user = {
//     fullname: {
//         firstname: {
//             name: "jerry"
//         },
//         middlename:{
//             name: "john"
//         }
//     }
// }

// console.log(user.fullname.firstname)

// merging objects

// const obj1 = {1:"a", 2:"b"}
// const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1, obj2} //it merges but it will merge as different objects

// const obj3 = Object.assign(obj1, obj2) // in this the objects will be merged as one new object
// const obj3 = Object.assign({}, obj1, obj2) // it acts as a traget and combines all the values of the objects in to it and the values acts as the source.

// spread operator
// const obj3 = {...obj1, ...obj2}
// console.log(obj3)

// array of objects

// const user = [
//     {id: 1, name: "kevin", age: 19},
//     {id: 2, name: "jerry", age: 20},
//     {id: 3, name: "john", age: 21}
// ]

// console.log(user[1])


// how to extract or destructure the values of the object  

// const course = {
//     name: "javascript",
//     price: "599",
//     duration: "3 months",
// }

// printing the values by just calling the property name
// const {duration} = course
// console.log(duration)


const name = function cha (){
    const a = "jeomom"
    console.log(this.name)
}


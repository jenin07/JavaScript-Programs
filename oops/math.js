// in js we can't change the value of math pi because Because PI is a static property of Math, you always use it as Math.PI, rather than as a property of a Math object you created (Math is not a constructor) and in its properties writable, enumerable and congiurable all of them are false and even if we try to change the property of math.pi using object.defineproperty we can't change it as it is hardcoded in cpp language in depth.

const desc = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(desc);

const obj = {
    name: "ginger tea",
    price: 20,

    orderchai: function(){
        console.log("hello");
        
    }
}

// console.log(Object.getOwnPropertyDescriptor(obj, "name"))


for (let [key, value] of Object.entries(obj)) {

    // to remove the function from iterating
    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`);
}
}


// changing the property of obj by using define property
Object.defineProperty(obj, 'name', {
    writable: false,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(obj, "name"));

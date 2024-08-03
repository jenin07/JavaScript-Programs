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

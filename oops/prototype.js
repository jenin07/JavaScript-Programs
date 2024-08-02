// let myname = "jenin";

// console.log(myname.length);
// console.log(myname.trueLength);


let hero = ["spidy", "thor", "iromman"]

let power  = {
    thor: "hammer",
    spidy: "web",
    ironman: "blast",

    spidyPower: function (){
        console.log(`spidy power is ${this.spidy}`);
        
    }
}

// injecting a new function in object using prototype by which this function will be available in every object.
Object.prototype.god = function(){
    console.log("god is in every object");
    
}

// injecting a new function in array using prototype by which this function will be available in every object.

Array.prototype.hello = function() {
    console.log(`hello ${power.thor}` );
    
}

hero.hello(); //it will return the value as hero is an array datatype and we have added a new function in array's property with the help of prototype


power.hello(); //it will not return the value as power is an object datatype and we have added a new function in array's property with the help of prototype so it won't work on object as object has higher piority than array. we can call a function that is created in object in a array datatype like below example

// power.god();
// hero.god()


//inheritance

const user = {
    name: "chai",
    work: "google"
}

const teacher =  {
    video: true
}
const support = {
    avail: false
}

const tasup ={
    fulltime: true,
    __proto__: support
}

// old approach
teacher.__proto__ = user

// new approach
Object.setPrototypeOf(support, teacher)
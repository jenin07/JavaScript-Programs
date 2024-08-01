// const user = {
//     username: "jenin",
//     age: "21",
//     degree: "mca",

//     // method
//     getuser: function(){
//         // console.log("got the details");
//         console.log(`username: ${this.username}`);
//     }
// }

// console.log(user.degree);
// console.log(user.getuser());


// creating function to understand the use of new keyword
function user (user, age, degree){
    this.user = user;
    this.age = age;
    this.degree = degree;

    this.hello = function(){
        console.log(this.user);
    }

    return this; //we don't need to return if we are using new keyword as it is returned implicitly
}

// const user1 = user("ansh", 23, "mca");
// const user2  = user("anil", 22, "btech");

// console.log(user1); //it will print the details of user2 as the function is overridden so that's why we use new keyword as it will create a new instance of object
// because of new keyword a new constructor function is called. It packs all the argments and return backs it 
// it will be stored in this keyword

const user1 = new user("ansh", 23, "mca");
const user2  = new user("anil", 22, "btech");

console.log(user1);
console.log(user2);

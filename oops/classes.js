class user{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encrpytPass (){
        return `${this.password}abc`
    }

    changeuser(){
        return `${this.username.toUpperCase()}`
    }
}

const name = new user("jenin", "@gmail.com", 1234)

console.log(name.encrpytPass());
console.log(name.changeuser());


// behind the scene it is workiing same as this approach

// function user(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// user.prototype.encrpytPass = function (){
//     return `${this.password}abc`
// }

// user.prototype.changeuser = function (){
//     return `${this.username.toUpperCase()}`
// }

// const chai = new user("chai", "chai@gmail.com", 1234);
// console.log(chai.encrpytPass());
// console.log(chai.changeuser());


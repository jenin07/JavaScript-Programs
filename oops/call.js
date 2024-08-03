function setuser(user){
    this.user = user

}

function createuser(username, email, password){


    // to hold the reference of the above function you have to use .call and this keyword in the parameter by doing this the context of the function is stored in the this keyword and if we don't use this keyword then the context cannot be accessed as the function is removed from the call stack after calling the function. 
    setuser.call(this, username)
    this.email = email
    this.password = password

}

const chai = new createuser("jenin", "jenin@mail.com", 1234)

console.log(chai);

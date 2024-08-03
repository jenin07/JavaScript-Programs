class user{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(this.username);
        
    }
}

class teacher extends user {
    constructor(username, email){
        super(username)
        this.email = email
    }

    addcourse(){
        console.log(`new course was added by ${this.username}`);
        
    }
}

const tea = new teacher("chai", "chai@mail.com")
// console.log(tea);
// tea.addcourse();

const masalatea = new user("tea");
// tea.logme();
// masalatea.logme();


// console.log(masalatea instanceof user);
// console.log(tea instanceof teacher);


class user{
    constructor(username){
        this.username = username;
    }

    logme(){
        console.log(`username: ${this.username}`);
        
    };

    // if we don't want to give access of createid to everyone then we can use static keyword before the function name. The static keyword doesn't give access to it's inherited class also if we don't want to give the access.
    static createid(){
        return `123`
    }
    
    
}

const jenin = new user("jenin")
console.log(jenin.createid());

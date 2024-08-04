const user ={
    _email: 'jenin@com',
    _password: 'sdnfsl',


    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }

}

// creating using factory function
const num = Object.create(user)
console.log(user.email);

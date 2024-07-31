const promise_1 = new Promise(function(resolve, reject) {
    // do an async task
    // db calls, cryptography, network
    setTimeout(function () {
        console.log('async task is complete');
        resolve()
    }, 1000)
});

promise_1.then(function (){
    console.log("private consumed");
})


// promise 2
new Promise(function (resolve, reject){
    setTimeout( function () {
        console.log("task 2");
        resolve();
    }, 1000);
}).then(function () {
    console.log("task 2 compeleted");
});

// promise 3
const promise_3 = new Promise(function (resolve, reject){
    setTimeout(() => {
        resolve({username: 'jenin', email: "jenin@gmail.com"})
    }, 1000);
})

promise_3.then(function (user){
    console.log(user);
})

// promise 4

const promise_4 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username: 'jenin', password: '123'})
        }
        else{
            reject('error something wrong')
        }
        
    }, 2000);
})

promise_4.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function (error) {
    console.log(error);
})
.finally(() => {
    console.log("the promise is resolved or rejected");
})


// promise 5

const promise_5 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: 'java', password: '123'})
        }
        else{
            reject('js went wrong')
        }
    }, 1000);
})

async function consumepromise_5 (){

    try {
        const repo = await promise_5 ;
        console.log(repo);
    } catch (error) {
        console.log(error);
    }
}

consumepromise_5();


//  fetching users from api
// async function getallusers(){
    
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }  
// }

// getallusers();


// using fetch() 

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data); 
})
.catch((error) => console.log(error))
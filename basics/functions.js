function sayname() {
    console.log("hello")
}

// sayname () // without small bracket it will be reference and with small bracket it will be execution

// function addnum (num1, num2){
//     console.log (num1 + num2);
// }

// function addnum (num1, num2){
//     return (num1 + num2);
// }
// const result = addnum(3,7)
// console.log(result)


function loginuser(username)
{
    if (!username)
    {
        console.log("Please enter your name")
        return
    }
        return `${username} just logged in`
    
}

console.log(loginuser("Jenin"))